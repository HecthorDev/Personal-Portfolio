import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";

const services = [
    {
        title: "Frontend Development",
        description:
            "React, TypeScript, Next.js, Tailwind CSS - building modern, performant UIs",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><path d="m9 16 3-3 3 3" /></svg>
        ),
    },
    {
        title: "Full Stack Development",
        description:
            "React + Python/Node backend, scalable APIs, database design",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
        ),
    },
    {
        title: "3D Web Experiences",
        description:
            "React Three Fiber, Three.js - immersive and interactive web apps",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" y1="22" x2="12" y2="12" /></svg>
        ),
    },
    {
        title: "Mobile Development",
        description:
            "React Native, cross-platform apps, production optimization",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
        ),
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-8 md:px-20 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white"
                    >
                        My <span className="text-primary">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 max-w-2xl mx-auto"
                    >
                        Providing comprehensive solutions from initial design to final deployment.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full flex flex-col items-start p-8 hover:border-primary/50 group">
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-black shadow-lg shadow-black/20">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">
                                    {service.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
