
"use client";

import Image from "next/image";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiScikitlearn,
  SiGit,
  SiGithub,
} from "@icons-pack/react-simple-icons";

import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Linkedin,
  BrainCircuit,
} from "lucide-react";

import Reveal from "./reveal";

interface PortfolioProps {
  locale: string;
}

/* =========================
   TRANSLATIONS
========================= */

const content = {
  en: {
    role: "Frontend Developer",
    intro:
      "I build useful digital experiences with code, exploring the intersection of web development, AI, and technology.",
    viewProjects: "View Projects",
    contact: "Contact Me",
    about: "ABOUT",
    skills: "SKILLS",
    projects: "PROJECTS",
    journey: "LEARNING JOURNEY",
    contactTitle: "LET'S BUILD",
    contactTitle2: "SOMETHING USEFUL.",
    contactText:
      "Have an idea, project, or opportunity? Let's connect.",
    liveDemo: "Live Demo",
    github: "GitHub",
  },

  fa: {
    role: "توسعه‌دهنده فرانت‌اند ",
    intro:
      "با کدنویسی تجربه‌های دیجیتال کاربردی می‌سازم و در تقاطع توسعه وب، هوش مصنوعی و تکنولوژی فعالیت می‌کنم.",
    viewProjects: "مشاهده پروژه‌ها",
    contact: "تماس با من",
    about: "درباره من",
    skills: "مهارت‌ها",
    projects: "پروژه‌ها",
    journey: "مسیر یادگیری",
    contactTitle: "بیایید چیزی",
    contactTitle2: "کاربردی بسازیم.",
    contactText:
      "ایده، پروژه یا فرصتی دارید؟ با من در ارتباط باشید.",
    liveDemo: "نمایش پروژه",
    github: "گیت‌هاب",
  },

  ps: {
    role: "فرنټ‌اینډ پراختیاکوونکې ",
    intro:
      "زه د کوډ په وسیله ګټورې ډیجیټل تجربې جوړوم او د ویب پراختیا، AI او ټکنالوژۍ په برخه کې زده کړه کوم.",
    viewProjects: "پروژې وګورئ",
    contact: "اړیکه",
    about: "زما په اړه",
    skills: "مهارتونه",
    projects: "پروژې",
    journey: "د زده کړې سفر",
    contactTitle: "راځئ چې یو",
    contactTitle2: "ګټور شی جوړ کړو.",
    contactText:
      "نظر، پروژه یا فرصت لرئ؟ راځئ اړیکه ونیسو.",
    liveDemo: "ژوندۍ پروژه",
    github: "GitHub",
  },
};

/* =========================
   PROJECTS
========================= */

const projects = [
  {
    number: "01",
    title: "Opportunity Hub",
    description: "Opportunity Finder Platform",
    tech: ["Next.js", "React", "TypeScript"],
    demo: "https://opportunity-hub-t5ur.vercel.app/",
    github: "https://github.com/dejla3333/Opportunity-Hub.git",
  },

  {
    number: "02",
    title: "FikFinder",
    description: "Fuel Analysis Web Application",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://dejla3333.github.io/fikfinder./",
    github: "https://github.com/dejla3333/heart-ai-app.git",
  },

  {
    number: "03",
    title: "World Explorer",
    description: "Interactive country exploration application",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/dejla3333/World-Explorer.git",
  },

  {
    number: "04",
    title: "Heart Disease Prediction AI",
    description: "Machine learning prediction application",
    tech: ["Python", "Scikit-learn", "FastAPI"],
    github: "https://github.com/dejla3333/heart-ai-app.git",
  },

  {
    number: "05",
    title: "Movie Watchlist",
    description: "Movie discovery and watchlist application",
    tech: ["React", "JavaScript"],
    github: "https://github.com/dejla3333/movie-watchlist.git",
    
  },
{
  number: "06",
  title: "Book Store",
  description: "Online Book Shopping Platform",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/dejla3333/book-.git",
},
];

/* =========================
   SKILLS
========================= */

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Python", icon: SiPython },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },

  // Prompt Engineering
  { name: "Prompt Engineering", icon: BrainCircuit },
];

/* =========================
   LEARNING JOURNEY
========================= */

const journey = [
  ["2025", "Started Web Development"],
  ["2026", "React & Next.js"],
  ["2026", "Python & AI"],
  ["NOW", "Building Real-World Projects"],
];

/* =========================
   PORTFOLIO
========================= */

