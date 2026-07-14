import { rules, RuleValue } from "./index.js";

export const name = "config-prettier";

export interface FlatConfigEntry {
  name: string;
  files?: string[];
  rules: Record<string, RuleValue>;
}

export function createPrettierConfig(files?: string[]): FlatConfigEntry {
  return files ? { name, files, rules } : { name, rules };
}

export { rules };

export default { name, rules };
