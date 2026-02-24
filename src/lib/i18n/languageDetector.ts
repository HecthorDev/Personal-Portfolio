import type { SupportedLanguage } from "./translations";

export const LANGUAGE_STORAGE_KEY = "portfolio_lang";

const LANGUAGE_MAP: Record<string, SupportedLanguage> = {
    en: "en",
    "en-us": "en",
    "en-gb": "en",
    es: "es",
    "es-es": "es",
    "es-mx": "es",
    "es-co": "es",
};

const SUPPORTED_LANGUAGES: readonly SupportedLanguage[] = ["en", "es"];

const normalizeLocale = (locale: string) => locale.toLowerCase().replace("_", "-").trim();

const mapLocale = (locale: string): SupportedLanguage | null => {
    const normalized = normalizeLocale(locale);
    if (LANGUAGE_MAP[normalized]) return LANGUAGE_MAP[normalized];
    const baseLocale = normalized.split("-")[0];
    return LANGUAGE_MAP[baseLocale] ?? null;
};

const isSupportedLanguage = (value: string): value is SupportedLanguage =>
    SUPPORTED_LANGUAGES.includes(value as SupportedLanguage);

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
