import { motion } from "framer-motion";

const projects = [
    {
        title: "Secret Number Game",
        category: "Juego del numero secreto!",
        description:
            "Developed a secret number game using HTML, CSS, and JavaScript. Focused on DOM manipulation and game logic.",
        image: "/Img/project1.png", // Placeholder path
        tags: ["HTML", "CSS", "JS"],
    },
    {
        title: "Portfolio Responsive",
        category: "Eleve tu negocio digital",
        description:
            "Personal responsive portfolio website built from scratch. Implements fluid layouts and CSS Grid/Flexbox.",
        image: "/Img/project2.png", // Placeholder path
        tags: ["React", "Tailwind", "Framer"],
    },
    {
        title: "Text Encryptor",
        category: "Text Encryptor",
        description:
            "Web application for text encryption/decryption using a custom algorithm. Clean UI and instant feedback.",
        image: "/Img/project3.png", // Placeholder path
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
                            className="group bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        >
                            <div className="relative h-48 overflow-hidden bg-zinc-800 group">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                                {/* Fallback pattern if image missing */}
                                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-zinc-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 bg-primary/90 text-black text-xs font-bold rounded-full backdrop-blur-sm">
                                        {project.tags[0]}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <h4 className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">
                                    {project.category}
                                </h4>
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                                    {project.description}
                                </p>

                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center py-3 px-6 border border-zinc-700 rounded-full text-zinc-300 hover:text-black hover:border-primary hover:bg-primary transition-all duration-300 text-sm font-bold w-full"
                                >
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
                                        className="ml-2"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
