import { useEffect, useState } from "react";
import scrollToContact from "../../utils/scrollToContact";
import "./navbar.css";

function LanguageSwitcher({ content, language, onLanguageChange }) {
  const languages = [
    { code: "ru", label: "RU", ariaLabel: content.russianLabel },
    { code: "en", label: "EN", ariaLabel: content.englishLabel },
  ];

  return (
    <div
      aria-label={content.languageLabel}
      className="navbar__language-switcher"
      role="group"
    >
      {languages.map((item) => (
        <button
          aria-label={item.ariaLabel}
          aria-pressed={language === item.code}
          className={`ui-button navbar__language-option ${
            language === item.code ? "navbar__language-option--active" : ""
          }`}
          key={item.code}
          lang={item.code}
          onClick={() => onLanguageChange(item.code)}
          type="button"
        >
          <span className="ui-span">{item.label}</span>
        </button>
      ))}
    </div>
  );
}

export default function Navbar({
  content,
  language,
  navigationItems,
  onLanguageChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("");

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return undefined;
    }

    const sections = navigationItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-24% 0px -62% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navigationItems]);

  const closeMenu = () => setIsOpen(false);
  const changeLanguage = (nextLanguage) => {
    onLanguageChange(nextLanguage);
    closeMenu();
  };
  const openContact = (event) => {
    closeMenu();
    scrollToContact(event);
  };

  return (
    <header className="navbar">
      <div className="site-container navbar__inner">
        <a
          aria-label={content.homeLabel}
          className="navbar__logo"
          href="#top"
          onClick={closeMenu}
        >
          <span className="ui-span navbar__logo-text">{content.brand}</span>
        </a>

        <nav
          aria-label={content.navigationLabel}
          className={`navbar__nav ${isOpen ? "navbar__nav--open" : ""}`}
          id="primary-navigation"
        >
          {navigationItems.map((item) => (
            <a
              aria-current={activeHref === item.href ? "location" : undefined}
              className="navbar__link"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            className="ui-button button button--primary navbar__mobile-cta"
            href="#contact"
            onClick={openContact}
          >
            {content.cta}
          </a>
        </nav>

        <div className="navbar__actions">
          <LanguageSwitcher
            content={content}
            language={language}
            onLanguageChange={changeLanguage}
          />

          <a
            className="ui-button button navbar__cta"
            href="#contact"
            onClick={scrollToContact}
          >
            {content.cta}
          </a>

          <button
            aria-controls="primary-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? content.closeMenu : content.openMenu}
            className="ui-button navbar__toggle"
            onClick={() => setIsOpen((currentState) => !currentState)}
            type="button"
          >
            <span className="ui-span navbar__toggle-line" />
            <span className="ui-span navbar__toggle-line" />
          </button>
        </div>
      </div>
    </header>
  );
}
