# @neykoor/prettier-config

Shared Prettier style preset, plus the ESLint rules turned off to avoid conflicts with Prettier. Works with the legacy `.eslintrc` format and with ESLint's flat config.

## Install

```bash
npm install --save-dev @neykoor/prettier-config
```

## Usage (Prettier preset)

Point Prettier at the shared preset via the `prettier` field in your `package.json`:

```json
{
  "prettier": "@neykoor/prettier-config/prettier"
}
```

Or from a `prettier.config.js`:

```js
module.exports = require("@neykoor/prettier-config/prettier");
```

Or from a `prettier.config.mjs`:

```js
import prettierConfig from "@neykoor/prettier-config/style";

export default prettierConfig;
```

To extend it with per-project overrides:

```js
const prettierConfig = require("@neykoor/prettier-config/prettier");

module.exports = {
  ...prettierConfig,
  printWidth: 80,
};
```

## Usage (legacy `.eslintrc`)

```json
{
  "extends": ["@neykoor/prettier-config"]
}
```

## Usage (flat config, `eslint.config.js`)

```js
import { createPrettierConfig } from "@neykoor/prettier-config/flat";

export default [
  // ...your other configs
  createPrettierConfig(["**/*.ts"]),
];
```