export default function Portfolio({ locale }: PortfolioProps) {
  const text =
    content[locale as keyof typeof content] ?? content.en;

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="min-h-screen py-20 md:py-28">
        <div className="container-main">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_360px]">

            {/* Hero Text */}

            <div>
              <Reveal>
                <p className="mb-6 font-mono text-xs tracking-[0.25em] text-muted">
                  HELLO, I'M
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="max-w-5xl text-[clamp(3.5rem,10vw,9rem)] font-bold leading-[0.85] tracking-[-0.07em]">
                  DEJLA
                  <br />
                  SHARIFI
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-10 max-w-2xl text-xl leading-relaxed text-muted md:text-2xl">
                  {text.role}
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <p className="mt-5 max-w-xl leading-7 text-muted">
                  {text.intro}
                </p>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-10 flex flex-wrap gap-3">

                  <a
                    href={`/${locale}#projects`}
                    className="group inline-flex items-center gap-2 border border-[var(--foreground)] px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                  >
                    {text.viewProjects}

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>

                  <a
                    href={`/${locale}#contact`}
                    className="inline-flex items-center gap-2 border border-theme px-6 py-3 text-sm transition-colors duration-300 hover:bg-card"
                  >
                    {text.contact}
                  </a>

                </div>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="mt-24 flex items-center gap-2 text-xs text-muted">
                  <ArrowDown
                    size={14}
                    className="animate-bounce"
                  />
                  SCROLL TO EXPLORE
                </div>
              </Reveal>
            </div>

            {/* Profile Image */}

            <Reveal delay={0.2}>
              <div className="relative mx-auto w-full max-w-[360px]">

                <div className="absolute -inset-5 animate-[spin_15s_linear_infinite] rounded-full border border-dashed border-theme opacity-50" />

                <div className="absolute -inset-10 rounded-full border border-theme opacity-20" />

                <div className="relative aspect-square overflow-hidden rounded-full border border-theme bg-card shadow-2xl">
                  <Image
                    src="/profile.jpeg"
                    alt="Dejla Sharifi"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="360px"
                  />
                </div>

                <span className="absolute right-0 top-10 h-3 w-3 animate-pulse rounded-full bg-[var(--foreground)]" />

                <span className="absolute bottom-12 left-0 h-2 w-2 animate-pulse rounded-full bg-[var(--foreground)]" />

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="border-t border-theme py-28"
      >
        <div className="container-main">

          <Reveal>
            <p className="mb-12 font-mono text-xs text-muted">
              01 — {text.about}
            </p>
          </Reveal>

          <div className="grid gap-12 lg:grid-cols-2">

            <Reveal>
              <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Curious about how things work.
                <br />

                <span className="text-muted">
                  Driven to build useful things.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="border border-theme bg-card p-6 font-mono text-sm leading-8">

                <p>
                  <span className="text-muted">
                    const
                  </span>{" "}
                  aboutMe = {"{"}
                </p>

                <p className="pl-5">
                  focus: <span>"Web Development"</span>,
                </p>

                <p className="pl-5">
                  interests: [
                  <span>"AI"</span>,
                  <span>"Technology"</span>],
                </p>

                <p className="pl-5">
                  currentlyLearning: [
                  <span>"Next.js"</span>,
                  <span>"Python"</span>]
                </p>

                <p>{"};"}</p>

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section
        id="skills"
        className="border-t border-theme py-28"
      >
        <div className="container-main">

          <Reveal>
            <p className="mb-12 font-mono text-xs text-muted">
              02 — {text.skills}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 border-l border-t border-theme sm:grid-cols-3 lg:grid-cols-4">

            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <Reveal
                  key={skill.name}
                  delay={index * 0.04}
                >
                  <div className="group relative flex min-h-[150px] flex-col items-center justify-center gap-4 border-b border-r border-theme p-6 text-center transition-all duration-300 hover:bg-card">

                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--foreground)] opacity-10 blur-2xl" />
                    </div>

                    <div className="relative">
                      <Icon
                        size={40}
                        className="transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:rotate-3"
                      />
                    </div>

                    <span className="relative text-sm font-medium transition-transform duration-300 group-hover:translate-y-1">
                      {skill.name}
                    </span>

                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[var(--foreground)] transition-all duration-500 group-hover:w-12" />

                  </div>
                </Reveal>
              );
            })}

          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="border-t border-theme py-28"
      >
        <div className="container-main">

          <Reveal>
            <p className="mb-12 font-mono text-xs text-muted">
              03 — {text.projects}
            </p>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">

            {projects.map((project, index) => (

              <Reveal
                key={project.title}
                delay={index * 0.06}
              >

                <article className="group relative overflow-hidden border border-theme bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                  <div className="relative aspect-[16/10] overflow-hidden border-b border-theme bg-[var(--background)]">

                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                      <span className="text-[7rem] font-bold tracking-[-0.08em] text-muted/10 transition-all duration-700 group-hover:text-muted/20">
                        {project.number}
                      </span>
                    </div>

                    <span className="absolute left-5 top-5 font-mono text-xs text-muted">
                      {project.number}
                    </span>

                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center border border-theme transition-all duration-500 group-hover:rotate-45 group-hover:bg-[var(--foreground)] group-hover:text-[var(--background)]">

                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-500 group-hover:-rotate-45"
                      />

                    </div>
                  </div>

                  <div className="p-6">

                    <h3 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">

                      {project.tech.map((tool) => (
                        <span
                          key={tool}
                          className="border border-theme px-3 py-1.5 font-mono text-[11px] text-muted transition-colors duration-300 group-hover:text-[var(--foreground)]"
                        >
                          {tool}
                        </span>
                      ))}

                    </div>

                    {/* Project Links */}

                    <div className="mt-8 flex flex-wrap gap-3">

                      {/* Live Demo - Only first two projects */}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-[var(--foreground)] px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                        >
                          {text.liveDemo}
                          <ArrowUpRight size={15} />
                        </a>
                      )}

                      {/* GitHub */}

                      {project.github !== "#" ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-theme px-5 py-2.5 text-sm transition-all duration-300 hover:bg-card"
                        >
                          <SiGithub size={15} />
                          {text.github}
                        </a>
                      ) : (
                        <span className="inline-flex cursor-not-allowed items-center gap-2 border border-theme px-5 py-2.5 text-sm text-muted">
                          <SiGithub size={15} />
                          {text.github}
                        </span>
                      )}

                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--foreground)] transition-all duration-700 group-hover:w-full" />

                </article>

              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}

      <section className="border-t border-theme py-28">
        <div className="container-main">

          <Reveal>
            <p className="mb-12 font-mono text-xs text-muted">
              04 — {text.journey}
            </p>
          </Reveal>

          <div className="border-t border-theme">

            {journey.map(([year, title]) => (

              <Reveal key={`${year}-${title}`}>

                <div className="grid grid-cols-[100px_1fr] border-b border-theme py-8 md:grid-cols-[180px_1fr]">

                  <span className="font-mono text-sm text-muted">
                    {year}
                  </span>

                  <span className="text-xl font-medium md:text-3xl">
                    {title}
                  </span>

                </div>

              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        id="contact"
        className="border-t border-theme py-32"
      >
        <div className="container-main">

          <Reveal>

            <p className="mb-8 font-mono text-xs text-muted">
              05 — CONTACT
            </p>

            <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-8xl">
              {text.contactTitle}
              <br />
              {text.contactTitle2}
            </h2>

            <p className="mt-8 max-w-xl text-lg text-muted">
              {text.contactText}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <a
                href="mailto:dejlasharifi@gmail.com"
                className="inline-flex items-center gap-2 border border-[var(--foreground)] px-6 py-3 text-sm transition-colors duration-300 hover:bg-[var(--foreground)] hover:text-[var(--background)]"
              >
                <Mail size={16} />
                Email Me
              </a>

              <a
                href="https://github.com/dejla3333"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-theme px-6 py-3 text-sm transition-colors duration-300 hover:bg-card"
              >
                <SiGithub size={16} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/dejla-sharifi-139461379"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-theme px-6 py-3 text-sm transition-colors duration-300 hover:bg-card"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

            </div>

          </Reveal>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-theme py-10">

        <div className="container-main">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* Name */}

            <div>
              <p className="text-lg font-semibold tracking-tight">
                DEJLA SHARIFI
              </p>

              <p className="mt-1 font-mono text-xs text-muted">
                FRONTEND DEVELOPER
              </p>
            </div>

            {/* Navigation */}

            <nav className="flex flex-wrap gap-6 text-sm text-muted">

              <a
                href={`/${locale}#about`}
                className="transition-colors hover:text-[var(--foreground)]"
              >
                About
              </a>

              <a
                href={`/${locale}#skills`}
                className="transition-colors hover:text-[var(--foreground)]"
              >
                Skills
              </a>

              <a
                href={`/${locale}#projects`}
                className="transition-colors hover:text-[var(--foreground)]"
              >
                Projects
              </a>

              <a
                href={`/${locale}#contact`}
                className="transition-colors hover:text-[var(--foreground)]"
              >
                Contact
              </a>

            </nav>

            {/* Social */}

            <div className="flex items-center gap-3">

              <a
                href="https://github.com/dejla3333"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center border border-theme transition-all duration-300 hover:-translate-y-1 hover:bg-card"
              >
                <SiGithub size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/dejla-sharifi-139461379"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border border-theme transition-all duration-300 hover:-translate-y-1 hover:bg-card"
              >
                <Linkedin size={17} />
              </a>

              <a
                href="mailto:dejlasharifi@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center border border-theme transition-all duration-300 hover:-translate-y-1 hover:bg-card"
              >
                <Mail size={17} />
              </a>

            </div>

          </div>

          {/* Bottom line */}

          <div className="mt-10 border-t border-theme pt-5">

            <p className="font-mono text-[11px] text-muted">
              © 2026 DEJLA SHARIFI
            </p>

          </div>

        </div>

      </footer>
    </>
  );
}