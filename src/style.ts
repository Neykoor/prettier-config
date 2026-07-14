export type QuoteProps = "as-needed" | "consistent" | "preserve";
export type TrailingComma = "all" | "es5" | "none";
export type ArrowParens = "always" | "avoid";
export type EndOfLine = "lf" | "crlf" | "cr" | "auto";
export type ObjectWrap = "preserve" | "collapse";

export interface PrettierConfig {
  printWidth: number;
  tabWidth: number;
  useTabs: boolean;
  semi: boolean;
  singleQuote: boolean;
  quoteProps: QuoteProps;
  jsxSingleQuote: boolean;
  trailingComma: TrailingComma;
  bracketSpacing: boolean;
  bracketSameLine: boolean;
  arrowParens: ArrowParens;
  proseWrap: "always" | "never" | "preserve";
  htmlWhitespaceSensitivity: "css" | "strict" | "ignore";
  endOfLine: EndOfLine;
  singleAttributePerLine: boolean;
  objectWrap: ObjectWrap;
}

export const prettierConfig: Readonly<PrettierConfig> = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "lf",
  singleAttributePerLine: false,
  objectWrap: "preserve",
};

Object.freeze(prettierConfig);

export default prettierConfig;
