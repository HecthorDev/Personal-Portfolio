
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    variant?: "clear" | "green";
    isInteractive?: boolean;
}

const variantStyles = {
    clear: "bg-glass border-glass-border hover:border-primary/30", // Add hover green tint
    green: "bg-primary/5 border-primary/20",
};

export default function GlassCard({
    children,
    className = "",
    variant = "clear",
    isInteractive = true,
}: GlassCardProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        if (!isInteractive) return;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <div
            className={`group relative rounded-[32px] overflow-hidden ${variantStyles[variant]} backdrop-blur-3xl backdrop-saturate-150 shadow-2xl transition-all duration-500 hover:scale-[1.01] ${className}`}
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Shine Effect */}
            {isInteractive && (
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                    style={{
                        background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255,255,255,0.15),
                transparent 80%
              )
            `,
                    }}
                />
            )}

            {/* Top Highlight Border (Simulating light hitting the edge) */}
            <div className="absolute inset-0 rounded-[38px] ring-1 ring-inset ring-glass-highlight/20 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-glass-highlight/50 to-transparent opacity-50" />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
