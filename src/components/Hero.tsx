import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../lib/i18n/useLanguage";
import TextType from "./ui/TextType";
import LogoLoop from "./ui/LogoLoop";

const capabilityLogos = [
  { src: "https://cdn.simpleicons.org/instagram/E4405F", alt: "Instagram", title: "Instagram" },
  { src: "https://cdn.simpleicons.org/facebook/1877F2", alt: "Facebook", title: "Facebook" },
  { src: "https://cdn.simpleicons.org/tiktok/FFFFFF", alt: "TikTok", title: "TikTok" },
  { src: "https://cdn.simpleicons.org/whatsapp/25D366", alt: "WhatsApp", title: "WhatsApp" },
  { src: "https://cdn.simpleicons.org/meta/0467DF", alt: "Meta", title: "Meta" },
  { src: "https://cdn.simpleicons.org/googleads/4285F4", alt: "Google Ads", title: "Google Ads" },
  { src: "https://cdn.simpleicons.org/googleanalytics/E37400", alt: "Google Analytics", title: "Google Analytics" },
  { src: "https://cdn.simpleicons.org/canva/00C4CC", alt: "Canva", title: "Canva" },
  { src: "https://cdn.simpleicons.org/figma/F24E1E", alt: "Figma", title: "Figma" },
  { src: "https://cdn.simpleicons.org/notion/000000", alt: "Notion", title: "Notion", className: "dark:invert" },
  { src: "https://cdn.simpleicons.org/astro/BC52EE", alt: "Astro", title: "Astro" },
  { src: "https://cdn.simpleicons.org/react/61DAFB", alt: "React", title: "React" },
  { src: "https://cdn.simpleicons.org/nextdotjs/000000", alt: "Next.js", title: "Next.js", className: "dark:invert" },
  { src: "https://cdn.simpleicons.org/typescript/3178C6", alt: "TypeScript", title: "TypeScript" },
  { src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", alt: "Tailwind CSS", title: "Tailwind CSS" },
  { src: "https://cdn.simpleicons.org/nodedotjs/5FA04E", alt: "Node.js", title: "Node.js" },
  { src: "https://cdn.simpleicons.org/git/F05032", alt: "Git", title: "Git" },
];

export default function Hero() {
  const { scrollY } = useScroll();
  const contentY = useTransform(scrollY, [0, 420], [0, 110]);
  const contentOpacity = useTransform(scrollY, [0, 360], [1, 0.35]);
  const { t } = useLanguage();
  const greetingParts = t("greeting").split(/([,.'`])/g);

  return (
    <section id="home" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black pb-16 pt-24">
      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="flex w-full max-w-7xl flex-col items-center px-5 sm:px-8 md:px-16 lg:px-20">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-6xl space-y-8 text-center lg:space-y-10">
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl xl:text-8xl">
            {greetingParts.map((part, index) => {
              const isAccent = part === "," || part === "." || part === "'" || part === "`";
              return (
                <span key={`${part}-${index}`} className={isAccent ? "text-primary" : "text-white"}>
                  {part}
                </span>
              );
            })}
          </h1>

          <TextType
            as="p"
            className="text-xl font-semibold text-zinc-200 sm:text-2xl lg:text-3xl"
            text={[t("role")]}
            typingSpeed={72}
            pauseDuration={3000}
            deletingSpeed={40}
            loop={true}
            showCursor
            cursorCharacter="|"
          />

          <p className="mx-auto max-w-4xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:text-2xl">
            {t("heroDescriptionLine1")}
            <br />
            {t("heroDescriptionLine2")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4 sm:gap-6">
            <a href="#contact" className="inline-flex h-12 w-full sm:w-auto sm:h-14 min-w-[200px] items-center justify-center px-6 sm:px-8 py-2 text-center text-xs sm:text-sm font-bold uppercase tracking-widest whitespace-nowrap rounded-[20px] bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white hover:!bg-primary hover:!text-black transition-all duration-300">
              {t("startProject")}
            </a>
            <a href="#services" className="inline-flex h-12 w-full sm:w-auto sm:h-14 min-w-[200px] items-center justify-center px-6 sm:px-8 py-2 text-center text-xs sm:text-sm font-bold uppercase tracking-widest whitespace-nowrap rounded-[20px] bg-zinc-100 dark:bg-zinc-900 text-black dark:text-white hover:!bg-primary hover:!text-black transition-all duration-300">
              {t("viewWork")}
            </a>
          </div>

          <div className="mt-40 mb-4 w-[100vw] relative left-1/2 -translate-x-1/2">
            <LogoLoop
              logos={capabilityLogos}
              speed={80}
              direction="left"
              logoHeight={35}
              gap={60}
              hoverSpeed={30}
              scaleOnHover
              fadeOut={false}
              ariaLabel="Digital tools and technology stack"
            />
          </div>

          <a
            href="#about"
            aria-label={t("scrollDiscover")}
            className="mt-16 sm:mt-20 inline-flex flex-col items-center justify-center text-zinc-400 transition-colors duration-300 hover:!text-primary hover:[filter:drop-shadow(0px_4px_15px_rgba(0,0,0,0.3))] animate-bounce"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-mb-10"><path d="m6 9 6 6 6-6" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
