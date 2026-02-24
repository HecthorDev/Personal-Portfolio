import { LANGUAGES, type SupportedLanguage } from "./translations";

export const LANGUAGE_STORAGE_KEY = "portfolio_lang";

const LANGUAGE_MAP: Record<string, SupportedLanguage> = {
    en: "en",
    "en-us": "en",
    "en-gb": "en",
    es: "es",
    "es-es": "es",
    "es-mx": "es",
    "es-co": "es",
    zh: "zh",
    "zh-cn": "zh",
    "zh-hans": "zh",
    "zh-tw": "zh",
    fr: "fr",
    "fr-fr": "fr",
    "fr-ca": "fr",
    ar: "ar",
    "ar-sa": "ar",
    ru: "ru",
    "ru-ru": "ru",
    hi: "hi",
    "hi-in": "hi",
    pt: "pt",
    "pt-br": "pt",
    "pt-pt": "pt",
};

const normalizeLocale = (locale: string) => locale.toLowerCase().replace("_", "-").trim();

const mapLocale = (locale: string): SupportedLanguage | null => {
    const normalized = normalizeLocale(locale);
    if (LANGUAGE_MAP[normalized]) return LANGUAGE_MAP[normalized];
    const baseLocale = normalized.split("-")[0];
    return LANGUAGE_MAP[baseLocale] ?? null;
};

const isSupportedLanguage = (value: string): value is SupportedLanguage => value in LANGUAGES;

export function detectLanguage(): SupportedLanguage {
    if (typeof window === "undefined") return "en";

    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage && isSupportedLanguage(savedLanguage)) {
        return savedLanguage;
    }

    const browserLocales = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const locale of browserLocales) {
        const mappedLanguage = mapLocale(locale);
        if (mappedLanguage) return mappedLanguage;
    }

    return "en";
}

export function saveLanguagePreference(lang: SupportedLanguage): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
}
