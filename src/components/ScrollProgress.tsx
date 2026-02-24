import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const progressBarScale = useSpring(scrollYProgress, {
        stiffness: 160,
        damping: 28,
        mass: 0.25,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-primary/80 shadow-[0_0_18px_rgba(0,230,118,0.7)] z-[70] origin-left"
            style={{ scaleX: progressBarScale }}
        />
    );
}
