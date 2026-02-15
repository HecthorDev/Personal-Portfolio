
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "ghost";
}

const buttonVariants = {
    primary: "bg-primary text-black hover:bg-primary-dark border-transparent shadow-[0_0_20px_rgba(0,230,118,0.4)]", // Solid green for primary
    secondary: "bg-white/5 hover:bg-white/10 text-white border-white/10 backdrop-blur-xl", // clean glass
    ghost: "bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white border-transparent",
};

export default function GlassButton({
    children,
    className = "",
    variant = "primary",
    ...props
}: GlassButtonProps) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
        relative px-6 py-3 rounded-2xl font-bold tracking-wide 
        backdrop-blur-md transition-all duration-300
        border shadow-[0_4px_14px_0_rgba(0,0,0,0.1)]
        overflow-hidden group
        ${buttonVariants[variant]} 
        ${className}
      `}
            {...props}
        >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
    );
}