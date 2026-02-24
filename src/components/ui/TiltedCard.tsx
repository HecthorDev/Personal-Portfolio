import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";

interface TiltedCardProps {
    children: ReactNode;
    className?: string;
    containerClassName?: string;
    scaleOnHover?: number;
    rotateAmplitude?: number;
}

const springConfig = {
    damping: 30,
    stiffness: 180,
    mass: 0.5,
};

function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, value));
}

export default function TiltedCard({
    children,
    className = "",
    containerClassName = "",
    scaleOnHover = 1.04,
    rotateAmplitude = 11,
}: TiltedCardProps) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const rotateX = useSpring(useMotionValue(0), springConfig);
    const rotateY = useSpring(useMotionValue(0), springConfig);
    const scale = useSpring(1, springConfig);

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const normalizedX = clamp(((event.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
        const normalizedY = clamp(((event.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);

        rotateX.set(-normalizedY * rotateAmplitude);
        rotateY.set(normalizedX * rotateAmplitude);
    };

    const handleMouseEnter = () => {
        scale.set(scaleOnHover);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
        scale.set(1);
    };

    return (
        <div
            ref={cardRef}
            className={`h-full [perspective:1000px] ${containerClassName}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className={`h-full [transform-style:preserve-3d] will-change-transform ${className}`}
                style={{ rotateX, rotateY, scale }}
            >
                {children}
            </motion.div>
        </div>
    );
}
