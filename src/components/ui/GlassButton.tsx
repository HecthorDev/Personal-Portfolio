
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "ghost";
}

const buttonVariants = {
    primary: "bg-[#1ED760] text-white hover:bg-[#21e065]",
    secondary: "bg-[#1ED760] text-white hover:bg-[#21e065]",
    ghost: "bg-[#1ED760] text-white hover:bg-[#21e065]",
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
        inline-flex h-14 items-center justify-center rounded-full px-8 py-4 text-center text-sm font-bold uppercase leading-none tracking-[0.16em]
        transition-colors duration-200 sm:px-10 md:px-12 md:text-base
        disabled:cursor-not-allowed disabled:opacity-50
        ${buttonVariants[variant]} 
        ${className}
      `}
            {...props}
        >
            <span className="flex w-full items-center justify-center gap-2 text-center leading-none">
                {children}
            </span>
        </motion.button>
    );
}
