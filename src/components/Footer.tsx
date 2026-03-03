import { useLanguage } from "../lib/i18n/useLanguage";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-black py-5 sm:py-6">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-16 lg:px-20">
                <div className="footer-glass rounded-3xl p-5 sm:p-6 md:p-7">

                    {/* Main row: tagline left, icons right */}
                    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-center mb-6 sm:mb-7">

                        {/* Left: logo + tagline */}
                        <div className="space-y-3 text-center sm:text-left">
                            <a href="#home" className="text-xl font-black tracking-tighter text-white sm:text-2xl">
                                HG<span className="text-primary">.</span>
                            </a>
                            <p className="text-sm font-bold uppercase tracking-widest text-white sm:text-base">
                                {t("footerTagline")}
                            </p>
                        </div>

                        {/* Right: social icons */}
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/HecthorDev"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900/70 text-zinc-400 transition-all hover:!bg-primary hover:!text-black hover:[box-shadow:0_4px_15px_rgba(0,0,0,0.3)]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                    <path d="M9 18c-4.51 2-5-2-7-2" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hector19garcia/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900/70 text-zinc-400 transition-all hover:!bg-primary hover:!text-black hover:[box-shadow:0_4px_15px_rgba(0,0,0,0.3)]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect width="4" height="12" x="2" y="9" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a
                                href="https://x.com/HecthorDev"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="X"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900/70 text-zinc-400 transition-all hover:!bg-primary hover:!text-black hover:[box-shadow:0_4px_15px_rgba(0,0,0,0.3)]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Bottom bar: copyright centered */}
                    <div className="border-t border-white/10 pt-3.5 text-center text-xs text-zinc-600 sm:text-[0.78rem]">
                        <p>© {new Date().getFullYear()} Hector Garcia. {t("footerRights")}</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
