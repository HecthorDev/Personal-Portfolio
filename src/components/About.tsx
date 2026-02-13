import { motion } from "framer-motion";

export default function About() {
    const techStack = [
        "React",
        "TypeScript",
        "Python",
        "Next.js",
        "React Native",
        "Three.js",
        "Node.js",
        "AWS"
    ];

    return (
        <section id="about" className="py-24 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 md:px-20 flex flex-col md:flex-row items-center gap-16">
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-[3rem] overflow-hidden bg-zinc-900 shadow-2xl">
                        <img
                            src="/Img/hector2.png"
                            alt="Hector Garcia - About"
                            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary rounded-full flex items-center justify-center z-10 border-4 border-black">
                        <div className="text-center">
                            <span className="block text-4xl font-bold text-white">1+</span>
                            <span className="text-xs text-white uppercase tracking-wider font-bold">Years Exp.</span>
                        </div>
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-8"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            About <span className="text-primary">Me</span>
                        </h2>
                        <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            Professional Full Stack Developer based in <span className="text-white font-bold">Guatemala</span>. Currently
                            focused on architecting production-ready applications that solve
                            real-world problems.
                        </p>
                        <p className="text-zinc-500 leading-relaxed">
                            My philosophy centers on <span className="text-primary font-bold">Clean Code</span> and <span className="text-primary font-bold">Premium CX</span>. I specialize in the
                            React ecosystem, leveraging TypeScript to build type-safe, high-performance web and mobile solutions.
                        </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-3">
                        {techStack.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-2 bg-zinc-900 text-zinc-300 rounded-full text-sm font-bold border border-zinc-800 hover:border-primary hover:text-primary transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <a
                        href="#services"
                        className="inline-flex items-center text-primary font-bold hover:translate-x-2 transition-transform"
                    >
                        Explore my services
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
