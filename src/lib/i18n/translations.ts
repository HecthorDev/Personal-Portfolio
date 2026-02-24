export type SupportedLanguage = "en" | "es" | "zh" | "fr" | "ar" | "ru" | "hi" | "pt";
export type LanguageDirection = "ltr" | "rtl";

export interface LanguageOption {
    code: SupportedLanguage;
    name: string;
    flag: string;
    flagAsset: string;
    dir: LanguageDirection;
}

export const LANGUAGES: Record<SupportedLanguage, LanguageOption> = {
    en: { code: "en", name: "English", flag: "🇬🇧", flagAsset: "https://flagcdn.com/w40/gb.png", dir: "ltr" },
    es: { code: "es", name: "Español", flag: "🇪🇸", flagAsset: "https://flagcdn.com/w40/es.png", dir: "ltr" },
    zh: { code: "zh", name: "中文", flag: "🇨🇳", flagAsset: "https://flagcdn.com/w40/cn.png", dir: "ltr" },
    fr: { code: "fr", name: "Français", flag: "🇫🇷", flagAsset: "https://flagcdn.com/w40/fr.png", dir: "ltr" },
    ar: { code: "ar", name: "العربية", flag: "🇸🇦", flagAsset: "https://flagcdn.com/w40/sa.png", dir: "rtl" },
    ru: { code: "ru", name: "Русский", flag: "🇷🇺", flagAsset: "https://flagcdn.com/w40/ru.png", dir: "ltr" },
    hi: { code: "hi", name: "हिन्दी", flag: "🇮🇳", flagAsset: "https://flagcdn.com/w40/in.png", dir: "ltr" },
    pt: { code: "pt", name: "Português", flag: "🇧🇷", flagAsset: "https://flagcdn.com/w40/br.png", dir: "ltr" },
};

export interface TranslationDictionary {
    greeting: string;
    role: string;
    heroDescriptionLine1: string;
    heroDescriptionLine2: string;
    navHome: string;
    navAbout: string;
    navServices: string;
    navProjects: string;
    navContact: string;
    hireMe: string;
    startProject: string;
    viewWork: string;
    scrollDiscover: string;
    languageSwitcherLabel: string;
    menuOpen: string;
    menuClose: string;
    socialsLabel: string;
    enableLightTheme: string;
    enableDarkTheme: string;
    aboutPrefix: string;
    aboutHighlight: string;
    aboutP1: string;
    aboutP2: string;
    aboutP3: string;
    aboutP4: string;
    aboutP5: string;
    yearsExp: string;
    stackFrontend: string;
    stackMobile: string;
    stackBackend: string;
    stackTooling: string;
    exploreServices: string;
    servicesPrefix: string;
    servicesHighlight: string;
    servicesIntro: string;
    serviceUiBadge: string;
    serviceUiTitle: string;
    serviceUiSubtitle: string;
    serviceUiDescription: string;
    serviceFullStackBadge: string;
    serviceFullStackTitle: string;
    serviceFullStackSubtitle: string;
    serviceFullStackDescription: string;
    serviceImmersiveBadge: string;
    serviceImmersiveTitle: string;
    serviceImmersiveSubtitle: string;
    serviceImmersiveDescription: string;
    serviceMobileBadge: string;
    serviceMobileTitle: string;
    serviceMobileSubtitle: string;
    serviceMobileDescription: string;
    projectsPrefix: string;
    projectsHighlight: string;
    projectsIntro: string;
    project1Title: string;
    project1Category: string;
    project1Description: string;
    project2Title: string;
    project2Category: string;
    project2Description: string;
    project3Title: string;
    project3Category: string;
    project3Description: string;
    project4Title: string;
    project4Category: string;
    project4Description: string;
    viewProject: string;
    comingSoon: string;
    paused: string;
    autoScrollActive: string;
    contactEyebrow: string;
    contactPrefix: string;
    contactHighlight: string;
    contactIntro: string;
    labelName: string;
    labelEmail: string;
    labelSubject: string;
    labelMessage: string;
    placeholderName: string;
    placeholderEmail: string;
    placeholderSubject: string;
    placeholderMessage: string;
    sendMessage: string;
    footerDescription: string;
    footerNavigation: string;
    footerLegal: string;
    footerPrivacyPolicy: string;
    footerTerms: string;
    footerRights: string;
    footerSignature: string;
}

