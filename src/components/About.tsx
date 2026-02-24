import { motion } from "framer-motion";
import { useLanguage } from "../lib/i18n/useLanguage";

type StackAreaKey = "stackFrontend" | "stackMobile" | "stackBackend" | "stackTooling";

const stackGroups: Array<{ areaKey: StackAreaKey; items: Array<{ name: string; icon: string; color: string }> }> = [
    {
        areaKey: "stackFrontend",
        items: [
            { name: "Astro", icon: "astro", color: "BC52EE" },
            { name: "React", icon: "react", color: "61DAFB" },
            { name: "Next.js", icon: "nextdotjs", color: "000000" },
            { name: "TypeScript", icon: "typescript", color: "3178C6" },
            { name: "Tailwind", icon: "tailwindcss", color: "06B6D4" },
            { name: "Three.js", icon: "threedotjs", color: "000000" },
        ],
    },
    {
        areaKey: "stackMobile",
        items: [
            { name: "React Native", icon: "react", color: "61DAFB" },
            { name: "Expo", icon: "expo", color: "000020" },
        ],
    },
    {
        areaKey: "stackBackend",
        items: [
            { name: "Python", icon: "python", color: "3776AB" },
            { name: "Django", icon: "django", color: "44B78B" },
            { name: "MongoDB", icon: "mongodb", color: "47A248" },
            { name: "Node.js", icon: "nodedotjs", color: "5FA04E" },
        ],
    },
    {
        areaKey: "stackTooling",
        items: [
            { name: "Notion", icon: "notion", color: "000000" },
            { name: "Git", icon: "git", color: "F05032" },
            { name: "Cloudinary", icon: "cloudinary", color: "3448C5" },
            { name: "Trello", icon: "trello", color: "0052CC" },
            { name: "Figma", icon: "figma", color: "F24E1E" },
            { name: "Google Workspace", icon: "google", color: "4285F4" },
        ],
    },
];

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="relative overflow-hidden bg-black py-20 sm:py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 sm:px-8 md:flex-row md:px-16 lg:gap-16 lg:px-20">
                <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative mx-auto w-full max-w-[500px] flex-1 lg:max-w-[540px]">
                    <div className="relative aspect-[4/5] w-full rounded-[2.3rem] bg-zinc-900 shadow-2xl sm:rounded-[3rem]">
                        <img src="/Img/hector2.png" alt="Hector Garcia - About" className="h-full w-full rounded-[2.3rem] object-cover grayscale transition-all duration-500 hover:grayscale-0 sm:rounded-[3rem]" />
                        <div className="absolute -bottom-3 -right-3 z-10 flex h-28 w-28 items-center justify-center rounded-full bg-primary ring-2 ring-primary/70 shadow-[0_14px_35px_rgba(0,230,118,0.35)] sm:-bottom-6 sm:-right-6 sm:h-40 sm:w-40">
                            <div className="text-center drop-shadow-md">
                                <span className="mb-1 block text-2xl font-bold text-black sm:text-4xl">1+</span>
                                <span className="block text-[10px] font-bold uppercase tracking-wider text-black sm:text-xs">{t("yearsExp")}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex-1 space-y-8 text-center md:text-left">
                    <div>
                        <h2 className="mb-6 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
                            {t("aboutPrefix")} <span className="text-primary">{t("aboutHighlight")}</span>
                        </h2>
                        <p className="mb-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{t("aboutP1")}</p>
                        <p className="mb-4 text-base leading-relaxed text-zinc-400 sm:text-lg">{t("aboutP2")}</p>
                        <p className="mb-4 leading-relaxed text-zinc-500">{t("aboutP3")}</p>
                        <p className="mb-4 leading-relaxed text-zinc-500">{t("aboutP4")}</p>
                        <p className="font-semibold leading-relaxed text-zinc-400">{t("aboutP5")}</p>
                    </div>

                    <div className="space-y-2.5">
                        {stackGroups.map((group) => (
                            <div key={group.areaKey} className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                                <p className="whitespace-nowrap text-sm font-bold text-primary">
                                    {t(group.areaKey)} &rarr;
                                </p>
                                <div className="flex flex-wrap items-center gap-1.5">
                                    {group.items.map((item) => (
                                        <span key={`${group.areaKey}-${item.name}`} className="group relative inline-flex cursor-default items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-[11px] font-semibold leading-none text-zinc-300 transition-colors hover:border-primary hover:bg-zinc-200/90 sm:text-xs">
                                            <span className="transition-opacity duration-200 group-hover:opacity-0">{item.name}</span>
                                            <img
                                                src={`https://cdn.simpleicons.org/${item.icon}/${item.color}`}
                                                alt=""
                                                aria-hidden="true"
                                                loading="lazy"
                                                onError={(event) => {
                                                    event.currentTarget.style.display = "none";
                                                }}
                                                className="pointer-events-none absolute h-3.5 w-3.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                                            />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <a href="#services" className="inline-flex items-center font-bold text-primary transition-transform hover:translate-x-2">
                        {t("exploreServices")}
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
