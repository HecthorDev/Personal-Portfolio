import { motion } from "framer-motion";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";

export default function Problem() {
    const { t } = useLanguage();

    return (
        <section id="problem" className="relative bg-black py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-16 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <GlassCard className="p-6 sm:p-8 md:p-10" isInteractive={false}>
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                            {t("problemEyebrow")}
                        </p>
                        <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
                            {t("problemTitle")}
                        </h2>
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                            {t("problemDescription")}
                        </p>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
