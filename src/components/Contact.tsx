import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";
import GlassInput from "./ui/GlassInput";
import emailjs from '@emailjs/browser';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

function ContactFormContent() {
    const { t } = useLanguage();
    const form = useRef<HTMLFormElement>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();

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

        if (!executeRecaptcha) {
            console.warn("ReCAPTCHA no está listo aún");
            setStatus("error");
            return;
        }

        setStatus("loading");

        try {
            const token = await executeRecaptcha("submit_contact");
            if (!token) {
                setStatus("error");
                return;
            }

            if (!form.current) return;

            await emailjs.sendForm(
                'service_z3vp9mf',
                'template_r7v6fqb',
                form.current,
                'QVs5FtgmHTC1gH3UC'
            );
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="relative bg-black py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-5 sm:px-8 md:px-12">
                <div className="mb-8 text-center sm:mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{t("contactEyebrow")}</span>
                    <h2 className="mt-2 mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        {t("contactPrefix")} <span className="text-primary">{t("contactHighlight")}</span>
                    </h2>
                    <p className="text-zinc-400 text-sm">{t("contactIntro")}</p>
                </div>

                <div>
                    <GlassCard className="p-5 sm:p-6 md:p-8" variant="clear" isInteractive={false}>
                        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                <GlassInput
                                    label={t("labelName")}
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    onInvalid={(e) => e.currentTarget.setCustomValidity(t('contactIncomplete'))}
                                    onInput={(e) => e.currentTarget.setCustomValidity('')}
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
                                    onInvalid={(e) => e.currentTarget.setCustomValidity(t('contactIncomplete'))}
                                    onInput={(e) => e.currentTarget.setCustomValidity('')}
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
                                onInvalid={(e) => e.currentTarget.setCustomValidity(t('contactIncomplete'))}
                                onInput={(e) => e.currentTarget.setCustomValidity('')}
                                placeholder={t("placeholderSubject")}
                            />

                            <div className="space-y-2">
                                <label htmlFor="message" className="ml-2 text-sm font-medium text-zinc-400">{t("labelMessage")}</label>
                                <div className="group relative overflow-hidden rounded-2xl">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={3}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        onInvalid={(e) => e.currentTarget.setCustomValidity(t('contactIncomplete'))}
                                        onInput={(e) => e.currentTarget.setCustomValidity('')}
                                        className="w-full resize-none rounded-2xl border border-zinc-700/50 bg-zinc-950/20 px-6 py-4 text-white shadow-inner backdrop-blur-md transition-all placeholder-zinc-600 focus:bg-zinc-900/40 focus:outline-none"
                                        placeholder={t("placeholderMessage")}
                                    />
                                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-colors duration-300 group-focus-within:ring-primary/50" />
                                </div>
                            </div>

                            {/* RECAPTCHA & BUTTON */}
                            <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 pt-2">
                                <button disabled={status === "loading"} type="submit" className={`h-12 w-full md:w-auto md:min-w-[200px] px-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-sm font-bold uppercase tracking-widest whitespace-nowrap text-black dark:text-white hover:!bg-primary hover:!text-black transition-all duration-300 flex-shrink-0 ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}>
                                    {status === "loading" ? t("contactSending") : t("sendMessage")}
                                </button>
                            </div>

                            <p className="text-zinc-500 text-[10px] text-center mt-4">
                                This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="text-primary hover:underline">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="text-primary hover:underline">Terms of Service</a> apply.
                            </p>

                            {status === "success" && <p className="text-primary text-center text-sm font-medium">{t("contactSuccess")}</p>}
                            {status === "error" && <p className="text-red-400 text-center text-sm font-medium">{t("contactError")}</p>}
                        </form>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
}

export default function Contact() {
    return (
        <GoogleReCaptchaProvider reCaptchaKey="6Lf523YsAAAAADI4-yiedg9VjivRWrhaO3nkGz-7">
            <ContactFormContent />
        </GoogleReCaptchaProvider>
    );
}
