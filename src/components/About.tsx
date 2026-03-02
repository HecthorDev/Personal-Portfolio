import { motion } from "framer-motion";
import { useLanguage } from "../lib/i18n/useLanguage";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="relative overflow-hidden bg-black py-20 sm:py-24">
            <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 px-5 sm:px-8 md:flex-row md:items-start md:px-16 lg:gap-16 lg:px-20">

                {/* Image column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex flex-1 w-full justify-center md:justify-end"
                >
                    <div className="relative w-full max-w-[400px] aspect-[3/4] md:max-w-[450px] lg:max-w-[500px] rounded-[3rem] bg-zinc-900 shadow-2xl shrink-0">
                        <img
                            src="/Img/hector2.png"
                            alt="Hector Garcia - About"
                            className="h-full w-full rounded-[3rem] object-cover grayscale transition-all duration-500 hover:grayscale-0"
                        />
                        {/* Badge circle */}
                        <div className="absolute -bottom-4 -right-4 z-10 flex h-28 w-28 items-center justify-center rounded-full bg-primary ring-2 ring-primary/70 shadow-[0_14px_35px_rgba(0,230,118,0.35)] md:-bottom-6 md:-right-6 md:h-36 md:w-36 lg:h-40 lg:w-40">
                            <div className="flex flex-col items-center justify-center leading-none text-center gap-1">
                                <span className="text-4xl font-black text-black dark:text-white md:text-5xl lg:text-6xl leading-none">
                                    1+
                                </span>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-black dark:text-white md:text-[13px] leading-tight px-1">
                                    {t("yearsExp")}
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Text column */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 w-full text-center md:text-left flex flex-col pt-8 sm:pt-0"
                >
                    <div className="flex flex-col h-full justify-between gap-6 md:gap-8 xl:gap-10">
                        <h2 className="text-5xl font-bold uppercase tracking-wide text-white sm:text-6xl md:text-7xl">
                            {t("aboutPrefix")} <span className="text-primary">{t("aboutHighlight")}</span>
                        </h2>

                        <div className="space-y-4">
                            <p className="text-xl leading-relaxed text-zinc-400 sm:text-2xl">{t("aboutP1")}</p>
                            <p className="text-xl leading-relaxed text-zinc-400 sm:text-2xl">{t("aboutP2")}</p>
                        </div>

                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed text-zinc-500 sm:text-xl">{t("aboutP3")}</p>
                            <p className="text-lg leading-relaxed text-zinc-500 sm:text-xl">{t("aboutP4")}</p>
                        </div>

                        <div className="mt-auto pt-4 flex flex-col gap-3">
                            <p className="font-semibold text-xl leading-relaxed text-black dark:text-white sm:text-2xl">{t("aboutP5_1")}</p>
                            <p className="font-semibold text-xl leading-relaxed text-primary sm:text-2xl">{t("aboutP5_2")}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
