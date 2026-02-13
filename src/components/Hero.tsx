
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 pt-24 gap-10 overflow-hidden"
    >
      {/* Animated Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, this is <span className="text-cyan-400">Hector</span>
        </h1>
        <div className="text-2xl md:text-3xl font-semibold text-slate-300 flex flex-col md:flex-row gap-2 justify-center md:justify-start items-center md:items-baseline">
          <span>I'm a</span>
          <span className="text-cyan-400">
            <Typewriter
              options={{
                strings: [
                  "Front-end Developer",
                  "React Enthusiast",
                  "Tech Learner",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </div>
        <p className="text-slate-400 max-w-lg mx-auto md:mx-0">
          HTML, CSS, JavaScript | Building the Future with React JS
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start text-3xl text-cyan-400">
          <a
            href="https://github.com/HecthorDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all"
            aria-label="GitHub Profile"
          >
            {/* GitHub Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/hector19garcia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all"
            aria-label="LinkedIn Profile"
          >
            {/* LinkedIn Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            href="https://x.com/HecthorDev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all"
            aria-label="X (Twitter) Profile"
          >
            {/* X Icon SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]"
          >
            Hire Me
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-cyan-500 text-cyan-500 font-bold rounded-full hover:bg-cyan-500 hover:text-slate-900 transition"
          >
            Contact
          </a>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center relative"
      >
        <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
          <img
            src="/Img/hector1.png"
            alt="Hector Garcia"
            className="object-cover hover:scale-105 transition-transform duration-500 w-full h-full"
          />
        </div>
      </motion.div>
    </section>
  );
}