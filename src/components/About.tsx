import { motion } from "framer-motion";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="relative scroll-mt-16 overflow-visible bg-black py-14 !min-h-0 !items-start sm:py-16 lg:py-20">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 sm:px-8 md:px-16 lg:flex-row lg:items-center lg:gap-16 lg:px-20">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative flex w-full justify-center lg:flex-1 lg:justify-end"
                >
                    <div className="relative w-full max-w-[360px] aspect-[3/4] sm:max-w-[430px] lg:max-w-[500px] xl:max-w-[540px] rounded-[3rem] bg-zinc-900 shadow-2xl shrink-0">
                        <img
                            src="/Img/ProfilePhoto.jpeg"
                            alt="Hector Garcia - About"
                            className="h-full w-full rounded-[3rem] object-cover grayscale transition-all duration-500 hover:grayscale-0"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full text-center md:text-left flex flex-col lg:flex-1"
                >
                    <div className="flex max-w-3xl flex-col gap-4 md:gap-5">
                        <h2 className="text-4xl font-bold uppercase tracking-wide text-white sm:text-5xl md:text-6xl">
                            {t("aboutPrefix")} <span className="text-primary">{t("aboutHighlight")}</span>
                        </h2>

                        <div className="space-y-2.5">
                            <p className="text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">{t("aboutP1")}</p>
                            <p className="text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">{t("aboutP2")}</p>
                        </div>

                        <div className="space-y-2.5">
                            <p className="text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">{t("aboutP3")}</p>
                            <p className="text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">{t("aboutP4")}</p>
                        </div>

                        <GlassCard className="w-full max-w-2xl p-5 text-left sm:p-6" isInteractive={false}>
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                {t("problemEyebrow")}
                            </p>
                            <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                                {t("problemTitle")}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                                {t("aboutConversionText")}
                            </p>
                        </GlassCard>

                        <div className="pt-1 flex flex-col gap-2">
                            <p className="font-semibold text-base leading-7 text-black dark:text-white sm:text-lg">{t("aboutP5_1")}</p>
                            <p className="font-semibold text-base leading-7 text-primary sm:text-lg">{t("aboutP5_2")}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
