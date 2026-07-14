import "@testing-library/jest-dom";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";
import { portfolioContent } from "./data/portfolioContent";

beforeEach(() => {
  window.scrollTo = jest.fn();
  window.requestAnimationFrame = (callback) => callback();
  window.localStorage.clear();
  window.history.replaceState(null, "", "/");
});

test("renders the main portfolio story and contact actions", () => {
  const { container } = render(<App />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Создаю цифровые продукты целиком — от идеи и UX до production",
    })
  ).toBeInTheDocument();

  expect(
    screen.getByRole("heading", {
      level: 2,
      name: "Примеры задач, продуктов и измеримых результатов",
    })
  ).toBeInTheDocument();

  screen
    .getAllByRole("link", { name: "Обсудить продукт" })
    .forEach((link) => expect(link).toHaveAttribute("href", "#contact"));
  expect(
    screen.getByRole("link", { name: "Обсудить продукт или задачу" })
  ).toHaveAttribute("href", "#contact");

  expect(
    screen.getByText("Более 6 лет коммерческого опыта")
  ).toBeInTheDocument();
  expect(
    screen.queryByText("Санкт-Петербург / удалённо")
  ).not.toBeInTheDocument();
  expect(screen.queryByText("не-merge коммита")).not.toBeInTheDocument();
  expect(
    screen.getByText("UI Kit и Storybook для масштабирования")
  ).toBeInTheDocument();

  const stackSection = screen.getByRole("region", {
    name: "Технологии под задачу, а не наоборот",
  });
  expect(within(stackSection).getAllByText("Product discovery")).toHaveLength(1);
  expect(within(stackSection).getAllByText("Vue 3")).toHaveLength(1);

  expect(screen.getByText("Idea → MVP")).toBeInTheDocument();
  expect(screen.getByText("UX → Data → AI")).toBeInTheDocument();
  expect(screen.queryByText("SD")).not.toBeInTheDocument();
  expect(screen.queryByText("LinkedIn")).not.toBeInTheDocument();
  expect(screen.queryByText("GitHub")).not.toBeInTheDocument();
  expect(screen.queryByText("Scroll")).not.toBeInTheDocument();
  expect(
    screen.queryByText("Scroll to explore · 04 cases")
  ).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: /@stepan_dr/i })).toHaveAttribute(
    "href",
    "https://t.me/stepan_dr"
  );
  expect(
    screen.getByRole("link", { name: /WhatsApp \+7 903 441-83-38/i })
  ).toHaveAttribute("href", "https://wa.me/79034418338");
  expect(
    screen.getByRole("link", { name: /8 903 441-83-38/i })
  ).toHaveAttribute("href", "tel:+79034418338");
  expect(
    screen.getByRole("link", { name: /drogenko\.stepan@yandex\.ru/i })
  ).toHaveAttribute("href", "mailto:drogenko.stepan@yandex.ru");

  const marqueeGroups = container.querySelectorAll(".marquee-band__group");
  expect(marqueeGroups).toHaveLength(2);
  marqueeGroups.forEach((group) => {
    const items = Array.from(group.querySelectorAll(".marquee-band__item")).map(
      (item) => item.firstChild.textContent.trim()
    );
    expect(items).toEqual([
      "Product design",
      "Fullstack engineering",
      "AI systems",
      "Production delivery",
    ]);
    expect(new Set(items).size).toBe(items.length);
  });
});

test("opens and closes the accessible navigation menu", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Открыть меню" }));
  expect(
    screen.getByRole("button", { name: "Закрыть меню" })
  ).toHaveAttribute("aria-expanded", "true");

  fireEvent.click(screen.getByRole("button", { name: "Закрыть меню" }));
  expect(screen.getByRole("button", { name: "Открыть меню" })).toHaveAttribute(
    "aria-expanded",
    "false"
  );
});

test("positions contact actions above the bottom viewport edge", () => {
  render(<App />);

  const contactSection = document.getElementById("contact");
  const contactDetails = document.getElementById("contact-details");
  const contactContent = contactDetails.closest(".contact-panel__content");
  contactSection.getBoundingClientRect = () => ({ top: 100 });
  Object.defineProperty(contactContent, "offsetTop", { value: 20 });
  Object.defineProperty(contactDetails, "offsetTop", { value: 600 });
  Object.defineProperty(contactDetails, "offsetHeight", { value: 180 });
  Object.defineProperty(window, "innerHeight", {
    configurable: true,
    value: 700,
  });

  fireEvent.click(
    screen.getByRole("link", { name: "Обсудить продукт или задачу" })
  );

  expect(window.location.hash).toBe("#contact");
  expect(window.scrollTo).toHaveBeenCalledWith({
    behavior: "smooth",
    top: 240,
  });
});

test("switches the complete interface between Russian and English", () => {
  const { unmount } = render(<App />);

  const englishButton = screen.getByRole("button", {
    name: "Английский язык",
  });

  expect(englishButton).toHaveAttribute("aria-pressed", "false");
  fireEvent.click(englishButton);

  expect(document.documentElement).toHaveAttribute("lang", "en");
  expect(document.title).toBe(
    "Stepan Drogin — Product Engineer | Web, AI, UX"
  );
  expect(window.location.search).toBe("?lang=en");
  expect(window.localStorage.getItem("portfolio-language")).toBe("en");
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "I build digital products end to end — from idea and UX to production",
    })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
    "href",
    "#about"
  );
  expect(screen.getByText("Let's build it")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "English language" })
  ).toHaveAttribute("aria-pressed", "true");

  unmount();
  render(<App />);

  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "I build digital products end to end — from idea and UX to production",
    })
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Russian language" }));

  expect(document.documentElement).toHaveAttribute("lang", "ru");
  expect(window.location.search).toBe("");
  expect(window.localStorage.getItem("portfolio-language")).toBe("ru");
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Создаю цифровые продукты целиком — от идеи и UX до production",
    })
  ).toBeInTheDocument();
});

test("keeps localized content collections structurally aligned", () => {
  const russian = portfolioContent.ru;
  const english = portfolioContent.en;

  expect(english.navigationItems).toHaveLength(russian.navigationItems.length);
  expect(english.caseStudies).toHaveLength(russian.caseStudies.length);
  expect(english.expertiseItems).toHaveLength(russian.expertiseItems.length);
  expect(english.serviceItems).toHaveLength(russian.serviceItems.length);
  expect(english.aiCapabilities).toHaveLength(russian.aiCapabilities.length);
  expect(english.stackGroups).toHaveLength(russian.stackGroups.length);
  expect(english.processSteps).toHaveLength(russian.processSteps.length);
});
