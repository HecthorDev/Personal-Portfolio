import { motion } from "framer-motion";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassButton from "./ui/GlassButton";
import GlassCard from "./ui/GlassCard";
import GlassInput from "./ui/GlassInput";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="relative bg-black py-20 sm:py-24">
            <div className="mx-auto max-w-4xl px-5 sm:px-8 md:px-12">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center sm:mb-16">
                    <span className="text-sm font-bold uppercase tracking-wider text-primary">{t("contactEyebrow")}</span>
                    <h2 className="mt-2 mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        {t("contactPrefix")} <span className="text-primary">{t("contactHighlight")}</span>
                    </h2>
                    <p className="text-zinc-400">{t("contactIntro")}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                    <GlassCard className="p-5 sm:p-8 md:p-12" variant="clear" isInteractive={false}>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <GlassInput label={t("labelName")} id="name" name="name" type="text" placeholder={t("placeholderName")} />
                                <GlassInput label={t("labelEmail")} id="email" name="email" type="email" placeholder={t("placeholderEmail")} />
                            </div>

                            <GlassInput label={t("labelSubject")} id="subject" name="subject" type="text" placeholder={t("placeholderSubject")} />

                            <div className="space-y-2">
                                <label htmlFor="message" className="ml-2 text-sm font-medium text-zinc-400">{t("labelMessage")}</label>
                                <div className="group relative overflow-hidden rounded-2xl">
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full resize-none rounded-2xl border border-zinc-700/50 bg-zinc-950/20 px-6 py-4 text-white shadow-inner backdrop-blur-md transition-all placeholder-zinc-600 focus:bg-zinc-900/40 focus:outline-none"
                                        placeholder={t("placeholderMessage")}
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-colors duration-300 group-focus-within:ring-primary/50" />
                                </div>
                            </div>

                            <GlassButton type="submit" variant="primary" className="mx-auto mt-6 block w-full justify-center md:w-auto md:px-12">
                                {t("sendMessage")}
                            </GlassButton>
                        </form>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
