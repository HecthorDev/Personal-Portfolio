import { useMemo } from "react";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";

interface CaseStudy {
    title: string;
    category: string;
    problem: string;
    solution: string;
    goal: string;
    cover: string;
    supportingImages: string[];
    tags: string[];
}

export default function CaseStudies() {
    const { t } = useLanguage();

    const caseStudies = useMemo<CaseStudy[]>(
        () => [
            {
                title: t("rinconcitoDulceTitle"),
                category: t("rinconcitoDulceCategory"),
                problem: t("rinconcitoDulceProblem"),
                solution: t("rinconcitoDulceSolution"),
                goal: t("rinconcitoDulceGoal"),
                cover: "/Img/projects/rinconcito-dulce/post-apertura.jpg",
                supportingImages: [
                    "/Img/projects/rinconcito-dulce/post-pre-apertura.jpg",
                    "/Img/projects/rinconcito-dulce/post-identidad.jpg",
                    "/Img/projects/rinconcito-dulce/post-antojo.jpg",
                ],
                tags: ["Branding", "Social Media", "Launch Campaign", "Content Design"],
            },
            {
                title: t("cindyGlamStudioTitle"),
                category: t("cindyGlamStudioCategory"),
                problem: t("cindyGlamStudioProblem"),
                solution: t("cindyGlamStudioSolution"),
                goal: t("cindyGlamStudioGoal"),
                cover: "/Img/projects/cindy-glam-studio/post-unas.jpg",
                supportingImages: ["/Img/projects/cindy-glam-studio/jelly-spa-promo.jpg"],
                tags: ["Beauty", "Social Media", "Promotion", "Visual Identity"],
            },
            {
                title: t("gmGrowthTitle"),
                category: t("gmGrowthCategory"),
                problem: t("gmGrowthProblem"),
                solution: t("gmGrowthSolution"),
                goal: t("gmGrowthGoal"),
                cover: "/Img/projects/gm-growth/post-publicar-mas.jpg",
                supportingImages: ["/Img/projects/gm-growth/post-auditoria-digital.jpg"],
                tags: ["Growth", "Strategy", "Content", "Education"],
            },
            {
                title: t("bgMultiserviciosTitle"),
                category: t("bgMultiserviciosCategory"),
                problem: t("bgMultiserviciosProblem"),
                solution: t("bgMultiserviciosSolution"),
                goal: t("bgMultiserviciosGoal"),
                cover: "/Img/projects/bg-multiservicios/logo-principal.jpg",
                supportingImages: [],
                tags: ["Branding", "Corporate Identity", "Logo Design"],
            },
        ],
        [t]
    );

    return (
        <section id="case-studies" className="relative bg-black py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-16 lg:px-20">
                <div className="mb-10 space-y-4 text-center sm:mb-14">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        {t("caseStudiesTitle")}
                    </h2>
                    <p className="mx-auto max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                        {t("caseStudiesSubtitle")}
                    </p>
                </div>

                <div className="space-y-6 lg:space-y-8">
                    <GlassCard className="services-card-unified p-0" isInteractive={false}>
                        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                            <div className="grid gap-3 bg-zinc-950/70 p-4 sm:p-5 lg:grid-cols-[1.25fr_0.75fr]">
                                <div className="flex min-h-[420px] items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-3 sm:min-h-[520px]">
                                    <img
                                        src={caseStudies[0].cover}
                                        alt={caseStudies[0].title}
                                        className="max-h-[500px] w-full object-contain"
                                        loading="lazy"
                                        draggable={false}
                                    />
                                </div>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                                    {caseStudies[0].supportingImages.map((image) => (
                                        <div key={image} className="flex min-h-[220px] items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-2 sm:min-h-[190px] lg:min-h-[160px]">
                                            <img
                                                src={image}
                                                alt={caseStudies[0].title}
                                                className="max-h-[210px] w-full object-contain sm:max-h-[190px] lg:max-h-[165px]"
                                                loading="lazy"
                                                draggable={false}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary/85 sm:text-xs">
                                    {caseStudies[0].category}
                                </p>
                                <h3 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                                    {caseStudies[0].title}
                                </h3>
                                <div className="space-y-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                                    <p><span className="font-bold text-zinc-200">{t("caseProblemLabel")}:</span> {caseStudies[0].problem}</p>
                                    <p><span className="font-bold text-zinc-200">{t("caseSolutionLabel")}:</span> {caseStudies[0].solution}</p>
                                    <p><span className="font-bold text-zinc-200">{t("caseGoalLabel")}:</span> {caseStudies[0].goal}</p>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {caseStudies[0].tags.map((tag) => (
                                        <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-7">
                        {caseStudies.slice(1).map((caseStudy) => (
                            <GlassCard key={caseStudy.title} className="services-card-unified h-full p-0" isInteractive={false}>
                                <div className="flex h-full flex-col">
                                    <div className="space-y-3 bg-zinc-950/70 p-4">
                                        <div className="flex min-h-[330px] items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-3">
                                            <img
                                                src={caseStudy.cover}
                                                alt={caseStudy.title}
                                                className="max-h-[300px] w-full object-contain"
                                                loading="lazy"
                                                draggable={false}
                                            />
                                        </div>
                                        {caseStudy.supportingImages.length > 0 && (
                                            <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-3">
                                                <img
                                                    src={caseStudy.supportingImages[0]}
                                                    alt={caseStudy.title}
                                                    className="max-h-[205px] w-full object-contain"
                                                    loading="lazy"
                                                    draggable={false}
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary/85">
                                            {caseStudy.category}
                                        </p>
                                        <h3 className="mb-4 text-2xl font-bold leading-tight text-white">
                                            {caseStudy.title}
                                        </h3>
                                        <div className="space-y-2 text-sm leading-relaxed text-zinc-400">
                                            <p><span className="font-bold text-zinc-200">{t("caseProblemLabel")}:</span> {caseStudy.problem}</p>
                                            <p><span className="font-bold text-zinc-200">{t("caseSolutionLabel")}:</span> {caseStudy.solution}</p>
                                            <p><span className="font-bold text-zinc-200">{t("caseGoalLabel")}:</span> {caseStudy.goal}</p>
                                        </div>
                                        <div className="mt-auto flex flex-wrap gap-2 pt-5">
                                            {caseStudy.tags.slice(0, 3).map((tag) => (
                                                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
