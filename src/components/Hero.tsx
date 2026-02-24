import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../lib/i18n/useLanguage";
import TextType from "./ui/TextType";

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
            pauseDuration={1400}
            deletingSpeed={40}
            loop={false}
            showCursor
            cursorCharacter="|"
          />

          <p className="mx-auto max-w-4xl text-base leading-relaxed text-zinc-400 sm:text-lg lg:text-2xl">
            {t("heroDescriptionLine1")}
            <br />
            {t("heroDescriptionLine2")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4 sm:gap-6">
            <a href="#contact" className="inline-flex h-14 items-center justify-center rounded-full bg-[#1ED760] px-8 py-4 text-center text-sm font-bold uppercase leading-none tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[#21e065] sm:px-10 md:px-12 md:text-base">
              {t("startProject")}
            </a>
            <a href="#projects" className="inline-flex h-14 items-center justify-center rounded-full bg-[#1ED760] px-8 py-4 text-center text-sm font-bold uppercase leading-none tracking-[0.16em] text-white transition-colors duration-200 hover:bg-[#21e065] sm:px-10 md:px-12 md:text-base">
              {t("viewWork")}
            </a>
          </div>

          <a href="#about" className="mt-6 inline-flex items-center gap-2 text-lg text-zinc-400 transition-colors hover:text-primary">
            {t("scrollDiscover")}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
