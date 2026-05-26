import { useMemo } from "react";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";
import TiltedCard from "./ui/TiltedCard";

interface ProcessStep {
    title: string;
    description: string;
    iconSrc: string;
}

export default function Process() {
    const { t } = useLanguage();

    const steps = useMemo<ProcessStep[]>(
        () => [
            {
                title: t("processStepDiagnosis"),
                description: t("processStepDiagnosisDescription"),
                iconSrc: "https://img.icons8.com/fluency/240/search.png",
            },
            {
                title: t("processStepStrategy"),
                description: t("processStepStrategyDescription"),
                iconSrc: "https://img.icons8.com/fluency/240/goal.png",
            },
            {
                title: t("processStepBuild"),
                description: t("processStepBuildDescription"),
                iconSrc: "https://img.icons8.com/fluency/240/web-design.png",
            },
            {
                title: t("processStepLaunch"),
                description: t("processStepLaunchDescription"),
                iconSrc: "https://img.icons8.com/fluency/240/rocket.png",
            },
            {
                title: t("processStepOptimize"),
                description: t("processStepOptimizeDescription"),
                iconSrc: "https://img.icons8.com/fluency/240/combo-chart.png",
            },
        ],
        [t]
    );

    return (
        <section id="process" className="relative scroll-mt-16 bg-black py-20 sm:py-24">
            <div className="mx-auto w-full max-w-[94rem] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
                <div className="mb-10 space-y-4 text-center sm:mb-14">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        {t("processTitle")}
                    </h2>
                    <p className="mx-auto max-w-none text-base leading-relaxed text-zinc-400 sm:text-lg xl:whitespace-nowrap">
                        {t("processSubtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                    {steps.map((step, index) => (
                        <div key={step.title} className="h-full">
                            <TiltedCard containerClassName="h-full" className="h-full" rotateAmplitude={10} scaleOnHover={1.02}>
                                <GlassCard className="services-card-unified h-full min-h-[260px] p-5 sm:p-6">
                                    <div className="flex h-full flex-col">
                                        <div className="mb-5 flex items-start justify-between gap-4">
                                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                                                {(index + 1).toString().padStart(2, "0")}
                                            </span>
                                            <img
                                                src={step.iconSrc}
                                                alt=""
                                                aria-hidden="true"
                                                loading="lazy"
                                                draggable={false}
                                                onError={(event) => {
                                                    event.currentTarget.src = "https://img.icons8.com/fluency/240/task.png";
                                                }}
                                                className="h-12 w-12 object-contain sm:h-14 sm:w-14"
                                                style={{ filter: "drop-shadow(0 8px 20px rgba(0, 230, 118, 0.25))" }}
                                            />
                                        </div>
                                        <h3 className="mb-3 text-xl font-bold leading-tight text-white lg:text-[1.15rem] xl:text-xl">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-zinc-400 sm:text-[0.95rem] lg:text-sm xl:text-[0.95rem]">
                                            {step.description}
                                        </p>
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
