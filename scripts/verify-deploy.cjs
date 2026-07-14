const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const buildDir = path.join(rootDir, "build");
const maxFiles = 20000;
const maxFileSize = 25 * 1024 * 1024;

function assert(condition, message) {
  if (!condition) {
    throw new Error(`[DEPLOY] ${message}`);
  }
}

function read(relativePath, baseDir = buildDir) {
  return fs.readFileSync(path.join(baseDir, relativePath), "utf8");
}

function collectFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);

    return entry.isDirectory() ? collectFiles(entryPath) : [entryPath];
  });
}

assert(fs.existsSync(buildDir), "Run npm run build before the deploy audit");

const files = collectFiles(buildDir);
const oversizedFile = files.find(
  (filePath) => fs.statSync(filePath).size > maxFileSize
);
const sourceMap = files.find((filePath) => filePath.endsWith(".map"));
const totalSize = files.reduce(
  (sum, filePath) => sum + fs.statSync(filePath).size,
  0
);

assert(
  files.length <= maxFiles,
  `Cloudflare Pages Free allows ${maxFiles} files; build has ${files.length}`
);
assert(
  !oversizedFile,
  `Cloudflare Pages allows 25 MiB per file; oversized asset: ${path.relative(
    buildDir,
    oversizedFile || ""
  )}`
);
assert(!sourceMap, `Production source map found: ${sourceMap || ""}`);

const headers = read("_headers");
[
  "X-Frame-Options: DENY",
  "X-Content-Type-Options: nosniff",
  "Referrer-Policy: strict-origin-when-cross-origin",
  "Permissions-Policy:",
  "Cross-Origin-Opener-Policy: same-origin",
  "Content-Security-Policy:",
  "Cache-Control: public, max-age=31536000, immutable",
  "Cache-Control: public, max-age=0, must-revalidate",
].forEach((token) => {
  assert(headers.includes(token), `_headers is missing: ${token}`);
});

headers.split(/\r?\n/).forEach((line, index) => {
  assert(
    line.length <= 2000,
    `_headers line ${index + 1} exceeds the Cloudflare 2,000 character limit`
  );
});

const redirects = read("_redirects");
[
  "/react-portfolio / 301",
  "/react-portfolio/ / 301",
  "/react-portfolio/* /:splat 301",
].forEach((rule) => {
  assert(redirects.includes(rule), `_redirects is missing: ${rule}`);
});

const redirectRules = redirects
  .split(/\r?\n/)
  .filter((line) => line.trim() && !line.trim().startsWith("#"));
assert(
  redirectRules.length <= 2100,
  "_redirects exceeds the Cloudflare Pages rule limit"
);

const notFoundPage = read("404.html");
assert(
  notFoundPage.includes('content="noindex, nofollow"'),
  "404.html must stay excluded from search indexing"
);

const wranglerConfig = JSON.parse(read("wrangler.jsonc", rootDir));
assert(
  wranglerConfig.name === "stepandrogin",
  "Wrangler project name must match the Cloudflare Pages project"
);
assert(
  wranglerConfig.pages_build_output_dir === "./build",
  "Wrangler output directory must be ./build"
);

assert(
  fs.existsSync(path.join(rootDir, ".github", "workflows", "quality.yml")),
  "GitHub quality workflow is missing"
);

console.log(
  `[DEPLOY] Verified ${files.length} files (${(
    totalSize /
    1024 /
    1024
  ).toFixed(2)} MiB), Pages limits, redirects, headers and Wrangler config.`
);
