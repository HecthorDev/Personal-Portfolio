"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 pt-24 gap-10 overflow-hidden">
      {/* Texto Animado */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, this is <span className="text-cyan-400">Hector</span>
        </h1>
        <h3 className="text-2xl md:text-3xl font-semibold text-slate-300 flex flex-col md:flex-row gap-2 justify-center md:justify-start items-center md:items-baseline">
          I'm a <span className="text-cyan-400">
            <Typewriter
              options={{
                strings: ['Front-end Developer', 'React Enthusiast', 'Tech Learner'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </h3>
        <p className="text-slate-400 max-w-lg mx-auto md:mx-0">
          HTML, CSS, JavaScript | Building the Future with React JS
        </p>
        
        <div className="flex gap-4 justify-center md:justify-start text-3xl text-cyan-400">
            <a href="https://github.com/HecthorDev" target="_blank" className="hover:text-white hover:scale-110 transition-all"><i className="bx bxl-github"></i></a>
            <a href="https://www.linkedin.com/in/hector19garcia/" target="_blank" className="hover:text-white hover:scale-110 transition-all"><i className="bx bxl-linkedin"></i></a>
            <a href="https://x.com/HecthorDev" target="_blank" className="hover:text-white hover:scale-110 transition-all"><i className="bx bxl-twitter"></i></a>
        </div>

        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#contact" className="px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)]">Hire Me</a>
          <a href="#contact" className="px-8 py-3 border-2 border-cyan-500 text-cyan-500 font-bold rounded-full hover:bg-cyan-500 hover:text-slate-900 transition">Contact</a>
        </div>
      </motion.div>

      {/* Imagen con Efecto de Entrada */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex justify-center relative"
      >
         <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <Image 
              src="/Img/hector1.png" 
              alt="Hector Garcia" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
         </div>
      </motion.div>

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-900/90 backdrop-blur-md py-3 shadow-lg border-b border-slate-800"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="#home" className="text-2xl font-bold text-white hover:scale-105 transition-transform">
            Hector <span className="text-cyan-400">Garcia</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-slate-300 hover:text-cyan-400 font-medium transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <Link
              href="#contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full shadow-[0_6px_20px_rgba(6,182,212,0.18)] hover:-translate-y-1 transition-transform"
            >
              Contact Me
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="text-3xl text-white focus:outline-none hover:text-cyan-400 transition-colors"
            >
              <i className={`bx ${isOpen ? "bx-x" : "bx-menu"}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } bg-slate-900/95 border-t border-slate-800`}
        >
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-white rounded-md hover:bg-slate-800/60 transition-colors text-center font-medium"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 mx-auto px-6 py-2 bg-cyan-500 text-slate-900 font-bold rounded-full inline-block"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
}