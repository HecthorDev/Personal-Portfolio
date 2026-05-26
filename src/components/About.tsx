import { motion } from "framer-motion";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="relative overflow-visible bg-black py-24 sm:py-28">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-14 md:px-16 lg:px-20">

                {/* Image column */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex w-full justify-center lg:flex-[0.9] lg:justify-end"
                >
                    <div className="relative w-full max-w-[360px] aspect-[3/4] sm:max-w-[400px] lg:max-w-[430px] rounded-[3rem] bg-zinc-900 shadow-2xl shrink-0">
                        <img
                            src="/Img/ProfilePhoto.jpeg"
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
                    className="w-full text-center md:text-left flex flex-col lg:flex-[1.1]"
                >
                    <div className="flex max-w-3xl flex-col gap-6 md:gap-7">
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

                        <GlassCard className="w-full max-w-2xl p-5 text-left sm:p-6" isInteractive={false}>
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                {t("problemEyebrow")}
                            </p>
                            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                                {t("problemTitle")}
                            </h3>
                            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
                                {t("aboutConversionText")}
                            </p>
                        </GlassCard>

                        <div className="pt-2 flex flex-col gap-3">
                            <p className="font-semibold text-xl leading-relaxed text-black dark:text-white sm:text-2xl">{t("aboutP5_1")}</p>
                            <p className="font-semibold text-xl leading-relaxed text-primary sm:text-2xl">{t("aboutP5_2")}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
