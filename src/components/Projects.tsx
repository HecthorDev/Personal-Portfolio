import { animate, motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";

const AUTO_SCROLL_SPEED = 55;
const MANUAL_STEP = 340;

function wrapLoop(value: number, min: number, max: number) {
    const range = max - min;
    if (range === 0) return min;
    const wrapped = ((((value - min) % range) + range) % range) + min;
    return wrapped;
}

export default function Projects() {
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const firstSetRef = useRef<HTMLDivElement | null>(null);
    const x = useMotionValue(0);
    const [loopWidth, setLoopWidth] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const { t } = useLanguage();

    const projects = useMemo(
        () => [
            {
                title: t("project1Title"),
                category: t("project1Category"),
                description: t("project1Description"),
                image: "/Img/project1.png",
                tags: ["HTML", "CSS", "JS"],
                link: "https://hecthordev.github.io/Secret-Number-Alura-LATAM/",
            },
            {
                title: t("project2Title"),
                category: t("project2Category"),
                description: t("project2Description"),
                image: "/Img/project2.png",
                tags: ["React", "Tailwind", "Framer"],
                link: "https://portfolio-alura-eight-iota.vercel.app/",
            },
            {
                title: t("project3Title"),
                category: t("project3Category"),
                description: t("project3Description"),
                image: "/Img/project3.png",
                tags: ["JS", "Algorithm", "UI"],
            },
            {
                title: t("project4Title"),
                category: t("project4Category"),
                description: t("project4Description"),
                image: "/Img/Project4.png",
                tags: ["React", "CSS3", "UUID"],
                link: "https://org-930f7xkpq-hector-garcias-projects.vercel.app/",
            },
        ],
        [t]
    );

    const duplicatedProjects = useMemo(() => [projects, projects], [projects]);

    useEffect(() => {
        const measure = () => {
            const width = firstSetRef.current?.scrollWidth ?? 0;
            setLoopWidth(width);
            if (width > 0) x.set(wrapLoop(x.get(), -width, 0));
        };

        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, [x, projects.length]);

    useAnimationFrame((_, delta) => {
        if (isPaused || loopWidth === 0) return;
        const nextX = x.get() - (AUTO_SCROLL_SPEED * delta) / 1000;
        x.set(wrapLoop(nextX, -loopWidth, 0));
    });

    const shiftCarousel = (direction: "next" | "prev") => {
        if (loopWidth === 0) return;
        const step = direction === "next" ? -MANUAL_STEP : MANUAL_STEP;
        const targetX = wrapLoop(x.get() + step, -loopWidth, 0);
        setIsPaused(true);
        animate(x, targetX, { type: "spring", stiffness: 170, damping: 26, mass: 0.4 });
    };

    const handleCardClick = (event: MouseEvent<HTMLDivElement>) => {
        if (!viewportRef.current) return;
        const cardRect = event.currentTarget.getBoundingClientRect();
        const viewportRect = viewportRef.current.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const viewportCenter = viewportRect.left + viewportRect.width / 2;
        const offset = cardCenter - viewportCenter;

        if (loopWidth === 0 || offset === 0) return;
        const targetX = wrapLoop(x.get() - offset, -loopWidth, 0);
        setIsPaused(true);
        animate(x, targetX, { type: "spring", stiffness: 170, damping: 26, mass: 0.4 });
    };

    return (
        <section id="projects" className="relative bg-black py-20 sm:py-24 lg:flex lg:min-h-screen lg:items-center lg:py-0">
            <div className="w-full">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-16 lg:px-20">
                    <div className="mb-8 space-y-4 text-center sm:mb-10">
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                            {t("projectsPrefix")} <span className="text-primary">{t("projectsHighlight")}</span>
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mx-auto max-w-2xl text-zinc-400">
                            {t("projectsIntro")}
                        </motion.p>
                    </div>
                </div>

                <div ref={viewportRef} className="relative w-full overflow-x-hidden overflow-y-visible" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                    <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-black to-transparent sm:w-24" />
                    <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-black to-transparent sm:w-24" />

                    <motion.div style={{ x }} className="flex w-max px-5 py-6 sm:px-8 md:px-12 lg:px-16">
                        {duplicatedProjects.map((group, groupIndex) => (
                            <div key={groupIndex} ref={groupIndex === 0 ? firstSetRef : undefined} className="flex gap-5 pr-5 sm:gap-7 sm:pr-7">
                                {group.map((project, index) => (
                                    <div key={`${groupIndex}-${project.title}-${index}`} className="w-[80vw] cursor-pointer select-none sm:w-[350px] lg:w-[380px]" onClick={handleCardClick}>
                                        <GlassCard className="flex h-full flex-col overflow-hidden p-0 transition-transform duration-300 hover:scale-[1.01]">
                                            <div className="group relative h-56 overflow-hidden bg-black/50 sm:h-64">
                                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                                <div className="absolute inset-0 z-10 bg-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                                <div className="relative flex h-full w-full items-center justify-center text-zinc-700">
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                                        draggable={false}
                                                        onError={(event) => {
                                                            event.currentTarget.style.display = "none";
                                                            event.currentTarget.nextElementSibling?.classList.remove("hidden");
                                                        }}
                                                    />
                                                    <div className="hidden h-full w-full items-center justify-center bg-zinc-900">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                                                    </div>
                                                </div>
                                                <div className="absolute left-4 top-4 z-20">
                                                    <span className="rounded-full border border-primary/20 bg-black/60 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md">{project.tags[0]}</span>
                                                </div>
                                            </div>

                                            <div className="flex flex-1 flex-col p-6 sm:p-8">
                                                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-primary/80">{project.category}</h4>
                                                <h3 className="mb-4 text-lg font-bold leading-tight text-white sm:text-xl">{project.title}</h3>
                                                <p className="flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
                                                <div className="mt-auto flex justify-center pt-6">
                                                    <button
                                                        disabled={!project.link}
                                                        className={`h-12 w-full max-w-[230px] px-6 sm:px-8 flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase tracking-widest rounded-[20px] bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white transition-all duration-300 ${!project.link ? "cursor-not-allowed opacity-50" : "hover:!bg-primary hover:!text-black"}`}
                                                        onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                                                            event.stopPropagation();
                                                            if (project.link) window.open(project.link, "_blank", "noopener,noreferrer");
                                                        }}
                                                    >
                                                        <span className="flex items-center gap-2">
                                                            {project.link ? t("viewProject") : t("comingSoon")}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="mx-auto mt-4 max-w-7xl px-5 sm:px-8 md:px-16 lg:px-20">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {isPaused ? t("paused") : t("autoScrollActive")}
                    </motion.h2>
                </div>
            </div>
        </section>
    );
}
