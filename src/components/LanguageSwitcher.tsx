"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../lib/i18n/useLanguage";

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const { currentLang, changeLanguage, t, languages } = useLanguage();
    const activeLanguage = useMemo(() => languages.find((language) => language.code === currentLang) ?? languages[0], [languages, currentLang]);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
        };
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setIsOpen(false);
        };
        document.addEventListener("mousedown", handleOutsideClick);
        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    if (!activeLanguage) return null;

    return (
        <div ref={containerRef} className="relative">
            <button
                type="button"
                aria-label={t("languageSwitcherLabel")}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
                className="inline-flex h-9 w-9 appearance-none items-center justify-center rounded-full border-0 bg-transparent text-neutral-900 transition-colors duration-150 hover:text-primary focus-visible:outline-none dark:text-white dark:hover:text-primary"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-5 w-5 transition-transform ${isOpen ? "scale-105 text-primary" : ""}`}
                    aria-hidden="true"
                >
                    <path d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                </svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.15 }} className="absolute right-0 top-full z-[85] mt-2.5 w-44">
                        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white text-neutral-900 shadow-[0_12px_28px_rgba(15,23,42,0.16)] dark:border-white/10 dark:bg-black/15 dark:text-white dark:shadow-[0_12px_28px_rgba(0,0,0,0.32)] dark:backdrop-blur-xl">
                            <ul role="listbox" aria-label={t("languageSwitcherLabel")} className="relative p-1">
                                {languages.map((language) => {
                                    const isActive = language.code === currentLang;
                                    return (
                                        <li key={language.code}>
                                            <button
                                                type="button"
                                                role="option"
                                                aria-selected={isActive}
                                                onClick={() => {
                                                    changeLanguage(language.code);
                                                    setIsOpen(false);
                                                }}
                                                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm transition-colors ${
                                                    isActive
                                                        ? "bg-green-400 text-black"
                                                        : "hover:bg-neutral-100 hover:text-primary dark:hover:bg-white/10 dark:hover:text-primary"
                                                }`}
                                            >
                                                <img
                                                    src={language.flagAsset}
                                                    alt=""
                                                    aria-hidden="true"
                                                    className="h-4 w-4 rounded-full object-cover"
                                                    loading="lazy"
                                                    draggable={false}
                                                    onError={(event) => {
                                                        event.currentTarget.style.display = "none";
                                                    }}
                                                />
                                                <span>{language.name}</span>
                                            </button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