const en: TranslationDictionary = {
    greeting: "Hi, I'm Héctor García",
    role: "Full Stack Developer | React · TypeScript · Python",
    heroDescriptionLine1: "High-performance web & mobile products.",
    heroDescriptionLine2: "Clean architecture, zero debt, shipped on time.",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navProjects: "Projects",
    navContact: "Contact",
    hireMe: "Hire Me",
    startProject: "Start a Project",
    viewWork: "View My Work",
    scrollDiscover: "Scroll to discover",
    languageSwitcherLabel: "Select language",
    menuOpen: "Menu +",
    menuClose: "Close X",
    socialsLabel: "Socials",
    enableLightTheme: "Enable light theme",
    enableDarkTheme: "Enable dark theme",
    aboutPrefix: "About",
    aboutHighlight: "Me",
    aboutP1: "I didn't start as a developer. I spent 6+ years inside corporate operations - managing $2M+ monthly transactions, killing inefficiencies, and obsessing over data accuracy.",
    aboutP2: "That background changed how I write code.",
    aboutP3: "I don't just build features. I architect systems that scale, perform under pressure, and don't break at 2am.",
    aboutP4: "Today I specialize in the React ecosystem - TypeScript, Next.js, React Native, and Three.js - building products that are as solid under the hood as they look on screen.",
    aboutP5: "Clean Code isn't a buzzword for me. It's the habit.",
    yearsExp: "Years Exp.",
    stackFrontend: "Frontend",
    stackMobile: "Mobile",
    stackBackend: "Backend",
    stackTooling: "Tooling",
    exploreServices: "Explore my services",
    servicesPrefix: "My",
    servicesHighlight: "Services",
    servicesIntro: "I don't just write code. I engineer solutions. From the first wireframe to production deploy, I own the process end to end.",
    serviceUiBadge: "UI",
    serviceUiTitle: "UI Engineering",
    serviceUiSubtitle: "Frontend that converts and performs",
    serviceUiDescription: "Sharp, accessible interfaces built with React, TypeScript, Next.js, and Tailwind CSS. Every component is typed, every pixel intentional. Fast by default, scalable by design.",
    serviceFullStackBadge: "FULL STACK",
    serviceFullStackTitle: "Full Stack Engineering",
    serviceFullStackSubtitle: "One developer. Full ownership.",
    serviceFullStackDescription: "I architect complete systems: React frontend, Python (Django) or Node.js backend, database design, and REST APIs, built to handle real load without falling apart at 2am.",
    serviceImmersiveBadge: "3D WEB",
    serviceImmersiveTitle: "Immersive Web",
    serviceImmersiveSubtitle: "Your website, in another dimension.",
    serviceImmersiveDescription: "Interactive 3D experiences using React Three Fiber and Three.js. For brands and products that refuse to look like everyone else. Most developers cannot offer this. I can.",
    serviceMobileBadge: "MOBILE",
    serviceMobileTitle: "Mobile Engineering",
    serviceMobileSubtitle: "One codebase. Every device. No excuses.",
    serviceMobileDescription: "Cross-platform apps built with React Native, production-optimized, smooth on both iOS and Android, with real-world performance tuning from actual production experience.",
    projectsPrefix: "Featured",
    projectsHighlight: "Projects",
    projectsIntro: "Infinite carousel: hover to pause and click a card to move forward or backward.",
    project1Title: "Secret Number Game",
    project1Category: "Secret Number Challenge",
    project1Description: "Developed a secret number game using HTML, CSS, and JavaScript. Focused on DOM manipulation and game logic.",
    project2Title: "Portfolio Responsive",
    project2Category: "Elevate Your Digital Business",
    project2Description: "Personal responsive portfolio website built from scratch. Implements fluid layouts and CSS Grid/Flexbox.",
    project3Title: "Text Encryptor",
    project3Category: "Text Encryptor",
    project3Description: "Web application for text encryption/decryption using a custom algorithm. Clean UI and instant feedback.",
    project4Title: "Org",
    project4Category: "Team Management",
    project4Description: "React application to manage teams and collaborators. Features team creation, member registration, and dynamic organizational charts.",
    viewProject: "View Project",
    comingSoon: "Coming Soon",
    paused: "Paused",
    autoScrollActive: "Auto Scroll Active",
    contactEyebrow: "Get in Touch",
    contactPrefix: "Let's work",
    contactHighlight: "together",
    contactIntro: "Have a project in mind? Fill out the form below or send me an email.",
    labelName: "Name",
    labelEmail: "Email",
    labelSubject: "Subject",
    labelMessage: "Message",
    placeholderName: "John Doe",
    placeholderEmail: "john@example.com",
    placeholderSubject: "Select a subject",
    placeholderMessage: "Tell me about your project...",
    sendMessage: "Send Message",
    footerDescription: "Crafting premium digital experiences with a focus on minimalist design, clean code, and user-centric problem solving.",
    footerNavigation: "Navigation",
    footerLegal: "Legal",
    footerPrivacyPolicy: "Privacy Policy",
    footerTerms: "Terms of Service",
    footerRights: "All rights reserved.",
    footerSignature: "Designed & Built with care in Guatemala.",
};

