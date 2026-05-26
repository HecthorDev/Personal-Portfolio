import { useMemo } from "react";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";

export default function Process() {
    const { t } = useLanguage();

    const steps = useMemo(
        () => [
            {
                title: t("processStepDiagnosis"),
                description: t("processStepDiagnosisDescription"),
            },
            {
                title: t("processStepStrategy"),
                description: t("processStepStrategyDescription"),
            },
            {
                title: t("processStepBuild"),
                description: t("processStepBuildDescription"),
            },
            {
                title: t("processStepLaunch"),
                description: t("processStepLaunchDescription"),
            },
            {
                title: t("processStepOptimize"),
                description: t("processStepOptimizeDescription"),
            },
        ],
        [t]
    );

    return (
        <section id="process" className="relative scroll-mt-16 bg-black py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-16 lg:px-20">
                <div className="mb-10 space-y-4 text-center sm:mb-14">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        {t("processTitle")}
                    </h2>
                    <p className="mx-auto max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                        {t("processSubtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {steps.map((step, index) => (
                        <GlassCard key={step.title} className="services-card-unified h-full p-5" isInteractive={false}>
                            <div className="flex h-full flex-col gap-3">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                    {(index + 1).toString().padStart(2, "0")}
                                </span>
                                <h3 className="text-lg font-bold leading-tight text-white">
                                    {step.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-zinc-400">
                                    {step.description}
                                </p>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
