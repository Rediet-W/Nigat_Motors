import type { Locale } from "../config";
import { am } from "./am";
import { en, type Dictionary } from "./en";

const DICTIONARIES: Record<Locale, Dictionary> = { en, am };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}

export type { Dictionary };
