import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useRef, useState } from "react";

export interface StaggeredMenuItem {
    label: string;
    ariaLabel: string;
    link: string;
}

export interface StaggeredMenuSocialItem {
    label: string;
    link: string;
}

export interface StaggeredMenuProps {
    position?: "left" | "right";
    colors?: string[];
    items?: StaggeredMenuItem[];
    socialItems?: StaggeredMenuSocialItem[];
    displaySocials?: boolean;
    displayItemNumbering?: boolean;
    className?: string;
    menuButtonColor?: string;
    openMenuButtonColor?: string;
    accentColor?: string;
    isFixed?: boolean;
    changeMenuColorOnOpen?: boolean;
    closeOnClickAway?: boolean;
    openLabel?: string;
    closeLabel?: string;
    socialsLabel?: string;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
}

const panelEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const listVariants = {
    closed: {},
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.12,
        },
    },
};

const itemVariants = {
    closed: { opacity: 0, y: 28, rotate: 1.5 },
    open: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: {
            duration: 0.38,
            ease: panelEase,
        },
    },
};

function isLightColor(hexColor: string): boolean {
    const value = hexColor.trim().toLowerCase();
    if (value === "#fff" || value === "#ffffff" || value === "white") {
        return true;
    }

    if (!value.startsWith("#")) {
        return false;
    }

    let hex = value.slice(1);
    if (hex.length === 3) {
        hex = hex
            .split("")
            .map((char) => `${char}${char}`)
            .join("");
    }

    if (hex.length !== 6) {
        return false;
    }

    const r = Number.parseInt(hex.slice(0, 2), 16);
    const g = Number.parseInt(hex.slice(2, 4), 16);
    const b = Number.parseInt(hex.slice(4, 6), 16);
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    return luminance > 0.65;
}

export default function StaggeredMenu({
    position = "right",
    colors = ["#1A1A1A", "#121212"],
    items = [],
    socialItems = [],
    displaySocials = true,
    displayItemNumbering = true,
    className,
    menuButtonColor = "#ffffff",
    openMenuButtonColor = "#ffffff",
    accentColor = "#00E676",
    isFixed = true,
    changeMenuColorOnOpen = true,
    closeOnClickAway = true,
    openLabel = "Menu +",
    closeLabel = "Close X",
    socialsLabel = "Socials",
    onMenuOpen,
    onMenuClose,
}: StaggeredMenuProps) {
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const panelTextColor = useMemo(() => (isLightColor(colors[0] ?? "") ? "#111111" : "#FFFFFF"), [colors]);
    const panelBg = colors[0] ?? "#121212";
    const preLayerBg = colors[1] ?? "#1A1A1A";

    useEffect(() => {
        if (open) {
            onMenuOpen?.();
        } else {
            onMenuClose?.();
        }
    }, [open, onMenuOpen, onMenuClose]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024 && open) {
                setOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [open]);

    useEffect(() => {
        if (!closeOnClickAway || !open) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (!panelRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [closeOnClickAway, open]);

    const buttonColor = open && changeMenuColorOnOpen ? openMenuButtonColor : menuButtonColor;

    return (
        <div
            className={`${className ?? ""} pointer-events-auto`}
            style={{ ["--sm-accent" as string]: accentColor } as CSSProperties}
        >
            <button
                ref={buttonRef}
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? closeLabel : openLabel}
                aria-expanded={open}
                className="inline-flex h-9 appearance-none items-center rounded-full border-0 bg-transparent px-1.5 text-sm font-medium tracking-[0.01em] transition-colors hover:!text-[var(--sm-accent)] focus-visible:outline-none"
                style={{ color: buttonColor }}
            >
                <span>{openLabel}</span>
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`${isFixed ? "fixed" : "absolute"} inset-0 z-[70] bg-black/45 backdrop-blur-[2px]`}
                        />

                        <motion.div
                            initial={{ x: position === "right" ? "100%" : "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: position === "right" ? "100%" : "-100%" }}
                            transition={{ duration: 0.45, ease: panelEase }}
                            className={`${isFixed ? "fixed" : "absolute"} top-0 ${position}-0 z-[71] h-screen w-full sm:w-[min(520px,92vw)]`}
                        >
                            <motion.div
                                initial={{ x: position === "right" ? "100%" : "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: position === "right" ? "100%" : "-100%" }}
                                transition={{ duration: 0.32, ease: panelEase }}
                                className="absolute inset-0"
                                style={{ background: preLayerBg }}
                            />

                            <div
                                ref={panelRef}
                                className="relative z-10 h-full w-full overflow-y-auto px-6 pb-8 pt-6 backdrop-blur-2xl sm:px-8 sm:pt-8"
                                style={{ background: panelBg, color: panelTextColor }}
                            >
                                <div className="pointer-events-none absolute inset-0">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/28 via-white/8 to-transparent dark:from-white/10 dark:via-white/[0.03] dark:to-transparent" />
                                    <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-primary/20 blur-3xl dark:bg-primary/10" />
                                    <div className="absolute -right-20 top-24 h-60 w-60 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-400/10" />
                                </div>

                                <div className="relative flex h-full min-h-0 flex-col">
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            className="inline-flex appearance-none items-center gap-2 border-0 bg-transparent text-base font-medium tracking-[0.01em] transition-colors hover:!text-[var(--sm-accent)] focus-visible:outline-none"
                                            style={{ color: panelTextColor }}
                                        >
                                            <span>{closeLabel}</span>
                                        </button>
                                    </div>

                                    <motion.ul
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        variants={listVariants}
                                        className="mt-12 space-y-1 sm:mt-14"
                                    >
                                        {items.map((item, index) => (
                                            <motion.li key={`${item.label}-${index}`} variants={itemVariants}>
                                                <a
                                                    href={item.link}
                                                    aria-label={item.ariaLabel}
                                                    onClick={() => setOpen(false)}
                                                    className="group inline-flex w-fit items-start gap-2 text-[clamp(2.55rem,9vw,4.85rem)] font-semibold uppercase leading-[0.9] tracking-[-0.03em] transition-colors hover:!text-[var(--sm-accent)] focus-visible:!text-[var(--sm-accent)] focus-visible:outline-none"
                                                    style={{ color: panelTextColor }}
                                                >
                                                    <span className="block">{item.label}</span>
                                                    {displayItemNumbering && (
                                                        <span
                                                            className="relative -top-[0.38em] shrink-0 text-[0.66rem] font-semibold leading-none tracking-[0.08em]"
                                                            style={{ color: accentColor }}
                                                        >
                                                            {(index + 1).toString().padStart(2, "0")}
                                                        </span>
                                                    )}
                                                </a>
                                            </motion.li>
                                        ))}
                                    </motion.ul>

                                    {displaySocials && socialItems.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 14 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ delay: 0.25 }}
                                            className="mt-auto pt-12"
                                        >
                                            <p className="mb-4 text-sm font-medium tracking-[0.01em]" style={{ color: accentColor }}>
                                                {socialsLabel}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                                                {socialItems.map((social) => (
                                                    <a
                                                        key={social.label}
                                                        href={social.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex text-[1.12rem] font-medium leading-none transition-colors hover:!text-[var(--sm-accent)]"
                                                        style={{ color: panelTextColor }}
                                                    >
                                                        {social.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
