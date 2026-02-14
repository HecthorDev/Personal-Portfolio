
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    variant?: "clear" | "blue" | "green" | "pink";
    isInteractive?: boolean;
}

const variantStyles = {
    clear: "bg-glass border-glass-border",
    blue: "bg-glass-ios-blue border-blue-400/20",
    green: "bg-glass-ios-green border-green-400/20",
    pink: "bg-glass-ios-pink border-pink-400/20",
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
            className={`group relative rounded-[38px] overflow-hidden ${variantStyles[variant]} backdrop-blur-liquid backdrop-saturate-[180%] backdrop-brightness-[1.05] shadow-[0_20px_50px_var(--glass-shadow)] transition-transform duration-500 hover:scale-[1.02] ${className}`}
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
