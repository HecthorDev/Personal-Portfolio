import { useCallback, useEffect, useMemo, useState } from "react";
import { detectLanguage, LANGUAGE_STORAGE_KEY, saveLanguagePreference } from "./languageDetector";
import { getTranslation, type SupportedLanguage, type TranslationKey } from "./translations";

const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";
const LANGUAGE_OPTIONS = {
    en: { code: "en", name: "English", nativeName: "English", flag: "GB", flagAsset: "https://flagcdn.com/w20/gb.png", dir: "ltr" },
    es: { code: "es", name: "Espanol", nativeName: "Espanol", flag: "ES", flagAsset: "https://flagcdn.com/w20/es.png", dir: "ltr" },
} as const;

const isSupportedLanguage = (value: string): value is SupportedLanguage => value === "en" || value === "es";

const applyDocumentLanguage = (lang: SupportedLanguage) => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = LANGUAGE_OPTIONS[lang].dir;
};

export function useLanguage() {
    const [currentLang, setCurrentLang] = useState<SupportedLanguage>("en");

    useEffect(() => {
        const initialLanguage = detectLanguage();
        setCurrentLang(initialLanguage);
        applyDocumentLanguage(initialLanguage);
    }, []);

    useEffect(() => {
        const onStorage = (event: StorageEvent) => {
            if (event.key !== LANGUAGE_STORAGE_KEY || !event.newValue || !isSupportedLanguage(event.newValue)) return;
            const nextLanguage = event.newValue as SupportedLanguage;
            setCurrentLang(nextLanguage);
            applyDocumentLanguage(nextLanguage);
        };

        const onLanguageChange = (event: Event) => {
            const detail = (event as CustomEvent<{ lang?: SupportedLanguage }>).detail;
            if (!detail?.lang) return;
            setCurrentLang(detail.lang);
            applyDocumentLanguage(detail.lang);
        };

        window.addEventListener("storage", onStorage);
        window.addEventListener(LANGUAGE_CHANGE_EVENT, onLanguageChange as EventListener);
        return () => {
            window.removeEventListener("storage", onStorage);
            window.removeEventListener(LANGUAGE_CHANGE_EVENT, onLanguageChange as EventListener);
        };
    }, []);

    const changeLanguage = useCallback((lang: SupportedLanguage) => {
        saveLanguagePreference(lang);
        setCurrentLang(lang);
        applyDocumentLanguage(lang);
        window.dispatchEvent(new CustomEvent(LANGUAGE_CHANGE_EVENT, { detail: { lang } }));
    }, []);

    const t = useCallback((key: TranslationKey) => getTranslation(currentLang, key), [currentLang]);

    const languages = useMemo(() => Object.values(LANGUAGE_OPTIONS), []);

    return { currentLang, changeLanguage, t, languages };
}
