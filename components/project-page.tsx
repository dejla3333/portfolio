"use client";

import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Reveal from "./reveal";

interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  challenges?: string;
  learned?: string;
}

interface ProjectPageProps {
  project: Project;
  locale: string;
}

export default function ProjectPage({
  project,
  locale,
}: ProjectPageProps) {
  const isRTL = locale !== "en";

  return (
    <main
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen"
    >
      <div className="container-main py-24 md:py-32">

        {/* Back */}
        <a
          href={`/${locale}#projects`}
          className="mb-16 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-[var(--foreground)]"
        >
          <ArrowLeft size={16} />
          <span>
            {isRTL ? "بازگشت به پروژه‌ها" : "Back to projects"}
          </span>
        </a>

        {/* Header */}
        <Reveal>
          <p className="mb-5 font-mono text-xs text-muted">
            PROJECT / {project.slug.toUpperCase()}
          </p>

          <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-8xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-muted">
            {project.description}
          </p>
        </Reveal>

        {/* Image */}
        <Reveal delay={0.1}>
          <div className="mt-16 aspect-[16/8] overflow-hidden border border-theme bg-card">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} project screenshot`}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-8xl font-bold text-muted/10">
                {project.title.charAt(0)}
              </div>
            )}
          </div>
        </Reveal>

        {/* Main Content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_2fr]">

          {/* Sidebar */}
          <Reveal>
            <aside>
              <p className="font-mono text-xs text-muted">
                TECH STACK
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-theme px-3 py-2 text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[var(--foreground)] px-5 py-3 text-sm transition-colors hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                  >
                    {isRTL ? "نسخه آنلاین" : "Live Demo"}
                    <ArrowUpRight size={15} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-theme px-5 py-3 text-sm transition-colors hover:border-[var(--foreground)]"
                  >
                    GitHub
                    <Github size={15} />
                  </a>
                )}
              </div>
            </aside>
          </Reveal>

          {/* Details */}
          <div className="space-y-16">

            {/* Problem */}
            {project.problem && (
              <Reveal>
                <section>
                  <p className="mb-5 font-mono text-xs text-muted">
                    01 — PROBLEM
                  </p>

                  <p className="text-xl leading-8">
                    {project.problem}
                  </p>
                </section>
              </Reveal>
            )}

            {/* Solution */}
            {project.solution && (
              <Reveal>
                <section>
                  <p className="mb-5 font-mono text-xs text-muted">
                    02 — SOLUTION
                  </p>

                  <p className="text-xl leading-8">
                    {project.solution}
                  </p>
                </section>
              </Reveal>
            )}

            {/* Features */}
            {project.features &&
              project.features.length > 0 && (
                <Reveal>
                  <section>
                    <p className="mb-5 font-mono text-xs text-muted">
                      03 — FEATURES
                    </p>

                    <ul className="space-y-4">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="border-b border-theme pb-4 text-lg"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </section>
                </Reveal>
              )}

            {/* Challenges */}
            {project.challenges && (
              <Reveal>
                <section>
                  <p className="mb-5 font-mono text-xs text-muted">
                    04 — CHALLENGES
                  </p>

                  <p className="text-lg leading-8 text-muted">
                    {project.challenges}
                  </p>
                </section>
              </Reveal>
            )}

            {/* What I Learned */}
            {project.learned && (
              <Reveal>
                <section>
                  <p className="mb-5 font-mono text-xs text-muted">
                    05 — WHAT I LEARNED
                  </p>

                  <p className="text-lg leading-8 text-muted">
                    {project.learned}
                  </p>
                </section>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}