const es: TranslationDictionary = {
    greeting: "Hola, soy Héctor García",
    role: "Desarrollador Full Stack | React · TypeScript · Python",
    heroDescriptionLine1: "Productos web y mobile de alto rendimiento.",
    heroDescriptionLine2: "Arquitectura limpia, cero deuda tecnica, entregado a tiempo.",
    navHome: "Inicio",
    navAbout: "Sobre mi",
    navServices: "Servicios",
    navProjects: "Proyectos",
    navContact: "Contacto",
    hireMe: "Contratame",
    startProject: "Iniciar proyecto",
    viewWork: "Ver mi trabajo",
    scrollDiscover: "Desliza para descubrir",
    languageSwitcherLabel: "Seleccionar idioma",
    menuOpen: "Menu +",
    menuClose: "Cerrar X",
    socialsLabel: "Redes",
    enableLightTheme: "Activar tema claro",
    enableDarkTheme: "Activar tema oscuro",
    aboutPrefix: "Sobre",
    aboutHighlight: "mi",
    aboutP1: "No empece como desarrollador. Pase mas de 6 anos en operaciones corporativas - gestionando mas de $2M mensuales, eliminando ineficiencias y obsesionado con la precision de datos.",
    aboutP2: "Ese recorrido cambio por completo como escribo codigo.",
    aboutP3: "No solo construyo features. Diseno sistemas que escalan, rinden bajo presion y no se rompen a las 2am.",
    aboutP4: "Hoy me especializo en el ecosistema React - TypeScript, Next.js, React Native y Three.js - creando productos tan solidos por dentro como se ven por fuera.",
    aboutP5: "Clean Code no es una moda para mi. Es un habito.",
    yearsExp: "Anos Exp.",
    stackFrontend: "Frontend",
    stackMobile: "Mobile",
    stackBackend: "Backend",
    stackTooling: "Tooling",
    exploreServices: "Explora mis servicios",
    servicesPrefix: "Mis",
    servicesHighlight: "Servicios",
    servicesIntro: "No solo escribo codigo. Diseno soluciones. Desde el primer wireframe hasta produccion, me hago cargo del proceso de principio a fin.",
    serviceUiBadge: "UI",
    serviceUiTitle: "Ingenieria UI",
    serviceUiSubtitle: "Frontend que convierte y rinde",
    serviceUiDescription: "Interfaces claras y accesibles con React, TypeScript, Next.js y Tailwind CSS. Cada componente tipado, cada pixel intencional. Rapido por defecto y escalable por diseno.",
    serviceFullStackBadge: "FULL STACK",
    serviceFullStackTitle: "Ingenieria Full Stack",
    serviceFullStackSubtitle: "Un developer. Responsabilidad total.",
    serviceFullStackDescription: "Arquitecto sistemas completos: frontend en React, backend en Python (Django) o Node.js, diseno de base de datos y APIs REST, preparado para carga real sin caerse a las 2am.",
    serviceImmersiveBadge: "WEB 3D",
    serviceImmersiveTitle: "Web Inmersiva",
    serviceImmersiveSubtitle: "Tu sitio, en otra dimension.",
    serviceImmersiveDescription: "Experiencias 3D interactivas con React Three Fiber y Three.js para marcas y productos que no quieren verse como todos los demas. Eso no lo ofrece cualquiera.",
    serviceMobileBadge: "MOBILE",
    serviceMobileTitle: "Ingenieria Mobile",
    serviceMobileSubtitle: "Un codebase. Todos los dispositivos.",
    serviceMobileDescription: "Apps multiplataforma con React Native, optimizadas para produccion, fluidas en iOS y Android, con ajustes de rendimiento reales de proyectos en produccion.",
    projectsPrefix: "Proyectos",
    projectsHighlight: "Destacados",
    projectsIntro: "Carrusel infinito: pasa el mouse para pausar y haz click en una tarjeta para adelantar o retroceder.",
    project1Title: "Juego del Numero Secreto",
    project1Category: "Reto Numero Secreto",
    project1Description: "Juego del numero secreto con HTML, CSS y JavaScript. Enfoque en manipulacion del DOM y logica de juego.",
    project2Title: "Portafolio Responsive",
    project2Category: "Impulsa tu Negocio Digital",
    project2Description: "Portafolio personal responsive construido desde cero con layouts fluidos y CSS Grid/Flexbox.",
    project3Title: "Encriptador de Texto",
    project3Category: "Encriptador",
    project3Description: "Aplicacion web para encriptar y desencriptar texto con algoritmo propio. UI limpia y respuesta inmediata.",
    project4Title: "Org",
    project4Category: "Gestion de Equipos",
    project4Description: "Aplicacion React para gestionar equipos y colaboradores. Incluye creacion de equipos, registro de miembros y organigramas dinamicos.",
    viewProject: "Ver proyecto",
    comingSoon: "Proximamente",
    paused: "Pausado",
    autoScrollActive: "Auto scroll activo",
    contactEyebrow: "Contacto",
    contactPrefix: "Trabajemos",
    contactHighlight: "juntos",
    contactIntro: "Tienes un proyecto en mente? Completa el formulario o enviame un correo.",
    labelName: "Nombre",
    labelEmail: "Correo",
    labelSubject: "Asunto",
    labelMessage: "Mensaje",
    placeholderName: "Juan Perez",
    placeholderEmail: "juan@ejemplo.com",
    placeholderSubject: "Selecciona un asunto",
    placeholderMessage: "Cuentame sobre tu proyecto...",
    sendMessage: "Enviar mensaje",
    footerDescription: "Creo experiencias digitales premium con foco en diseno minimalista, codigo limpio y soluciones centradas en el usuario.",
    footerNavigation: "Navegacion",
    footerLegal: "Legal",
    footerPrivacyPolicy: "Politica de privacidad",
    footerTerms: "Terminos del servicio",
    footerRights: "Todos los derechos reservados.",
    footerSignature: "Disenado y desarrollado con cuidado en Guatemala.",
};

