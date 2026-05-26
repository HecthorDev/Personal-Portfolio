import { animate, motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../lib/i18n/useLanguage";
import GlassCard from "./ui/GlassCard";

const AUTO_SCROLL_SPEED = 55;
const MIN_MANUAL_STEP = 220;
const MAX_MANUAL_STEP = 420;
const MANUAL_STEP_FACTOR = 0.72;

function wrapLoop(value: number, min: number, max: number) {
    const range = max - min;
    if (range === 0) return min;
    return ((((value - min) % range) + range) % range) + min;
}

export default function Projects() {
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const firstSetRef = useRef<HTMLDivElement | null>(null);
    const loopWidthRef = useRef(0);
    const animationRef = useRef<ReturnType<typeof animate> | null>(null);
    const suppressClickRef = useRef(false);
    const dragRef = useRef<{
        active: boolean;
        pointerType: "mouse" | "touch" | null;
        startX: number;
        lastX: number;
    }>({ active: false, pointerType: null, startX: 0, lastX: 0 });

    const x = useMotionValue(0);
    const [loopWidth, setLoopWidth] = useState(0);
    const [isHoverPaused, setIsHoverPaused] = useState(false);
    const [isInteractionPaused, setIsInteractionPaused] = useState(false);
    const [isManualAnimating, setIsManualAnimating] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const { t } = useLanguage();

    const isPaused = isHoverPaused || isInteractionPaused || isManualAnimating;

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
                link: "https://hecthordev.github.io/Text-Encryptor/",
            },
            {
                title: t("project4Title"),
                category: t("project4Category"),
                description: t("project4Description"),
                image: "/Img/Project4.png",
                tags: ["React", "CSS3", "UUID"],
                link: "https://org-rho-seven.vercel.app/",
            },
            {
                title: t("project5Title"),
                category: t("project5Category"),
                description: t("project5Description"),
                image: "/Img/Project5.png",
                tags: ["React", "Styled", "Vite"],
                link: "https://challege-aluraflix.vercel.app/",
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

    useEffect(() => { loopWidthRef.current = loopWidth; }, [loopWidth]);
    useEffect(() => { return () => animationRef.current?.stop(); }, []);

    useAnimationFrame((_, delta) => {
        if (isPaused || loopWidth === 0 || isDragging) return;
        const nextX = x.get() - (AUTO_SCROLL_SPEED * delta) / 1000;
        x.set(wrapLoop(nextX, -loopWidth, 0));
    });

    const stopManualAnimation = () => {
        if (!animationRef.current) return;
        animationRef.current.stop();
        animationRef.current = null;
        setIsManualAnimating(false);
    };

    const getManualStep = () => {
        const viewportWidth = viewportRef.current?.clientWidth ?? 0;
        if (viewportWidth === 0) return MIN_MANUAL_STEP;
        return Math.max(MIN_MANUAL_STEP, Math.min(MAX_MANUAL_STEP, viewportWidth * MANUAL_STEP_FACTOR));
    };

    const shiftCarousel = (direction: "next" | "prev") => {
        const width = loopWidthRef.current;
        if (width === 0) return;
        stopManualAnimation();
        const step = getManualStep();
        const targetX = wrapLoop(x.get() + (direction === "next" ? -step : step), -width, 0);
        setIsManualAnimating(true);
        const controls = animate(x, targetX, { type: "spring", stiffness: 220, damping: 32, mass: 0.35 });
        animationRef.current = controls;
        void controls.then(() => {
            if (animationRef.current !== controls) return;
            animationRef.current = null;
            setIsManualAnimating(false);
        });
    };

    const beginDrag = (clientX: number, pointerType: "mouse" | "touch") => {
        const width = loopWidthRef.current;
        if (width === 0) return;
        stopManualAnimation();
        dragRef.current = { active: true, pointerType, startX: clientX, lastX: clientX };
        setIsDragging(true);
        setIsInteractionPaused(true);
    };

    const continueDrag = (clientX: number) => {
        if (!dragRef.current.active) return;
        const width = loopWidthRef.current;
        if (width === 0) return;
        const deltaX = clientX - dragRef.current.lastX;
        dragRef.current.lastX = clientX;
        if (Math.abs(clientX - dragRef.current.startX) > 6) suppressClickRef.current = true;
        if (deltaX === 0) return;
        x.set(wrapLoop(x.get() + deltaX, -width, 0));
    };

    const endDrag = () => {
        if (!dragRef.current.active) return;
        const width = loopWidthRef.current;
        dragRef.current.active = false;
        dragRef.current.pointerType = null;
        setIsDragging(false);
        setIsInteractionPaused(false);
        if (width > 0) x.set(wrapLoop(x.get(), -width, 0));
        if (suppressClickRef.current) {
            window.setTimeout(() => { suppressClickRef.current = false; }, 0);
        }
    };

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!dragRef.current.active || dragRef.current.pointerType !== "mouse") return;
            continueDrag(event.clientX);
        };
        const handleMouseUp = () => {
            if (!dragRef.current.active || dragRef.current.pointerType !== "mouse") return;
            endDrag();
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    return (
        <section id="projects" className="relative bg-black py-20 sm:py-24 lg:flex lg:min-h-screen lg:items-center lg:py-0">
            <div className="w-full">
                <div className="mx-auto max-w-7xl px-5 sm:px-8 md:px-16 lg:px-20 text-white">
                    <div className="mb-8 space-y-4 text-center sm:mb-10">
                        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                            {t("projectsPrefix")} <span className="text-primary">{t("projectsHighlight")}</span>
                        </h2>
                        {/* Hint text intentionally removed — the UX speaks for itself */}
                    </div>
                </div>

                <div
                    ref={viewportRef}
                    className={`relative w-full overflow-x-hidden overflow-y-visible ${isDragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
                    style={{ touchAction: "pan-y" }}
                    onMouseEnter={() => setIsHoverPaused(true)}
                    onMouseLeave={() => setIsHoverPaused(false)}
                    onMouseDown={(event) => {
                        if (event.button !== 0) return;
                        const target = event.target as HTMLElement;
                        if (target.closest("a,button")) return;
                        beginDrag(event.clientX, "mouse");
                    }}
                    onTouchStart={(event) => {
                        setIsInteractionPaused(true);
                        const target = event.target as HTMLElement;
                        if (target.closest("a,button")) return;
                        const touch = event.touches[0];
                        if (!touch) return;
                        beginDrag(touch.clientX, "touch");
                    }}
                    onTouchMove={(event) => {
                        if (!dragRef.current.active || dragRef.current.pointerType !== "touch") return;
                        const touch = event.touches[0];
                        if (!touch) return;
                        continueDrag(touch.clientX);
                        event.preventDefault();
                    }}
                    onTouchEnd={() => {
                        if (dragRef.current.active && dragRef.current.pointerType === "touch") { endDrag(); return; }
                        setIsInteractionPaused(false);
                    }}
                    onTouchCancel={() => {
                        if (dragRef.current.active && dragRef.current.pointerType === "touch") { endDrag(); return; }
                        setIsInteractionPaused(false);
                    }}
                    onClickCapture={(event) => {
                        if (!suppressClickRef.current) return;
                        event.preventDefault();
                        event.stopPropagation();
                        suppressClickRef.current = false;
                    }}
                >
                    <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-16 bg-gradient-to-r from-black to-transparent sm:w-24" />
                    <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-16 bg-gradient-to-l from-black to-transparent sm:w-24" />

                    <button
                        type="button"
                        aria-label="Previous project"
                        onClick={() => shiftCarousel("prev")}
                        className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/70 p-2 text-white backdrop-blur-sm transition hover:border-primary/60 hover:text-primary sm:left-4 sm:p-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                    </button>
                    <button
                        type="button"
                        aria-label="Next project"
                        onClick={() => shiftCarousel("next")}
                        className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-black/70 p-2 text-white backdrop-blur-sm transition hover:border-primary/60 hover:text-primary sm:right-4 sm:p-3"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </button>

                    <motion.div style={{ x }} className="flex w-max px-5 py-6 sm:px-8 md:px-12 lg:px-16">
                        {duplicatedProjects.map((group, groupIndex) => (
                            <div key={groupIndex} ref={groupIndex === 0 ? firstSetRef : undefined} className="flex gap-5 pr-5 sm:gap-7 sm:pr-7">
                                {group.map((project, index) => (
                                    <div key={`${groupIndex}-${project.title}-${index}`} className="w-[80vw] sm:w-[350px] lg:w-[380px]">
                                        <GlassCard className="flex h-full flex-col overflow-hidden p-0 transition-transform duration-300 hover:scale-[1.01]">
                                            <div className="group relative h-48 overflow-hidden bg-black/50 sm:h-56">
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20">
                                                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="absolute left-4 top-4 z-20">
                                                    <span className="rounded-full border border-primary/20 bg-black/60 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md">{project.tags[0]}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-1 flex-col p-5 sm:p-6">
                                                <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-primary/80">{project.category}</h4>
                                                <h3 className="mb-3 text-lg font-bold leading-tight text-white sm:text-xl">{project.title}</h3>
                                                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-zinc-400" style={{ minHeight: "3.75rem" }}>{project.description}</p>
                                                <div className="mt-auto flex justify-center border-t border-white/5 pt-5">
                                                    <a
                                                        href={project.link || "#"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`h-11 w-full max-w-[210px] px-6 flex items-center justify-center whitespace-nowrap text-sm font-bold uppercase tracking-widest rounded-[20px] bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white transition-all duration-300 ${!project.link ? "cursor-not-allowed opacity-50" : "hover:!bg-primary hover:!text-black"}`}
                                                        onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                                                            if (!project.link) { event.preventDefault(); return; }
                                                            event.stopPropagation();
                                                        }}
                                                    >
                                                        <span className="flex items-center gap-2">
                                                            {project.link ? t("viewProject") : t("comingSoon")}
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                                                            </svg>
                                                        </span>
                                                    </a>
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
                    <h2 className="text-center text-xs uppercase tracking-[0.2em] text-zinc-500">
                        {isPaused ? t("paused") : t("autoScrollActive")}
                    </h2>
                </div>
            </div>
        </section>
    );
}
