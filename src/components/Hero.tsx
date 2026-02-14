import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const TypewriterComponent = Typewriter as any;

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center overflow-hidden relative bg-black"
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between px-8 md:px-20 gap-12">
        {/* Animated Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left space-y-6 pt-16 md:pt-0"
        >
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm shadow-[0_0_15px_rgba(0,230,118,0.1)] mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold text-zinc-300 tracking-wider uppercase">Available for new projects</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white tracking-tight">
            Hi, I'm <br />
            <span className="text-primary">Hector.</span>
          </h1>
          <div className="text-xl md:text-2xl font-medium text-zinc-400 flex flex-col md:flex-row gap-2 justify-center md:justify-start items-center md:items-baseline">
            <span>Technical |</span>
            <span className="text-zinc-200">
              <TypewriterComponent
                options={{
                  strings: [
                    "Frontend Developer",
                    "Full Stack Engineer",
                    "React Native",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </span>
          </div>
          <p className="text-zinc-500 max-w-lg mx-auto md:mx-0 leading-relaxed text-sm md:text-base">
            Crafting high-performance digital experiences with a focus on scalability, performance, and clean architecture.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary-dark transition shadow-[0_0_20px_rgba(0,230,118,0.3)] hover:shadow-[0_0_30px_rgba(0,230,118,0.6)] flex items-center gap-2"
            >
              Start a Project
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
            <div className="flex items-center gap-4 px-4 text-zinc-500">
              <a href="https://github.com/HecthorDev" target="_blank" className="hover:text-white transition-colors" aria-label="Github"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg></a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></a>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex flex-1 justify-center relative"
        >
          <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-[3rem] overflow-hidden bg-zinc-900 shadow-2xl shadow-primary/10">
            {/* Fallback or actual image */}
            <img
              src="/Img/hector1.png"
              alt="Hector Garcia"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}