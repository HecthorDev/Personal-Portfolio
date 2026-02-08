"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para efecto glassmorphism dinámico
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full px-6 transition-all duration-300 z-50 flex justify-between items-center ${
        isScrolled 
          ? "py-4 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-lg" 
          : "py-6 bg-transparent"
      }`}
    >
      <Link href="#home" className="text-2xl font-bold text-white cursor-pointer hover:scale-105 transition-transform">
        Hector <span className="text-cyan-400">Garcia</span>
      </Link>

      {/* Mobile Icon */}
      <button 
        className="text-3xl text-white md:hidden focus:outline-none hover:text-cyan-400 transition-colors" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <i className={`bx ${isOpen ? 'bx-x' : 'bx-menu'}`}></i>
      </button>

      {/* Navbar Links */}
      <nav className={`absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 md:border-none md:static md:w-auto md:bg-transparent md:backdrop-blur-none md:flex md:items-center gap-8 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}`}>
        <div className="flex flex-col md:flex-row md:gap-8 p-4 md:p-0 text-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="block py-2 text-slate-300 hover:text-cyan-400 font-medium transition-colors relative group" 
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
        </div>
      </nav>

      <Link href="#contact" className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:-translate-y-1 transition-all duration-300">
        Contact Me
      </Link>
    </header>
  );
}