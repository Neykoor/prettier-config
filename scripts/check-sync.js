let ownRules;
try {
  ownRules = require("../lib/index").rules;
} catch (err) {
  console.error("Could not load ../lib/index. Run `npm run build:cjs` first.");
  process.exit(1);
}

let upstreamRules;
try {
  upstreamRules = require("eslint-config-prettier").rules;
} catch (err) {
  console.error("Install eslint-config-prettier as a devDependency to run this check.");
  process.exit(1);
}

const missing = Object.keys(upstreamRules).filter((rule) => !(rule in ownRules));
const extra = Object.keys(ownRules).filter((rule) => !(rule in upstreamRules));

let hasIssues = false;

if (missing.length > 0) {
  hasIssues = true;
  console.error("Rules missing compared to eslint-config-prettier:");
  missing.forEach((rule) => console.error(`  ${rule}`));
}

if (extra.length > 0) {
  hasIssues = true;
  console.warn("Rules present locally but no longer in eslint-config-prettier:");
  extra.forEach((rule) => console.warn(`  ${rule}`));
}

if (hasIssues) {
  process.exit(1);
}

console.log("In sync with eslint-config-prettier.");