export const translations: Record<SupportedLanguage, TranslationDictionary> = {
    en,
    es,
    zh: {
        ...en,
        greeting: "你好，我是 Héctor García",
        role: "全栈开发者 | React · TypeScript · Python",
        navHome: "首页",
        navAbout: "关于我",
        navServices: "服务",
        navProjects: "项目",
        navContact: "联系",
        hireMe: "联系我",
        startProject: "开始项目",
        viewWork: "查看作品",
        scrollDiscover: "向下探索",
        languageSwitcherLabel: "选择语言",
        aboutPrefix: "关于",
        aboutHighlight: "我",
        servicesHighlight: "服务",
        projectsHighlight: "项目",
        contactEyebrow: "联系我",
        footerNavigation: "导航",
        footerLegal: "法律",
        footerRights: "版权所有。",
        footerSignature: "在危地马拉精心设计与开发。",
    },
    fr: {
        ...en,
        greeting: "Salut, je suis Héctor García",
        role: "Développeur Full Stack | React · TypeScript · Python",
        navHome: "Accueil",
        navAbout: "À propos",
        navServices: "Services",
        navProjects: "Projets",
        navContact: "Contact",
        hireMe: "Engagez-moi",
        startProject: "Démarrer un projet",
        viewWork: "Voir mon travail",
        scrollDiscover: "Faites défiler pour découvrir",
        languageSwitcherLabel: "Choisir la langue",
        aboutPrefix: "À",
        aboutHighlight: "propos",
        servicesHighlight: "Services",
        projectsHighlight: "Projets",
        footerRights: "Tous droits réservés.",
        footerSignature: "Conçu et développé avec soin au Guatemala.",
    },
    ar: {
        ...en,
        greeting: "مرحباً، أنا هيكتور غارسيا",
        role: "مطور فل ستاك | React · TypeScript · Python",
        navHome: "الرئيسية",
        navAbout: "عني",
        navServices: "الخدمات",
        navProjects: "المشاريع",
        navContact: "تواصل",
        hireMe: "وظفني",
        startProject: "ابدأ مشروعاً",
        viewWork: "شاهد أعمالي",
        scrollDiscover: "مرر لاكتشاف المزيد",
        languageSwitcherLabel: "اختر اللغة",
        menuOpen: "القائمة +",
        menuClose: "إغلاق X",
        socialsLabel: "روابط",
        aboutPrefix: "عن",
        aboutHighlight: "أنا",
        servicesHighlight: "الخدمات",
        projectsHighlight: "المشاريع",
        contactEyebrow: "تواصل معي",
        footerNavigation: "التنقل",
        footerLegal: "القانونية",
        footerRights: "جميع الحقوق محفوظة.",
        footerSignature: "تم التصميم والتطوير بعناية في غواتيمالا.",
    },
    ru: {
        ...en,
        greeting: "Привет, я Эктор Гарсия",
        role: "Full Stack разработчик | React · TypeScript · Python",
        navHome: "Главная",
        navAbout: "Обо мне",
        navServices: "Услуги",
        navProjects: "Проекты",
        navContact: "Контакт",
        hireMe: "Нанять меня",
        startProject: "Начать проект",
        viewWork: "Смотреть работы",
        scrollDiscover: "Прокрутите вниз",
        languageSwitcherLabel: "Выберите язык",
        servicesHighlight: "Услуги",
        projectsHighlight: "Проекты",
        footerRights: "Все права защищены.",
        footerSignature: "Создано с заботой в Гватемале.",
    },
    hi: {
        ...en,
        greeting: "नमस्ते, मैं हेक्टर गार्सिया हूँ",
        role: "फुल स्टैक डेवलपर | React · TypeScript · Python",
        navHome: "होम",
        navAbout: "मेरे बारे में",
        navServices: "सेवाएं",
        navProjects: "प्रोजेक्ट्स",
        navContact: "संपर्क",
        hireMe: "मुझे हायर करें",
        startProject: "प्रोजेक्ट शुरू करें",
        viewWork: "मेरा काम देखें",
        scrollDiscover: "जानने के लिए स्क्रॉल करें",
        languageSwitcherLabel: "भाषा चुनें",
        servicesHighlight: "सेवाएं",
        projectsHighlight: "प्रोजेक्ट्स",
        footerRights: "सभी अधिकार सुरक्षित।",
        footerSignature: "ग्वाटेमाला में देखभाल के साथ डिज़ाइन और डेवलप किया गया।",
    },
    pt: {
        ...en,
        greeting: "Olá, eu sou Héctor García",
        role: "Desenvolvedor Full Stack | React · TypeScript · Python",
        navHome: "Início",
        navAbout: "Sobre",
        navServices: "Serviços",
        navProjects: "Projetos",
        navContact: "Contato",
        hireMe: "Contrate-me",
        startProject: "Iniciar projeto",
        viewWork: "Ver meu trabalho",
        scrollDiscover: "Role para descobrir",
        languageSwitcherLabel: "Selecionar idioma",
        servicesHighlight: "Serviços",
        projectsHighlight: "Projetos",
        footerRights: "Todos os direitos reservados.",
        footerSignature: "Projetado e desenvolvido com cuidado na Guatemala.",
    },
};

export type TranslationKey = keyof TranslationDictionary;

export function getTranslation(lang: SupportedLanguage, key: TranslationKey): string {
    return translations[lang]?.[key] ?? translations.en[key];
}
