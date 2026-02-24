import { useMemo } from "react";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";
import TiltedCard from "./ui/TiltedCard";

interface ServiceCard {
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    iconSrc: string;
    accent: string;
}

export default function Services() {
    const { t } = useLanguage();

    const services = useMemo<ServiceCard[]>(
        () => [
            {
                title: t("serviceUiTitle"),
                subtitle: t("serviceUiSubtitle"),
                description: t("serviceUiDescription"),
                badge: t("serviceUiBadge"),
                iconSrc: "https://img.icons8.com/fluency/240/web-design.png",
                accent: "#00E676",
            },
            {
                title: t("serviceFullStackTitle"),
                subtitle: t("serviceFullStackSubtitle"),
                description: t("serviceFullStackDescription"),
                badge: t("serviceFullStackBadge"),
                iconSrc: "https://img.icons8.com/fluency/240/source-code.png",
                accent: "#6EE7B7",
            },
            {
                title: t("serviceImmersiveTitle"),
                subtitle: t("serviceImmersiveSubtitle"),
                description: t("serviceImmersiveDescription"),
                badge: t("serviceImmersiveBadge"),
                iconSrc: "https://img.icons8.com/fluency/240/virtual-reality.png",
                accent: "#22D3EE",
            },
            {
                title: t("serviceMobileTitle"),
                subtitle: t("serviceMobileSubtitle"),
                description: t("serviceMobileDescription"),
                badge: t("serviceMobileBadge"),
                iconSrc: "https://img.icons8.com/fluency/240/smartphone-tablet.png",
                accent: "#60A5FA",
            },
        ],
        [t]
    );

    return (
        <section id="services" className="relative bg-black py-20 sm:py-24">
            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-16 lg:px-20">
                <div className="mb-10 space-y-4 text-center sm:mb-14">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        {t("servicesPrefix")} <span className="text-primary">{t("servicesHighlight")}</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-base text-zinc-400 sm:text-lg">{t("servicesIntro")}</p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:gap-7 md:grid-cols-2">
                    {services.map((service) => (
                        <div key={service.title} className="h-full">
                            <TiltedCard containerClassName="h-full" className="h-full" rotateAmplitude={10} scaleOnHover={1.02}>
                                <GlassCard className="services-card-unified h-full overflow-hidden p-0">
                                    <div className="flex items-center justify-between gap-3 px-5 pt-4 sm:px-6 sm:pt-5">
                                        <span className="rounded-full border border-primary/35 bg-black/35 px-2.5 py-1 text-[11px] font-bold text-primary">{service.badge}</span>
                                        <img
                                            src={service.iconSrc}
                                            alt=""
                                            aria-hidden="true"
                                            loading="lazy"
                                            draggable={false}
                                            onError={(event) => {
                                                event.currentTarget.src = "https://img.icons8.com/fluency/240/code.png";
                                            }}
                                            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                                            style={{ filter: `drop-shadow(0 8px 20px ${service.accent}44)` }}
                                        />
                                    </div>

                                    <div className="px-5 pb-5 pt-3 sm:px-6 sm:pb-6 sm:pt-4">
                                        <h4 className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary/85 sm:text-xs">{service.subtitle}</h4>
                                        <h3 className="mb-3 text-xl font-bold leading-tight text-white sm:text-[1.7rem]">{service.title}</h3>
                                        <p className="text-sm leading-relaxed text-zinc-400 sm:text-[0.96rem]">{service.description}</p>
                                    </div>
                                </GlassCard>
                            </TiltedCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
