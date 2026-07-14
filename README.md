<img src="./assets/banner.png" alt="@neykoor/prettier-config" width="100%" />

<div align="center">

# @neykoor/prettier-config

**Preset compartido de Prettier + reglas de ESLint desactivadas, para no repetir configuración en cada repo.**

[![npm version](https://img.shields.io/npm/v/@neykoor/prettier-config.svg)](https://www.npmjs.com/package/@neykoor/prettier-config)
[![license](https://img.shields.io/npm/l/@neykoor/prettier-config.svg)](./LICENSE)
[![node](https://img.shields.io/node/v/@neykoor/prettier-config.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)

</div>

---

## Índice

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
  - [Preset de Prettier](#preset-de-prettier)
  - [ESLint clásico (`.eslintrc`)](#eslint-clásico-eslintrc)
  - [ESLint flat config](#eslint-flat-config)
- [Qué exporta el paquete](#qué-exporta-el-paquete)
- [Requisitos](#requisitos)
- [Licencia](#licencia)

---

## Características

- 🎨 **Preset real de Prettier** listo para usar: `printWidth`, `semi`, `singleQuote`, `trailingComma` y el resto de opciones centralizadas en un solo lugar.
- 🤝 **Compatibilidad total con ESLint**: desactiva automáticamente todas las reglas que chocan con Prettier.
- 🧩 **Soporta ambos formatos de ESLint**: config clásica (`.eslintrc`) y flat config (`eslint.config.js`).
- 📦 **CJS y ESM** listos para consumir, con tipos de TypeScript incluidos.
- 🧊 **Configuración congelada** (`Object.freeze`) para evitar mutaciones accidentales.
- 🪶 Sin dependencias de runtime.

---

## Instalación

```bash
npm install --save-dev @neykoor/prettier-config
```

---

## Uso

### Preset de Prettier

**Opción 1 — campo `prettier` en tu `package.json`:**

```json
{
  "prettier": "@neykoor/prettier-config/prettier"
}
```

**Opción 2 — desde `prettier.config.js`:**

```js
module.exports = require("@neykoor/prettier-config/prettier");
```

**Opción 3 — desde `prettier.config.mjs`:**

```js
import prettierConfig from "@neykoor/prettier-config/style";

export default prettierConfig;
```

**Extendiendo el preset con overrides propios:**

```js
const prettierConfig = require("@neykoor/prettier-config/prettier");

module.exports = {
  ...prettierConfig,
  printWidth: 80,
};
```

### ESLint clásico (`.eslintrc`)

```json
{
  "extends": ["@neykoor/prettier-config"]
}
```

### ESLint flat config

```js
import { createPrettierConfig } from "@neykoor/prettier-config/flat";

export default [
  // ...tus otras configuraciones
  createPrettierConfig(["**/*.ts"]),
];
```

---

## Qué exporta el paquete

| Subpath | Exporta | Para qué sirve |
|---|---|---|
| `@neykoor/prettier-config` | `rules` | Reglas de ESLint apagadas, formato `.eslintrc` |
| `@neykoor/prettier-config/flat` | `createPrettierConfig(files?)` | Genera una entrada de flat config de ESLint |
| `@neykoor/prettier-config/style` | `prettierConfig` (default) | El objeto de opciones de Prettier, tipado |
| `@neykoor/prettier-config/prettier` | objeto de configuración | Listo para `package.json#prettier` o `require()` directo |

---

## Requisitos

- Node.js `>= 18`

---

## Licencia

[MIT](./LICENSE)
