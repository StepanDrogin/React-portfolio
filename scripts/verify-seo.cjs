const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const buildDir = path.join(rootDir, "build");
const productionUrl = "https://stepandrogin.pages.dev/";

function assert(condition, message) {
  if (!condition) {
    throw new Error(`[SEO] ${message}`);
  }
}

function read(relativePath) {
  return fs.readFileSync(path.join(buildDir, relativePath), "utf8");
}

function assertFile(relativePath) {
  assert(
    fs.existsSync(path.join(buildDir, relativePath)),
    `Missing build asset: ${relativePath}`
  );
}

function readImageSize(relativePath) {
  const buffer = fs.readFileSync(path.join(buildDir, relativePath));
  const signature = buffer.subarray(0, 8).toString("hex");

  if (signature === "89504e470d0a1a0a") {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  if (buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;

    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) {
        offset += 1;
        continue;
      }

      const marker = buffer[offset + 1];
      offset += 2;

      if (marker === 0xd8 || marker === 0xd9) continue;

      const segmentLength = buffer.readUInt16BE(offset);
      const isStartOfFrame = [0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker);

      if (isStartOfFrame) {
        return {
          width: buffer.readUInt16BE(offset + 5),
          height: buffer.readUInt16BE(offset + 3),
        };
      }

      offset += segmentLength;
    }
  }

  throw new Error(`[SEO] ${relativePath} has an unsupported image format`);
}

function assertImageSize(relativePath, width, height) {
  const size = readImageSize(relativePath);
  assert(
    size.width === width && size.height === height,
    `${relativePath} must be ${width}x${height}, got ${size.width}x${size.height}`
  );
}

function readIcoSizes(relativePath) {
  const buffer = fs.readFileSync(path.join(buildDir, relativePath));
  assert(buffer.readUInt16LE(0) === 0, `${relativePath} has an invalid ICO header`);
  assert(buffer.readUInt16LE(2) === 1, `${relativePath} is not an icon`);
  const count = buffer.readUInt16LE(4);
  const sizes = [];

  for (let index = 0; index < count; index += 1) {
    const offset = 6 + index * 16;
    const width = buffer[offset] || 256;
    const height = buffer[offset + 1] || 256;
    assert(width === height, `${relativePath} contains a non-square frame`);
    sizes.push(width);
  }

  return sizes;
}

assert(fs.existsSync(buildDir), "Run npm run build before the SEO audit");

const requiredFiles = [
  "index.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "site.webmanifest",
  "browserconfig.xml",
  "_headers",
  "_redirects",
  "favicon.ico",
  "favicon.svg",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon-48x48.png",
  "favicon-96x96.png",
  "apple-touch-icon.png",
  "safari-pinned-tab.svg",
  "icons/pwa-192x192.png",
  "icons/pwa-512x512.png",
  "icons/pwa-maskable-192x192.png",
  "icons/pwa-maskable-512x512.png",
  "windows/mstile-70x70.png",
  "windows/mstile-150x150.png",
  "windows/mstile-310x150.png",
  "windows/mstile-310x310.png",
  "social/og-cover-1200x630.png",
  "social/og-cover-square-1200x1200.png",
  "screenshots/portfolio-wide.jpg",
  "screenshots/portfolio-mobile.jpg",
];

requiredFiles.forEach(assertFile);

const html = read("index.html");
const requiredHtmlTokens = [
  `<link rel="canonical" href="${productionUrl}"`,
  'name="robots" content="index, follow, max-image-preview:large',
  `property="og:url" content="${productionUrl}"`,
  `property="og:image" content="${productionUrl}social/og-cover-1200x630.png"`,
  'name="twitter:card" content="summary_large_image"',
  'type="application/ld+json"',
  'rel="apple-touch-icon"',
  'rel="mask-icon"',
  'rel="manifest" href="/site.webmanifest"',
];

requiredHtmlTokens.forEach((token) => {
  assert(html.includes(token), `index.html is missing: ${token}`);
});

assert(!html.includes("%PUBLIC_URL%"), "PUBLIC_URL placeholder was not resolved");
assert(!html.includes("/react-portfolio/"), "Legacy GitHub Pages base path remains");
assert(!html.includes("https://drogin.dev"), "Paid custom domain remains in index.html");
assert(
  (html.match(/rel="canonical"/g) || []).length === 1,
  "index.html must contain exactly one canonical link"
);

const structuredDataMatch = html.match(
  /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
);
assert(structuredDataMatch, "JSON-LD block is missing");
const structuredData = JSON.parse(structuredDataMatch[1]);
const graphTypes = new Set(
  structuredData["@graph"].map((entity) => entity["@type"])
);
["ProfilePage", "Person", "WebSite"].forEach((type) => {
  assert(graphTypes.has(type), `JSON-LD graph is missing ${type}`);
});

const manifest = JSON.parse(read("site.webmanifest"));
assert(manifest.id === "/", "Manifest id must be root-relative");
assert(manifest.start_url === "/", "Manifest start_url must be root-relative");
assert(manifest.scope === "/", "Manifest scope must be root-relative");
assert(manifest.icons.length === 4, "Manifest must contain four PWA icons");
assert(manifest.screenshots.length === 2, "Manifest must contain two screenshots");

const robots = read("robots.txt");
assert(robots.includes("Allow: /"), "robots.txt must allow crawling");
assert(
  robots.includes(`${productionUrl}sitemap.xml`),
  "robots.txt must reference the production sitemap"
);

const sitemap = read("sitemap.xml");
assert(sitemap.includes(`<loc>${productionUrl}</loc>`), "Sitemap URL is invalid");
assert(
  sitemap.includes(`${productionUrl}social/og-cover-1200x630.png`),
  "Sitemap image URL is invalid"
);

[
  ["favicon-16x16.png", 16, 16],
  ["favicon-32x32.png", 32, 32],
  ["favicon-48x48.png", 48, 48],
  ["favicon-96x96.png", 96, 96],
  ["apple-touch-icon.png", 180, 180],
  ["icons/pwa-192x192.png", 192, 192],
  ["icons/pwa-512x512.png", 512, 512],
  ["icons/pwa-maskable-192x192.png", 192, 192],
  ["icons/pwa-maskable-512x512.png", 512, 512],
  ["windows/mstile-70x70.png", 70, 70],
  ["windows/mstile-150x150.png", 150, 150],
  ["windows/mstile-310x150.png", 310, 150],
  ["windows/mstile-310x310.png", 310, 310],
  ["social/og-cover-1200x630.png", 1200, 630],
  ["social/og-cover-square-1200x1200.png", 1200, 1200],
  ["screenshots/portfolio-wide.jpg", 1265, 712],
  ["screenshots/portfolio-mobile.jpg", 375, 811],
].forEach(([file, width, height]) => assertImageSize(file, width, height));

const icoSizes = readIcoSizes("favicon.ico");
[16, 32, 48, 64, 128, 256].forEach((size) => {
  assert(icoSizes.includes(size), `favicon.ico is missing ${size}x${size}`);
});

console.log(
  `[SEO] Verified ${requiredFiles.length} files, metadata, JSON-LD, manifest and image dimensions.`
);
