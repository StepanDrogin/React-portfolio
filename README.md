# Степан Дрогин — Product Engineer

Персональный сайт Product Engineer на React. Интерфейс построен на локальной дизайн-системе с CSS-токенами, адаптивной сеткой, доступной навигацией и переключением RU/EN.

Выбранный язык сохраняется в `localStorage` и отражается в URL: русская версия открывается на `/`, английская — с параметром `?lang=en`. Вместе с интерфейсом обновляются `html[lang]`, title, description, Open Graph, Twitter Card и JSON-LD.

## Команды

- `npm start` — локальная разработка;
- `npm run build` — production-сборка;
- `npm run check:deploy` — тесты, production-сборка, SEO- и deploy-аудит;
- `npm test -- --watchAll=false` — тесты;
- `npm run verify:deploy` — проверка лимитов Cloudflare Pages, redirects, headers и build-ассетов;
- `npm run verify:seo` — проверка production-метаданных и SEO-ассетов.

## SEO и превью

Production-сборка включает canonical, Open Graph, Twitter Card, JSON-LD `ProfilePage`, `Person` и `WebSite`, `robots.txt`, `sitemap.xml`, настоящий `404.html`, PWA manifest, favicon-матрицу и изображения для социальных сетей.

Основной production URL: `https://stepandrogin.pages.dev/`.
Это бесплатный адрес Cloudflare Pages и canonical сайта; регистрация отдельного домена не требуется.

## Деплой на Cloudflare Pages

1. Выполнить `npm ci`, затем `npm run check:deploy`.
2. Отправить готовые изменения в ветку `main` репозитория `StepanDrogin/React-portfolio`.
3. Открыть Cloudflare → Workers & Pages → Create application → Pages → Connect to Git.
4. Подключить репозиторий и указать project name `stepandrogin`, production branch `main`.
5. Build command: `npm run build`.
6. Build output directory: `build`.
7. Root directory: `/`.
8. Сохранить и запустить первый deploy.

Файлы `_headers`, `_redirects`, `404.html`, `.nvmrc` и `wrangler.jsonc` уже подготовлены. HTML не кешируется надолго, хешированные ассеты получают immutable-cache, а preview-сборки Cloudflare автоматически получают `X-Robots-Tag: noindex`.

GitHub Actions запускает тот же deploy-аудит для каждого pull request и push в `main`. Cloudflare после подключения репозитория создаёт preview для веток и автоматически публикует успешную сборку `main`.

### Бесплатный production-адрес

1. Создать Pages-проект с именем `stepandrogin`.
2. После первого успешного deploy проверить адрес `https://stepandrogin.pages.dev/`.
3. Убедиться, что `robots.txt`, `sitemap.xml`, canonical и Open Graph используют этот же URL.
4. При возможном подключении собственного домена в будущем сначала заменить production URL во всех SEO-файлах и повторить `npm run check:deploy`.
