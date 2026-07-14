import { useCallback, useEffect, useState } from "react";
import {
  defaultLanguage,
  portfolioContent,
  supportedLanguages,
} from "../data/portfolioContent";

const languageStorageKey = "portfolio-language";

function isSupportedLanguage(language) {
  return supportedLanguages.includes(language);
}

function getUrlLanguage() {
  const urlLanguage = new URLSearchParams(window.location.search).get("lang");

  return isSupportedLanguage(urlLanguage) ? urlLanguage : null;
}

function getStoredLanguage() {
  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey);

    return isSupportedLanguage(storedLanguage) ? storedLanguage : null;
  } catch {
    return null;
  }
}

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  return getUrlLanguage() || getStoredLanguage() || defaultLanguage;
}

function updateLanguageUrl(language, method) {
  const url = new URL(window.location.href);

  if (language === defaultLanguage) {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", language);
  }

  window.history[method](
    { language },
    "",
    `${url.pathname}${url.search}${url.hash}`
  );
}

function updateMetaContent(selector, content) {
  document.querySelectorAll(selector).forEach((element) => {
    element.setAttribute("content", content);
  });
}

function updateStructuredData(content) {
  const script = document.querySelector('script[type="application/ld+json"]');

  if (!script) {
    return;
  }

  try {
    const structuredData = JSON.parse(script.textContent);
    const graph = Array.isArray(structuredData["@graph"])
      ? structuredData["@graph"]
      : [];

    graph.forEach((entity) => {
      if (entity["@type"] === "ProfilePage") {
        entity.name = content.seo.structuredData.profileName;
        entity.description = content.seo.structuredData.profileDescription;
        entity.inLanguage = content.locale;
      }

      if (entity["@type"] === "Person") {
        entity.name = content.seo.structuredData.personName;
        entity.description = content.seo.structuredData.personDescription;
      }

      if (entity["@type"] === "WebSite") {
        entity.name = content.seo.structuredData.websiteName;
        entity.description = content.seo.structuredData.websiteDescription;
        entity.inLanguage = content.locale;
      }
    });

    script.textContent = JSON.stringify(structuredData);
  } catch {
    // The static SEO payload stays valid if runtime metadata cannot be updated.
  }
}

function updateSeoMetadata(content) {
  document.documentElement.lang = content.language;
  document.title = content.seo.title;

  updateMetaContent('meta[name="description"]', content.seo.description);
  updateMetaContent(
    'meta[name="application-name"]',
    content.seo.applicationName
  );
  updateMetaContent(
    'meta[name="apple-mobile-web-app-title"]',
    content.seo.applicationName
  );
  updateMetaContent('meta[property="og:title"]', content.seo.socialTitle);
  updateMetaContent(
    'meta[property="og:description"]',
    content.seo.socialDescription
  );
  updateMetaContent('meta[property="og:locale"]', content.seo.socialLocale);
  updateMetaContent(
    'meta[property="og:site_name"]',
    content.seo.applicationName
  );
  updateMetaContent('meta[property="og:image:alt"]', content.seo.socialAlt);
  updateMetaContent('meta[name="twitter:title"]', content.seo.socialTitle);
  updateMetaContent(
    'meta[name="twitter:description"]',
    content.seo.socialDescription
  );
  updateMetaContent('meta[name="twitter:image:alt"]', content.seo.socialAlt);
  updateStructuredData(content);
}

export default function usePortfolioLanguage() {
  const [language, setLanguageState] = useState(getInitialLanguage);
  const content = portfolioContent[language];

  const setLanguage = useCallback((nextLanguage) => {
    if (!isSupportedLanguage(nextLanguage)) {
      return;
    }

    setLanguageState(nextLanguage);

    try {
      window.localStorage.setItem(languageStorageKey, nextLanguage);
    } catch {
      // URL state remains the source of truth when storage is unavailable.
    }

    updateLanguageUrl(nextLanguage, "pushState");
  }, []);

  useEffect(() => {
    const urlLanguage = getUrlLanguage() || defaultLanguage;

    if (urlLanguage !== language) {
      updateLanguageUrl(language, "replaceState");
    }

    try {
      window.localStorage.setItem(languageStorageKey, language);
    } catch {
      // Language switching still works through the URL.
    }

    updateSeoMetadata(content);
  }, [content, language]);

  useEffect(() => {
    const handlePopState = () => {
      setLanguageState(getUrlLanguage() || defaultLanguage);
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return { content, language, setLanguage };
}
