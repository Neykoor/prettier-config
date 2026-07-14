import { rules } from "./index";

export const name = "config-prettier";

export interface FlatConfigEntry {
  name: string;
  files?: string[];
  rules: Record<string, 0 | "off">;
}

export function createPrettierConfig(files: string[] = ["**/*.ts"]): FlatConfigEntry {
  return { name, files, rules };
}

export { rules };

export default { name, rules };
