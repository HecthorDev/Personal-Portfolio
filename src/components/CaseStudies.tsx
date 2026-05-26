import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";

interface CaseStudy {
    title: string;
    category: string;
    problem: string;
    solution: string;
    goal: string;
    images: string[];
    tags: string[];
}

interface LightboxImage {
    src: string;
    title: string;
}

export default function CaseStudies() {
    const { t } = useLanguage();
    const [activeImages, setActiveImages] = useState<Record<string, string>>({});
    const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

    const caseStudies = useMemo<CaseStudy[]>(
        () => [
            {
                title: t("rinconcitoDulceTitle"),
                category: t("rinconcitoDulceCategory"),
                problem: t("rinconcitoDulceProblem"),
                solution: t("rinconcitoDulceSolution"),
                goal: t("rinconcitoDulceGoal"),
                images: [
                    "/Img/projects/rinconcito-dulce/post-apertura.jpg",
                    "/Img/projects/rinconcito-dulce/post-pre-apertura.jpg",
                    "/Img/projects/rinconcito-dulce/post-identidad.jpg",
                    "/Img/projects/rinconcito-dulce/post-posicionamiento.jpg",
                    "/Img/projects/rinconcito-dulce/post-antojo.jpg",
                    "/Img/projects/rinconcito-dulce/post-misterio.jpg",
                    "/Img/projects/rinconcito-dulce/post-emocion.jpg",
                    "/Img/projects/rinconcito-dulce/post-psicologico.jpg",
                    "/Img/projects/rinconcito-dulce/post-intriga.jpg",
                    "/Img/projects/rinconcito-dulce/logo-principal.png",
                    "/Img/projects/rinconcito-dulce/logo-badge.jpg",
                    "/Img/projects/rinconcito-dulce/logo-minimal.jpg",
                ],
                tags: ["Branding", "Social Media", "Launch Campaign", "Content Design"],
            },
            {
                title: t("se7enGroupTitle"),
                category: t("se7enGroupCategory"),
                problem: t("se7enGroupProblem"),
                solution: t("se7enGroupSolution"),
                goal: t("se7enGroupGoal"),
                images: [
                    "/Img/projects/se7en-group/post-quienes-somos.jpg",
                    "/Img/projects/se7en-group/post-seguridad-profesional.jpg",
                    "/Img/projects/se7en-group/post-cobertura-operativa.jpg",
                    "/Img/projects/se7en-group/post-supervision-campo.jpg",
                    "/Img/projects/se7en-group/post-claves-seguridad-privada.jpg",
                    "/Img/projects/se7en-group/post-capacitacion-personal.jpg",
                    "/Img/projects/se7en-group/post-nuestro-equipo.jpg",
                    "/Img/projects/se7en-group/post-errores-contratar-seguridad.jpg",
                    "/Img/projects/se7en-group/post-jornada-contratacion.jpg",
                    "/Img/projects/se7en-group/post-estamos-contratando.jpg",
                ],
                tags: ["B2B", "Security", "Visual Identity", "Social Media", "Corporate Presence"],
            },
            {
                title: t("gmGrowthTitle"),
                category: t("gmGrowthCategory"),
                problem: t("gmGrowthProblem"),
                solution: t("gmGrowthSolution"),
                goal: t("gmGrowthGoal"),
                images: [
                    "/Img/projects/gm-growth/post-publicar-mas.jpg",
                    "/Img/projects/gm-growth/post-auditoria-digital.jpg",
                ],
                tags: ["Growth", "Strategy", "Content", "Education"],
            },
            {
                title: t("bgMultiserviciosTitle"),
                category: t("bgMultiserviciosCategory"),
                problem: t("bgMultiserviciosProblem"),
                solution: t("bgMultiserviciosSolution"),
                goal: t("bgMultiserviciosGoal"),
                images: ["/Img/projects/bg-multiservicios/logo-principal.jpg"],
                tags: ["Branding", "Corporate Identity", "Logo Design"],
            },
        ],
        [t]
    );

    useEffect(() => {
        if (!lightboxImage) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setLightboxImage(null);
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [lightboxImage]);

    const getActiveImage = (caseStudy: CaseStudy) => activeImages[caseStudy.title] ?? caseStudy.images[0];

    return (
        <section id="case-studies" className="relative scroll-mt-16 bg-black py-20 !min-h-0 !items-start sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-16 lg:px-20">
                <div className="mb-10 space-y-4 text-center sm:mb-14">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                        {t("caseStudiesTitle")}
                    </h2>
                    <p className="mx-auto max-w-3xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                        {t("caseStudiesSubtitle")}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
                    {caseStudies.map((caseStudy) => {
                        const activeImage = getActiveImage(caseStudy);
                        return (
                            <GlassCard key={caseStudy.title} className="services-card-unified h-full p-0" isInteractive={false}>
                                <div className="flex h-full flex-col">
                                    <div className="bg-zinc-950/70 p-4 sm:p-5">
                                        <button
                                            type="button"
                                            onClick={() => setLightboxImage({ src: activeImage, title: caseStudy.title })}
                                            className="group/image flex h-[360px] w-full items-center justify-center rounded-2xl border border-white/10 bg-black/40 p-4 transition-colors hover:border-primary/45 sm:h-[430px]"
                                            aria-label={`${t("caseOpenImageLabel")} ${caseStudy.title}`}
                                        >
                                            <img
                                                src={activeImage}
                                                alt={caseStudy.title}
                                                className="max-h-full w-full object-contain transition-transform duration-500 group-hover/image:scale-[1.025]"
                                                loading="lazy"
                                                draggable={false}
                                            />
                                        </button>

                                        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                                            {caseStudy.images.map((image) => {
                                                const isActive = image === activeImage;
                                                return (
                                                    <button
                                                        key={image}
                                                        type="button"
                                                        onClick={() => setActiveImages((prev) => ({ ...prev, [caseStudy.title]: image }))}
                                                        onDoubleClick={() => setLightboxImage({ src: image, title: caseStudy.title })}
                                                        className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-xl border bg-black/40 p-2 transition sm:h-28 sm:w-28 ${isActive ? "border-primary/70" : "border-white/10 hover:border-primary/45"}`}
                                                        aria-label={`${t("caseSelectImageLabel")} ${caseStudy.title}`}
                                                    >
                                                        <img
                                                            src={image}
                                                            alt={caseStudy.title}
                                                            className="h-full w-full object-contain"
                                                            loading="lazy"
                                                            draggable={false}
                                                        />
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                                        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-primary/85">
                                            {caseStudy.category}
                                        </p>
                                        <h3 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                                            {caseStudy.title}
                                        </h3>
                                        <div className="space-y-2 text-sm leading-relaxed text-zinc-400">
                                            <p><span className="font-bold text-zinc-200">{t("caseProblemLabel")}:</span> {caseStudy.problem}</p>
                                            <p><span className="font-bold text-zinc-200">{t("caseSolutionLabel")}:</span> {caseStudy.solution}</p>
                                            <p><span className="font-bold text-zinc-200">{t("caseGoalLabel")}:</span> {caseStudy.goal}</p>
                                        </div>
                                        <div className="mt-auto flex flex-wrap gap-2 pt-5">
                                            {caseStudy.tags.slice(0, 4).map((tag) => (
                                                <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        );
                    })}
                </div>
            </div>

            {lightboxImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
                    role="dialog"
                    aria-modal="true"
                    aria-label={lightboxImage.title}
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        type="button"
                        aria-label={t("caseCloseImageLabel")}
                        onClick={() => setLightboxImage(null)}
                        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white transition hover:border-primary hover:text-primary"
                    >
                        <span className="text-2xl leading-none">×</span>
                    </button>
                    <img
                        src={lightboxImage.src}
                        alt={lightboxImage.title}
                        className="max-h-[90vh] max-w-[94vw] object-contain"
                        draggable={false}
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
