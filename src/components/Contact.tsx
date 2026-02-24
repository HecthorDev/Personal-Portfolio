import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../lib/i18n/useLanguage";
import StarBorder from "./ui/StarBorder";
import GlassCard from "./ui/GlassCard";
import GlassInput from "./ui/GlassInput";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const { t } = useLanguage();
    const form = useRef<HTMLFormElement>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [isMounted, setIsMounted] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    useEffect(() => {
        setIsMounted(true);
        const updateTheme = () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") as "dark" | "light";
            setTheme(currentTheme || "dark");
        };
        updateTheme();
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
        return () => observer.disconnect();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "name") {
            if (value !== "" && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) return;
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const recaptchaValue = recaptchaRef.current?.getValue();
        if (!recaptchaValue) {
            alert("Por favor, verifica el Captcha.");
            return;
        }

        if (!form.current) return;
        setStatus("loading");

        try {
            await emailjs.sendForm(
                'service_z3vp9mf',
                'template_r7v6fqb',
                form.current,
                'QVs5FtgmHTC1gH3UC'
            );
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            recaptchaRef.current?.reset();
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="relative bg-black py-20 sm:py-24">
            <div className="mx-auto max-w-3xl px-5 sm:px-8 md:px-12">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center sm:mb-16">
                    <span className="text-sm font-bold uppercase tracking-wider text-primary">{t("contactEyebrow")}</span>
                    <h2 className="mt-2 mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        {t("contactPrefix")} <span className="text-primary">{t("contactHighlight")}</span>
                    </h2>
                    <p className="text-zinc-400">{t("contactIntro")}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                    <GlassCard className="p-5 sm:p-8 md:p-12" variant="clear" isInteractive={false}>
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <GlassInput
                                    label={t("labelName")}
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t("placeholderName")}
                                />
                                <GlassInput
                                    label={t("labelEmail")}
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t("placeholderEmail")}
                                />
                            </div>

                            <GlassInput
                                label={t("labelSubject")}
                                id="subject"
                                name="subject"
                                type="text"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder={t("placeholderSubject")}
                            />

                            <div className="space-y-2">
                                <label htmlFor="message" className="ml-2 text-sm font-medium text-zinc-400">{t("labelMessage")}</label>
                                <div className="group relative overflow-hidden rounded-2xl">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full resize-none rounded-2xl border border-zinc-700/50 bg-zinc-950/20 px-6 py-4 text-white shadow-inner backdrop-blur-md transition-all placeholder-zinc-600 focus:bg-zinc-900/40 focus:outline-none"
                                        placeholder={t("placeholderMessage")}
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-colors duration-300 group-focus-within:ring-primary/50" />
                                </div>
                            </div>

                            {/* RECAPTCHA THEMED */}
                            <div className="flex justify-center pt-2">
                                <div className="rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg bg-zinc-900/20 backdrop-blur-sm p-0 inline-block transition-colors">
                                    {isMounted && (
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey="6LfRSNISAAAAAMfRc6rmKwWZbJQA2EdpoR2Rr0XA"
                                            theme={theme}
                                        />
                                    )}
                                </div>
                            </div>

                            {status === "success" && <p className="text-primary text-center text-sm font-medium">¡Mensaje enviado con éxito!</p>}
                            {status === "error" && <p className="text-red-400 text-center text-sm font-medium">Ocurrió un error. Inténtalo de nuevo más tarde o revisa el Captcha.</p>}

                            <div className="mx-auto mt-4 flex justify-center w-full md:w-auto">
                                <button disabled={status === "loading"} type="submit" className={`h-12 w-full px-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-sm font-bold uppercase tracking-widest whitespace-nowrap text-black dark:text-white hover:!bg-primary hover:!text-black transition-all duration-300 ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}>
                                    {status === "loading" ? "Enviando..." : t("sendMessage")}
                                </button>
                            </div>
                        </form>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
