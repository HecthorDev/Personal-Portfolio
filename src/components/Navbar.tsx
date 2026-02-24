import { useEffect, useMemo, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import StaggeredMenu from "./ui/StaggeredMenu";
import { useLanguage } from "../lib/i18n/useLanguage";
import type { TranslationKey } from "../lib/i18n/translations";

interface NavLink {
  translationKey: Extract<TranslationKey, "navHome" | "navAbout" | "navServices" | "navProjects" | "navContact">;
  href: string;
}

type ThemeMode = "dark" | "light";

const navLinks: NavLink[] = [
  { translationKey: "navHome", href: "#home" },
  { translationKey: "navAbout", href: "#about" },
  { translationKey: "navServices", href: "#services" },
  { translationKey: "navProjects", href: "#projects" },
  { translationKey: "navContact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const applyTheme = (nextTheme: ThemeMode) => {
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolio-theme");
    const initialTheme: ThemeMode = storedTheme === "light" ? "light" : "dark";
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme: ThemeMode = prevTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
      return nextTheme;
    });
  };

  const menuItems = useMemo(
    () =>
      navLinks.map((link) => ({
        label: t(link.translationKey),
        link: link.href,
        ariaLabel: t(link.translationKey),
      })),
    [t]
  );

  const socialItems = useMemo(
    () => [
      { label: "GitHub", link: "https://github.com/HecthorDev" },
      { label: "LinkedIn", link: "https://linkedin.com" },
      { label: "X", link: "https://x.com/HecthorDev" },
    ],
    []
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-5 py-2.5 sm:px-8 sm:py-3 md:px-10 lg:px-12 transition-colors duration-300 ${isScrolled ? "bg-white/70 dark:bg-black/15 backdrop-blur-xl border-b border-zinc-200/80 dark:border-transparent" : "bg-transparent border-b border-transparent"}`}
    >
      <div className="relative flex w-full items-center">
        <div className="flex shrink-0 items-center gap-2">
          <a href="#home" className="text-2xl sm:text-3xl font-black text-white tracking-tighter">
            HG<span className="text-primary">.</span>
          </a>
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.translationKey}
              href={link.href}
              className="text-sm font-medium text-zinc-500 transition-colors hover:!text-primary hover:[text-shadow:0px_4px_15px_rgba(0,0,0,0.25)] dark:text-zinc-400 dark:hover:[text-shadow:none]"
            >
              {t(link.translationKey)}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center justify-end gap-1 sm:gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            className={`inline-flex h-9 w-9 appearance-none items-center justify-center rounded-full border-0 bg-transparent transition-colors hover:text-primary active:text-primary focus-visible:text-primary focus-visible:outline-none ${theme === "dark" ? "text-zinc-200" : "text-neutral-900"
              }`}
            aria-label={theme === "dark" ? t("enableLightTheme") : t("enableDarkTheme")}
            title={theme === "dark" ? t("enableLightTheme") : t("enableDarkTheme")}
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 1 0 9 9 9 9 0 1 1-9-9z" /></svg>
            )}
          </button>

          <div className="hidden lg:block">
            <LanguageSwitcher />
          </div>

          <div className="lg:hidden">
            <LanguageSwitcher />
          </div>

          <div className="lg:hidden">
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={socialItems}
              displaySocials
              displayItemNumbering
              isFixed
              closeOnClickAway
              changeMenuColorOnOpen
              accentColor="#00E676"
              colors={theme === "dark" ? ["#111111", "#1A1A1A"] : ["#FFFFFF", "#F4F4F5"]}
              menuButtonColor={theme === "dark" ? "#FFFFFF" : "#111111"}
              openMenuButtonColor={theme === "dark" ? "#FFFFFF" : "#111111"}
              openLabel={t("menuOpen")}
              closeLabel={t("menuClose")}
              socialsLabel={t("socialsLabel")}
              onMenuOpen={() => setIsMobileMenuOpen(true)}
              onMenuClose={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
