
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    description?: string;
    error?: string;
    className?: string;
}

export default function GlassInput({
    label,
    description,
    error,
    className = "",
    ...props
}: GlassInputProps) {
    return (
        <div className={`space-y-2 ${className}`}>
            {label && (
                <label className="text-zinc-400 text-sm font-medium ml-2 block">{label}</label>
            )}
            <motion.div
                whileFocus={{ scale: 1.01, borderColor: "rgba(0, 230, 118, 0.5)" }}
                className="relative rounded-2xl overflow-hidden group"
            >
                <input
                    {...props}
                    className="w-full bg-zinc-950/20 backdrop-blur-md border border-zinc-700/50 rounded-2xl px-6 py-4 text-white focus:outline-none focus:bg-zinc-900/40 transition-all placeholder-zinc-600 shadow-inner"
                />
                {/* Glow effect on focus (handled by parent motion.div or added as sibling) */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 pointer-events-none group-focus-within:ring-primary/50 transition-colors duration-300" />
            </motion.div>

            {description && <p className="text-zinc-500 text-xs ml-2">{description}</p>}
            {error && <p className="text-red-400 text-xs ml-2">{error}</p>}
        </div>
    );
}
