const sharedStackItems = {
  product: [
    "Product discovery",
    "JTBD",
    "UX/UI",
    "Figma",
    "Design systems",
    "Accessibility",
  ],
  frontend: [
    "Vue 3",
    "Nuxt",
    "React",
    "TypeScript",
    "Pinia",
    "Storybook",
    "Tailwind CSS",
    "Vite",
  ],
  backend: [
    "Node.js",
    "PostgreSQL",
    "Prisma / ORM",
    "REST / OpenAPI",
    "LLM API",
    "RAG",
    "Tool calling",
  ],
  delivery: [
    "Docker",
    "CI/CD",
    "Jenkins",
    "Playwright",
    "Vitest",
    "Jest",
    "Monitoring",
    "Analytics",
  ],
};

export const defaultLanguage = "ru";
export const supportedLanguages = ["ru", "en"];

export const contacts = {
  email: "drogenko.stepan@yandex.ru",
  telegram: {
    label: "@stepan_dr",
    href: "https://t.me/stepan_dr",
  },
  whatsapp: {
    label: "+7 903 441-83-38",
    href: "https://wa.me/79034418338",
  },
  phone: {
    label: "8 903 441-83-38",
    href: "tel:+79034418338",
  },
};

export const portfolioContent = {
  ru: {
    language: "ru",
    locale: "ru-RU",
    seo: {
      title: "Степан Дрогин — Product Engineer | Web, AI, UX",
      description:
        "Проектирую и запускаю цифровые продукты полного цикла: UX/UI, frontend, backend, AI, инфраструктура и production. Более 6 лет коммерческого опыта.",
      applicationName: "Степан Дрогин",
      socialTitle: "Степан Дрогин — Product Engineer полного цикла",
      socialDescription:
        "Проектирую и запускаю цифровые продукты: от идеи и UX до frontend, backend, AI, инфраструктуры и production.",
      socialLocale: "ru_RU",
      socialAlt:
        "Степан Дрогин — Product Engineer: Product, UX, Fullstack, AI и Delivery",
      structuredData: {
        profileName: "Степан Дрогин — Product Engineer",
        profileDescription:
          "Персональный сайт Product Engineer, создающего цифровые продукты полного цикла: UX/UI, frontend, backend, AI, инфраструктура и production.",
        personName: "Степан Дрогин",
        personDescription:
          "Проектирует и запускает цифровые продукты от discovery и UX до frontend, backend, AI, инфраструктуры и production.",
        websiteName: "Степан Дрогин",
        websiteDescription:
          "Разработка цифровых продуктов полного цикла: Product, UX, Fullstack, AI и Delivery.",
      },
    },
    app: {
      skipLink: "Перейти к содержимому",
    },
    navbar: {
      brand: "Степан Дрогин",
      homeLabel: "На главную — Степан Дрогин",
      navigationLabel: "Основная навигация",
      cta: "Обсудить продукт",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      languageLabel: "Выбор языка",
      russianLabel: "Русский язык",
      englishLabel: "Английский язык",
    },
    navigationItems: [
      { label: "Обо мне", href: "#about" },
      { label: "Кейсы", href: "#cases" },
      { label: "Экспертиза", href: "#expertise" },
      { label: "Процесс", href: "#process" },
    ],
    home: {
      roleLabel: "Роль",
      projectResultsLabel: "Результаты проекта",
      technologiesLabel: "Технологии",
      hero: {
        role: "Fullstack / Product Engineer",
        titleLines: [
          "Создаю цифровые",
          "продукты целиком",
          "— от идеи и UX до production",
        ],
        lead:
          "Соединяю продуктовую логику, frontend, backend, данные, AI и инфраструктуру в единую работающую систему. Беру ответственность за результат — от прототипа до релиза и дальнейшего развития.",
        primaryCta: "Обсудить продукт или задачу",
        secondaryCta: "Посмотреть инженерные кейсы",
        proofLabel: "Кратко об опыте",
        proof: "Более 6 лет коммерческого опыта",
      },
      about: {
        eyebrow: "Системное мышление",
        title:
          "Вижу продукт целиком и связываю решения между UX, кодом, данными и эксплуатацией.",
        paragraphs: [
          "Более 6 лет в коммерческой разработке: работал с e-commerce, облачными и DevOps-платформами, личными кабинетами, административными и образовательными сервисами.",
          "Проектирую пользовательские сценарии и компонентную архитектуру, интегрирую API, улучшаю производительность, качество и процесс релизов.",
        ],
      },
      casesHeading: {
        eyebrow: "Инженерные кейсы",
        title: "Примеры задач, продуктов и измеримых результатов",
        description:
          "Показываю не только интерфейс, но и вклад в сценарии, архитектуру, интеграции, качество и скорость развития продукта.",
      },
      expertiseHeading: {
        eyebrow: "Чем полезен",
        title: "Закрываю весь жизненный цикл продукта",
        description:
          "Не усложняю решение ради технологий: выбираю подход под ценность, стадию бизнеса, ограничения и реальные риски.",
      },
      servicesHeading: {
        eyebrow: "Форматы работы",
        title: "Что могу спроектировать, разработать и запустить",
        description:
          "От ограниченного прототипа до развития работающей системы — с прозрачными границами, рисками и критериями готовности.",
      },
      ai: {
        eyebrow: "AI Engineering",
        title: "Проектирую AI-функции как надёжную часть системы",
        description:
          "Начинаю не с выбора модели, а с операции, которую нужно улучшить, и измеримого результата. Затем проектирую данные, контекст, инструменты, формат ответа и контроль качества.",
      },
      stackHeading: {
        eyebrow: "Рабочий стек",
        title: "Технологии под задачу, а не наоборот",
        description:
          "Работаю с продуктом как с единой системой — от UX и интерфейсов до backend, данных, AI и production. Подбираю технологии под задачу и этап развития, чтобы решение оставалось надёжным, быстрым и удобным для масштабирования.",
      },
      processHeading: {
        eyebrow: "Процесс",
        title: "От идеи до работающего продукта — без потери контекста",
        description:
          "Короткие проверяемые этапы сохраняют связь между задачей, пользовательским сценарием, архитектурой и результатом.",
      },
    },
    caseStudies: [
      {
        id: "jewelry-platform",
        index: "01",
        category: "E-commerce / цифровые сервисы",
        title: "E-commerce-платформа и цифровые сервисы",
        description:
          "Развитие продуктовых модулей крупной платформы: сложные пользовательские сценарии, API-интеграции, WebView, SEO, ломбардные и залоговые сервисы, производительность и дизайн-система.",
        responsibility:
          "Продуктовая декомпозиция, frontend-архитектура, интеграции, UI Kit, Storybook и качество критических сценариев.",
        metrics: [
          { value: "Product", label: "сценарии, которые решают бизнес-задачу" },
          { value: "Platform", label: "UI Kit и Storybook для масштабирования" },
          { value: "Quality", label: "скорость и надёжность ключевых сценариев" },
        ],
        stack: ["Vue 3", "TypeScript", "REST API", "UI Kit", "Storybook"],
        visual: "commerce",
      },
      {
        id: "devops-platform",
        index: "02",
        category: "Cloud / DevOps",
        title: "Облачная и DevOps-платформа",
        description:
          "Интерфейсы и прикладная логика управления пользователями, группами, кластерами, приложениями и инфраструктурными операциями с ролевым доступом и фоновыми задачами.",
        responsibility:
          "Системный анализ, архитектура клиентского приложения, REST/OpenAPI-интеграции, E2E/API-тестирование и стабильность релизов.",
        metrics: [
          {
            number: 40,
            value: "до 40%",
            prefix: "до ",
            suffix: "%",
            label: "быстрее отдельные сценарии",
          },
          {
            number: 30,
            value: "≈30%",
            prefix: "≈",
            suffix: "%",
            label: "быстрее выпуск интерфейсов",
          },
        ],
        stack: ["Vue 3", "TypeScript", "Pinia", "OpenAPI", "Playwright"],
        visual: "cloud",
      },
      {
        id: "education-platform",
        index: "03",
        category: "EdTech / интерактив",
        title: "Интерактивные образовательные продукты",
        description:
          "Тренажёры и симуляторы для школьной платформы: пользовательские сценарии, общая компонентная архитектура, UI Kit, переиспользуемые модули и адаптивные интерфейсы.",
        responsibility:
          "Разработка продуктовых сценариев и единой frontend-основы для быстрого выпуска новых интерактивных модулей.",
        metrics: [
          { number: 230, value: "230+", suffix: "+", label: "реализованных задач" },
          {
            number: 30,
            value: "≈30%",
            prefix: "≈",
            suffix: "%",
            label: "ускорение клиентской части",
          },
          {
            number: 25,
            value: "≈25%",
            prefix: "≈",
            suffix: "%",
            label: "быстрее новые интерфейсы",
          },
        ],
        stack: ["Vue 3", "TypeScript", "Tailwind CSS", "Vite", "UI Kit"],
        visual: "education",
      },
      {
        id: "product-lab",
        index: "04",
        category: "Fullstack / AI product lab",
        title: "Собственные fullstack- и AI-прототипы",
        description:
          "Исследование и прототипирование сервисов для анализа отзывов и документов, управления пользовательскими рисками, бытовых процессов и персональных рекомендаций.",
        responsibility:
          "Product discovery, UX-сценарии, MVP, архитектура, модель данных, AI-контур, монетизация, метрики и roadmap.",
        metrics: [
          { value: "Idea → MVP", label: "проверяемый продукт" },
          { value: "UX → Data → AI", label: "единый контур" },
        ],
        stack: ["Node.js", "PostgreSQL", "LLM API", "RAG", "Docker"],
        visual: "ai",
      },
    ],
    expertiseItems: [
      {
        index: "01",
        title: "Продукт и UX",
        description:
          "Разбираю аудиторию, задачи и ограничения, проектирую user flow, информационную архитектуру, wireframes и прототипы. Интерфейс получается понятным пользователю и реалистичным для разработки.",
      },
      {
        index: "02",
        title: "Frontend, backend и данные",
        description:
          "Создаю сложные интерфейсы и компонентные системы, проектирую API, бизнес-логику, модели данных, авторизацию, роли, фоновые процессы и интеграции.",
      },
      {
        index: "03",
        title: "AI Engineering",
        description:
          "Проектирую сценарий, данные, контекст, формат ответа и контроль качества для RAG, извлечения данных, классификации, рекомендаций и ассистентов.",
      },
      {
        index: "04",
        title: "Production и качество",
        description:
          "Настраиваю типизацию, тесты, Docker, CI/CD, окружения, обработку ошибок и мониторинг, чтобы продукт можно было безопасно выпускать и развивать.",
      },
    ],
    serviceItems: [
      {
        index: "01",
        title: "MVP продукта под ключ",
        description:
          "Discovery, пользовательские сценарии, UX/UI-прототип, архитектура, frontend, backend, база данных, AI, аналитика, Docker, CI/CD и первый production-релиз.",
      },
      {
        index: "02",
        title: "SaaS, кабинет или веб-платформа",
        description:
          "Роли и права, данные, сложные формы и таблицы, поиск, отчётность, интеграции и административная часть.",
      },
      {
        index: "03",
        title: "AI-продукт и автоматизация",
        description:
          "RAG, обработка документов, извлечение данных, классификация, рекомендации, ассистенты, structured output, tool calling, evaluation и guardrails.",
      },
      {
        index: "04",
        title: "Развитие продукта и аудит",
        description:
          "Новые модули, производительность, рефакторинг, дизайн-система, тесты, CI/CD, сокращение технического долга и приоритетный план улучшений.",
      },
    ],
    aiCapabilities: [
      { id: "analysis", text: "Анализ и структурирование документов, отзывов и пользовательского контента" },
      { id: "knowledge", text: "RAG-поиск и семантический доступ к внутренней базе знаний" },
      { id: "entities", text: "Извлечение сущностей и преобразование текста в данные продукта" },
      { id: "assistants", text: "Ассистенты с контекстом, инструментами и контролируемым форматом ответа" },
      { id: "quality", text: "Оценка качества, стоимости, задержки, приватности и отказоустойчивости" },
    ],
    stackGroups: [
      { id: "product", label: "Product & design", items: sharedStackItems.product },
      { id: "frontend", label: "Frontend", items: sharedStackItems.frontend },
      { id: "backend", label: "Backend & AI", items: sharedStackItems.backend },
      { id: "delivery", label: "Delivery", items: sharedStackItems.delivery },
    ],
    processSteps: [
      {
        index: "01",
        title: "Погружение",
        description:
          "Разбираю бизнес-задачу, пользователей, ограничения, текущую систему и критерии успеха.",
      },
      {
        index: "02",
        title: "UX и архитектура",
        description:
          "Формирую сценарии и прототип, проектирую модули, данные, API, права и границы MVP.",
      },
      {
        index: "03",
        title: "Fullstack-разработка",
        description:
          "Реализую frontend, backend, базу данных, интеграции и AI-функции рабочими инкрементами.",
      },
      {
        index: "04",
        title: "Качество, запуск и развитие",
        description:
          "Настраиваю тесты, Docker, CI/CD и мониторинг, проверяю релиз и приоритизирую следующие итерации по данным.",
      },
    ],
    footer: {
      eyebrow: "Следующий шаг",
      title:
        "Есть продукт или сложная задача, которую нужно довести до работающего результата?",
      description:
        "Опишите идею, текущую систему или бизнес-задачу. Помогу определить ценность, пользовательский сценарий, разумный объём первой версии, архитектуру и следующий практический шаг.",
      availability: "Открыт к обсуждению новых продуктов и сложных задач",
      contactsLabel: "Контакты",
      phoneLabel: "Телефон",
      wordmark: "Соберём продукт",
      copyrightName: "Степан Дрогин",
      role: "Fullstack / Product Engineer",
      backToTop: "Наверх ↑",
    },
  },
  en: {
    language: "en",
    locale: "en-US",
    seo: {
      title: "Stepan Drogin — Product Engineer | Web, AI, UX",
      description:
        "I design and launch end-to-end digital products: UX/UI, frontend, backend, AI, infrastructure, and production. Over 6 years of commercial experience.",
      applicationName: "Stepan Drogin",
      socialTitle: "Stepan Drogin — End-to-End Product Engineer",
      socialDescription:
        "I design and launch digital products from idea and UX to frontend, backend, AI, infrastructure, and production.",
      socialLocale: "en_US",
      socialAlt:
        "Stepan Drogin — Product Engineer: Product, UX, Fullstack, AI, and Delivery",
      structuredData: {
        profileName: "Stepan Drogin — Product Engineer",
        profileDescription:
          "Portfolio of a Product Engineer who builds end-to-end digital products across UX/UI, frontend, backend, AI, infrastructure, and production.",
        personName: "Stepan Drogin",
        personDescription:
          "Designs and launches digital products from discovery and UX to frontend, backend, AI, infrastructure, and production.",
        websiteName: "Stepan Drogin",
        websiteDescription:
          "End-to-end digital product development across Product, UX, Fullstack, AI, and Delivery.",
      },
    },
    app: {
      skipLink: "Skip to content",
    },
    navbar: {
      brand: "Stepan Drogin",
      homeLabel: "Home — Stepan Drogin",
      navigationLabel: "Primary navigation",
      cta: "Discuss a product",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      languageLabel: "Language selection",
      russianLabel: "Russian language",
      englishLabel: "English language",
    },
    navigationItems: [
      { label: "About", href: "#about" },
      { label: "Cases", href: "#cases" },
      { label: "Expertise", href: "#expertise" },
      { label: "Process", href: "#process" },
    ],
    home: {
      roleLabel: "Role",
      projectResultsLabel: "Project outcomes",
      technologiesLabel: "Technologies",
      hero: {
        role: "Fullstack / Product Engineer",
        titleLines: [
          "I build digital",
          "products end to end",
          "— from idea and UX to production",
        ],
        lead:
          "I connect product logic, frontend, backend, data, AI, and infrastructure into one working system. I take ownership of the outcome — from prototype through release and continued growth.",
        primaryCta: "Discuss a product or challenge",
        secondaryCta: "View engineering case studies",
        proofLabel: "Experience at a glance",
        proof: "Over 6 years of commercial experience",
      },
      about: {
        eyebrow: "Systems thinking",
        title:
          "I see the product as a whole and connect decisions across UX, code, data, and operations.",
        paragraphs: [
          "Over 6 years in commercial development across e-commerce, cloud and DevOps platforms, customer portals, admin systems, and education products.",
          "I design user journeys and component architecture, integrate APIs, and improve performance, quality, and release workflows.",
        ],
      },
      casesHeading: {
        eyebrow: "Engineering case studies",
        title: "Products, technical challenges, and measurable outcomes",
        description:
          "I show more than interfaces: the impact on user journeys, architecture, integrations, quality, and product delivery speed.",
      },
      expertiseHeading: {
        eyebrow: "How I help",
        title: "I cover the entire product lifecycle",
        description:
          "I choose an approach around customer value, business stage, constraints, and real risks — never technology for its own sake.",
      },
      servicesHeading: {
        eyebrow: "Ways to work together",
        title: "What I can design, build, and launch",
        description:
          "From a focused prototype to the evolution of a live system — with clear scope, risks, and acceptance criteria.",
      },
      ai: {
        eyebrow: "AI Engineering",
        title: "I design AI capabilities as a reliable part of the system",
        description:
          "I start with the operation to improve and the outcome to measure, not with a model. Then I design the data, context, tools, response format, and quality controls.",
      },
      stackHeading: {
        eyebrow: "Technology stack",
        title: "Technology chosen for the problem, not the other way around",
        description:
          "I treat the product as one system — from UX and interfaces to backend, data, AI, and production. I choose tools for the problem and stage so the solution stays reliable, fast, and ready to scale.",
      },
      processHeading: {
        eyebrow: "Process",
        title: "From idea to a working product — without losing context",
        description:
          "Short, testable stages preserve the connection between the problem, user journey, architecture, and outcome.",
      },
    },
    caseStudies: [
      {
        id: "jewelry-platform",
        index: "01",
        category: "E-commerce / digital services",
        title: "E-commerce platform and digital services",
        description:
          "Product modules for a large platform: complex user journeys, API integrations, WebView, SEO, pawn and collateral services, performance, and a design system.",
        responsibility:
          "Product decomposition, frontend architecture, integrations, UI Kit, Storybook, and quality across critical journeys.",
        metrics: [
          { value: "Product", label: "journeys tied to business outcomes" },
          { value: "Platform", label: "UI Kit and Storybook for scale" },
          { value: "Quality", label: "speed and reliability of key journeys" },
        ],
        stack: ["Vue 3", "TypeScript", "REST API", "UI Kit", "Storybook"],
        visual: "commerce",
      },
      {
        id: "devops-platform",
        index: "02",
        category: "Cloud / DevOps",
        title: "Cloud and DevOps platform",
        description:
          "Interfaces and application logic for managing users, groups, clusters, applications, and infrastructure operations with role-based access and background jobs.",
        responsibility:
          "Systems analysis, client application architecture, REST/OpenAPI integrations, E2E/API testing, and release stability.",
        metrics: [
          {
            number: 40,
            value: "up to 40%",
            prefix: "up to ",
            suffix: "%",
            label: "faster in selected workflows",
          },
          {
            number: 30,
            value: "≈30%",
            prefix: "≈",
            suffix: "%",
            label: "faster interface delivery",
          },
        ],
        stack: ["Vue 3", "TypeScript", "Pinia", "OpenAPI", "Playwright"],
        visual: "cloud",
      },
      {
        id: "education-platform",
        index: "03",
        category: "EdTech / interactive",
        title: "Interactive learning products",
        description:
          "Training tools and simulations for a school platform: user journeys, shared component architecture, UI Kit, reusable modules, and responsive interfaces.",
        responsibility:
          "Product journey development and a shared frontend foundation for faster delivery of new interactive modules.",
        metrics: [
          { number: 230, value: "230+", suffix: "+", label: "delivered tasks" },
          {
            number: 30,
            value: "≈30%",
            prefix: "≈",
            suffix: "%",
            label: "faster client-side delivery",
          },
          {
            number: 25,
            value: "≈25%",
            prefix: "≈",
            suffix: "%",
            label: "faster new interfaces",
          },
        ],
        stack: ["Vue 3", "TypeScript", "Tailwind CSS", "Vite", "UI Kit"],
        visual: "education",
      },
      {
        id: "product-lab",
        index: "04",
        category: "Fullstack / AI product lab",
        title: "Independent fullstack and AI prototypes",
        description:
          "Research and prototyping for services that analyze reviews and documents, manage user risk and everyday workflows, and provide personalized recommendations.",
        responsibility:
          "Product discovery, UX journeys, MVP, architecture, data model, AI layer, monetization, metrics, and roadmap.",
        metrics: [
          { value: "Idea → MVP", label: "testable product" },
          { value: "UX → Data → AI", label: "one connected system" },
        ],
        stack: ["Node.js", "PostgreSQL", "LLM API", "RAG", "Docker"],
        visual: "ai",
      },
    ],
    expertiseItems: [
      {
        index: "01",
        title: "Product and UX",
        description:
          "I clarify the audience, goals, and constraints, then design user flows, information architecture, wireframes, and prototypes. The result is intuitive for users and realistic to build.",
      },
      {
        index: "02",
        title: "Frontend, backend, and data",
        description:
          "I build complex interfaces and component systems, design APIs, business logic, data models, authorization, roles, background processes, and integrations.",
      },
      {
        index: "03",
        title: "AI Engineering",
        description:
          "I design the workflow, data, context, response format, and quality controls for RAG, data extraction, classification, recommendations, and assistants.",
      },
      {
        index: "04",
        title: "Production and quality",
        description:
          "I set up typing, tests, Docker, CI/CD, environments, error handling, and monitoring so the product can ship safely and keep evolving.",
      },
    ],
    serviceItems: [
      {
        index: "01",
        title: "End-to-end product MVP",
        description:
          "Discovery, user journeys, UX/UI prototype, architecture, frontend, backend, database, AI, analytics, Docker, CI/CD, and the first production release.",
      },
      {
        index: "02",
        title: "SaaS, customer portal, or web platform",
        description:
          "Roles and permissions, data, complex forms and tables, search, reporting, integrations, and an administration layer.",
      },
      {
        index: "03",
        title: "AI product and automation",
        description:
          "RAG, document processing, data extraction, classification, recommendations, assistants, structured output, tool calling, evaluation, and guardrails.",
      },
      {
        index: "04",
        title: "Product development and audit",
        description:
          "New modules, performance, refactoring, design systems, tests, CI/CD, technical debt reduction, and a prioritized improvement plan.",
      },
    ],
    aiCapabilities: [
      { id: "analysis", text: "Analysis and structuring of documents, reviews, and user-generated content" },
      { id: "knowledge", text: "RAG search and semantic access to internal knowledge bases" },
      { id: "entities", text: "Entity extraction and conversion of text into product data" },
      { id: "assistants", text: "Assistants with context, tools, and controlled response formats" },
      { id: "quality", text: "Evaluation of quality, cost, latency, privacy, and resilience" },
    ],
    stackGroups: [
      { id: "product", label: "Product & design", items: sharedStackItems.product },
      { id: "frontend", label: "Frontend", items: sharedStackItems.frontend },
      { id: "backend", label: "Backend & AI", items: sharedStackItems.backend },
      { id: "delivery", label: "Delivery", items: sharedStackItems.delivery },
    ],
    processSteps: [
      {
        index: "01",
        title: "Discovery",
        description:
          "I clarify the business problem, users, constraints, current system, and success criteria.",
      },
      {
        index: "02",
        title: "UX and architecture",
        description:
          "I shape the journeys and prototype, then design modules, data, APIs, permissions, and MVP boundaries.",
      },
      {
        index: "03",
        title: "Fullstack development",
        description:
          "I deliver frontend, backend, database, integrations, and AI capabilities in working increments.",
      },
      {
        index: "04",
        title: "Quality, launch, and growth",
        description:
          "I set up tests, Docker, CI/CD, and monitoring, validate the release, and prioritize the next iterations using data.",
      },
    ],
    footer: {
      eyebrow: "Next step",
      title:
        "Have a product or complex challenge that needs to become a working outcome?",
      description:
        "Tell me about your idea, existing system, or business challenge. I’ll help define the value, user journey, sensible first-release scope, architecture, and next practical step.",
      availability: "Open to discussing new products and complex challenges",
      contactsLabel: "Contact options",
      phoneLabel: "Phone",
      wordmark: "Let's build it",
      copyrightName: "Stepan Drogin",
      role: "Fullstack / Product Engineer",
      backToTop: "Back to top ↑",
    },
  },
};
