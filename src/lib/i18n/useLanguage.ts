import { useCallback, useEffect, useMemo, useState } from "react";
import { detectLanguage, LANGUAGE_STORAGE_KEY, saveLanguagePreference } from "./languageDetector";
import { LANGUAGES, getTranslation, type SupportedLanguage, type TranslationKey } from "./translations";

const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

const applyDocumentLanguage = (lang: SupportedLanguage) => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = LANGUAGES[lang].dir;
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
            if (event.key !== LANGUAGE_STORAGE_KEY || !event.newValue || !(event.newValue in LANGUAGES)) return;
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

    const languages = useMemo(() => Object.values(LANGUAGES), []);

    return { currentLang, changeLanguage, t, languages };
}
