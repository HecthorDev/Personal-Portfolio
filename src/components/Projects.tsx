import { motion } from "framer-motion";
import GlassCard from "./ui/GlassCard";
import GlassButton from "./ui/GlassButton";

const projects = [
    {
        title: "Secret Number Game",
        category: "Juego del numero secreto!",
        description:
            "Developed a secret number game using HTML, CSS, and JavaScript. Focused on DOM manipulation and game logic.",
        image: "/Img/project1.png",
        tags: ["HTML", "CSS", "JS"],
    },
    {
        title: "Portfolio Responsive",
        category: "Eleve tu negocio digital",
        description:
            "Personal responsive portfolio website built from scratch. Implements fluid layouts and CSS Grid/Flexbox.",
        image: "/Img/project2.png",
        tags: ["React", "Tailwind", "Framer"],
    },
    {
        title: "Text Encryptor",
        category: "Text Encryptor",
        description:
            "Web application for text encryption/decryption using a custom algorithm. Clean UI and instant feedback.",
        image: "/Img/project3.png",
        tags: ["JS", "Algorithm", "UI"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-8 md:px-20">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white"
                    >
                        Featured <span className="text-primary">Projects</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 max-w-2xl mx-auto"
                    >
                        A selection of my recent work, ranging from simple web games to
                        complex frontend architectures.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full flex flex-col p-0 overflow-hidden hover:scale-[1.01]">
                                <div className="relative h-56 overflow-hidden bg-black/50 group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-60"></div>
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                                    {/* Fallback pattern if image missing */}
                                    <div className="w-full h-full flex items-center justify-center text-zinc-700 relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                            }}
                                        />
                                        <div className="hidden w-full h-full flex items-center justify-center bg-zinc-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                                        </div>
                                    </div>

                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-black/60 text-primary text-xs font-bold rounded-full backdrop-blur-md border border-primary/20">
                                            {project.tags[0]}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <h4 className="text-primary/80 text-xs font-bold mb-2 uppercase tracking-widest">
                                        {project.category}
                                    </h4>
                                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-1">
                                        {project.description}
                                    </p>

                                    <GlassButton variant="primary" className="w-full justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                                        View Project
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="ml-2 group-hover:translate-x-1 transition-transform"
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </GlassButton>

                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
