import { Language, LocalizedText } from '../types';

/** Resolves either a static string or a bilingual { vi, en } object into the active language. */
export const localize = (value: LocalizedText, lang: Language): string =>
  typeof value === 'string' ? value : value[lang];
