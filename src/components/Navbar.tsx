import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 px-8 flex justify-between items-center bg-transparent">
      {/* Logo */}
      <a href="#home" className="text-3xl font-black text-white tracking-tighter">
        HG<span className="text-primary">.</span>
      </a>

      {/* Desktop Navigation (Center Pill) */}
      <div className={`hidden md:flex items-center gap-8 px-8 py-3 rounded-full transition-all duration-300 ${isScrolled ? "bg-zinc-900/80 backdrop-blur-md border border-zinc-800" : "bg-transparent"}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors relative group"
          >
            {link.name}
            {/* Active/Hover Indicator could go here */}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <div className="hidden md:block">
        <a
          href="#contact"
          className="px-6 py-2 bg-primary text-black font-bold rounded-full hover:bg-primary-dark transition-colors shadow-[0_0_15px_rgba(0,230,118,0.4)]"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white hover:text-primary transition-colors focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-4 right-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-center text-lg text-zinc-300 hover:text-primary font-medium py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-primary text-black font-bold py-3 rounded-full text-center hover:bg-primary-dark transition-colors"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}