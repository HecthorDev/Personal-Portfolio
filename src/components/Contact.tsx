import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";
import GlassInput from "./ui/GlassInput";
import emailjs from "@emailjs/browser";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

function ContactFormContent() {
    const { currentLang, t } = useLanguage();
    const form = useRef<HTMLFormElement>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [isMounted, setIsMounted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
        serviceType: "",
        budget: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        whatsapp: "",
        serviceType: "",
        budget: "",
        message: "",
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const validate = (): boolean => {
        const newErrors = { name: "", email: "", whatsapp: "", serviceType: "", budget: "", message: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = t("contactIncomplete");
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = t("contactIncomplete");
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t("contactInvalidEmail");
            isValid = false;
        }
        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = t("contactIncomplete");
            isValid = false;
        }
        if (!formData.serviceType.trim()) {
            newErrors.serviceType = t("contactIncomplete");
            isValid = false;
        }
        if (!formData.budget.trim()) {
            newErrors.budget = t("contactIncomplete");
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = t("contactIncomplete");
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        if (name === "name" && value !== "" && !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!validate()) return;
        if (!executeRecaptcha) {
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
                "service_z3vp9mf",
                "template_r7v6fqb",
                form.current,
                "QVs5FtgmHTC1gH3UC"
            );
            setStatus("success");
            setFormData({ name: "", email: "", whatsapp: "", serviceType: "", budget: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const selectClassName = "w-full rounded-2xl border border-zinc-700/50 bg-zinc-950/20 px-6 py-4 text-white shadow-inner backdrop-blur-md transition-all focus:bg-zinc-900/40 focus:outline-none";

    return (
        <section id="contact" className="relative scroll-mt-16 bg-black py-16 !min-h-0 !items-start sm:py-20">
            <div className="mx-auto max-w-3xl px-5 sm:px-8 md:px-12">
                <div className="mb-8 text-center sm:mb-12">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{t("contactEyebrow")}</span>
                    <h2 className="mt-2 mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        {t("contactPrefix")} <span className="text-primary">{t("contactHighlight")}</span>
                    </h2>
                    <p className="text-zinc-400 text-sm">{t("contactIntro")}</p>
                </div>

                <GlassCard className="p-5 sm:p-6 md:p-8" variant="clear" isInteractive={false}>
                    <form ref={form} onSubmit={handleSubmit} noValidate className="space-y-4">
                        <input type="hidden" name="service_type" value={formData.serviceType} />
                        <input type="hidden" name="language" value={currentLang} />
                        <input type="hidden" name="page_url" value={isMounted ? window.location.href : ""} />

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-1">
                                <GlassInput
                                    label={t("labelName")}
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t("placeholderName")}
                                />
                                {errors.name && (
                                    <p className="ml-2 text-xs text-red-400">{errors.name}</p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <GlassInput
                                    label={t("labelEmail")}
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={t("placeholderEmail")}
                                />
                                {errors.email && (
                                    <p className="ml-2 text-xs text-red-400">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-1">
                                <GlassInput
                                    label={t("labelWhatsapp")}
                                    id="whatsapp"
                                    name="whatsapp"
                                    type="text"
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    placeholder={t("placeholderWhatsapp")}
                                />
                                {errors.whatsapp && (
                                    <p className="ml-2 text-xs text-red-400">{errors.whatsapp}</p>
                                )}
                            </div>
                            <div className="space-y-1">
                                <label htmlFor="serviceType" className="ml-2 block text-sm font-medium text-zinc-400">
                                    {t("labelServiceType")}
                                </label>
                                <div className="group relative overflow-hidden rounded-2xl">
                                    <select
                                        id="serviceType"
                                        name="serviceType"
                                        value={formData.serviceType}
                                        onChange={handleChange}
                                        className={`${selectClassName} ${formData.serviceType ? "" : "text-zinc-500"}`}
                                    >
                                        <option value="">{t("placeholderServiceType")}</option>
                                        <option value={t("serviceOptionLanding")}>{t("serviceOptionLanding")}</option>
                                        <option value={t("serviceOptionCommunity")}>{t("serviceOptionCommunity")}</option>
                                        <option value={t("serviceOptionCampaign")}>{t("serviceOptionCampaign")}</option>
                                        <option value={t("serviceOptionGrowth")}>{t("serviceOptionGrowth")}</option>
                                        <option value={t("serviceOptionNotSure")}>{t("serviceOptionNotSure")}</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-colors duration-300 group-focus-within:ring-primary/50" />
                                </div>
                                {errors.serviceType && (
                                    <p className="ml-2 text-xs text-red-400">{errors.serviceType}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="budget" className="ml-2 block text-sm font-medium text-zinc-400">
                                {t("labelBudget")}
                            </label>
                            <div className="group relative overflow-hidden rounded-2xl">
                                <select
                                    id="budget"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className={`${selectClassName} ${formData.budget ? "" : "text-zinc-500"}`}
                                >
                                    <option value="">{t("placeholderBudget")}</option>
                                    <option value={t("budgetOptionStarter")}>{t("budgetOptionStarter")}</option>
                                    <option value={t("budgetOptionGrowth")}>{t("budgetOptionGrowth")}</option>
                                    <option value={t("budgetOptionCustom")}>{t("budgetOptionCustom")}</option>
                                    <option value={t("budgetOptionNotSure")}>{t("budgetOptionNotSure")}</option>
                                </select>
                                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-colors duration-300 group-focus-within:ring-primary/50" />
                            </div>
                            {errors.budget && (
                                <p className="ml-2 text-xs text-red-400">{errors.budget}</p>
                            )}
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="message" className="ml-2 text-sm font-medium text-zinc-400">
                                {t("labelMessage")}
                            </label>
                            <div className="group relative overflow-hidden rounded-2xl">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full resize-none rounded-2xl border border-zinc-700/50 bg-zinc-950/20 px-6 py-4 text-white shadow-inner backdrop-blur-md transition-all placeholder-zinc-600 focus:bg-zinc-900/40 focus:outline-none"
                                    placeholder={t("placeholderMessage")}
                                />
                                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 transition-colors duration-300 group-focus-within:ring-primary/50" />
                            </div>
                            {errors.message && (
                                <p className="ml-2 text-xs text-red-400">{errors.message}</p>
                            )}
                        </div>

                        <div className="mt-4 flex items-center justify-center pt-2">
                            <button
                                disabled={status === "loading"}
                                type="submit"
                                className={`h-12 w-full md:w-auto md:min-w-[200px] px-6 rounded-2xl bg-zinc-100 dark:bg-zinc-900 text-sm font-bold uppercase tracking-widest text-black dark:text-white hover:!bg-primary hover:!text-black transition-all duration-300 ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                {status === "loading" ? t("contactSending") : t("sendMessage")}
                            </button>
                        </div>

                        <p className="text-zinc-500 text-[10px] text-center mt-2">
                            This site is protected by reCAPTCHA and the Google{" "}
                            <a href="https://policies.google.com/privacy" className="text-primary hover:underline">Privacy Policy</a>{" "}
                            and{" "}
                            <a href="https://policies.google.com/terms" className="text-primary hover:underline">Terms of Service</a>{" "}
                            apply.
                        </p>

                        {status === "success" && (
                            <p className="text-primary text-center text-sm font-medium">{t("contactSuccess")}</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-center text-sm font-medium">{t("contactError")}</p>
                        )}
                    </form>
                </GlassCard>
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
