"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  locale: string;
}

const navigation = {
  en: [
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["contact", "Contact"],
  ],
  fa: [
    ["about", "درباره من"],
    ["skills", "مهارت‌ها"],
    ["projects", "پروژه‌ها"],
    ["contact", "تماس"],
  ],
  ps: [
    ["about", "زما په اړه"],
    ["skills", "مهارتونه"],
    ["projects", "پروژې"],
    ["contact", "اړیکه"],
  ],
};

export default function Header({ locale }: HeaderProps) {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  const currentLocale =
    locale === "fa" || locale === "ps" ? locale : "en";

  const links = navigation[currentLocale];

  function changeLanguage(language: "en" | "fa" | "ps") {
    router.push(`/${language}`);
    setMenuOpen(false);
  }

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-theme bg-[var(--background)]/90 backdrop-blur-md">
      <div className="container-main flex h-20 items-center justify-between">

        {/* Logo */}
        <button
          type="button"
          onClick={() => router.push(`/${currentLocale}`)}
          className="text-sm font-bold tracking-[0.25em]"
        >
          DEJLA
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`/${currentLocale}#${id}`}
              className="text-sm text-muted transition-colors duration-300 hover:text-[var(--foreground)]"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-5 md:flex">

          {/* Languages */}
          <div className="flex items-center gap-3 text-xs">
            <button
              type="button"
              onClick={() => changeLanguage("en")}
              className={
                currentLocale === "en"
                  ? "font-semibold"
                  : "text-muted transition-colors hover:text-[var(--foreground)]"
              }
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("fa")}
              className={
                currentLocale === "fa"
                  ? "font-semibold"
                  : "text-muted transition-colors hover:text-[var(--foreground)]"
              }
            >
              فارسی
            </button>

            <button
              type="button"
              onClick={() => changeLanguage("ps")}
              className={
                currentLocale === "ps"
                  ? "font-semibold"
                  : "text-muted transition-colors hover:text-[var(--foreground)]"
              }
            >
              پښتو
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="
              group relative flex h-9 w-9 items-center justify-center
              rounded-full border border-theme
              transition-all duration-300
              hover:scale-105
              hover:bg-card
            "
          >
            <Sun
              size={16}
              className="
                absolute
                rotate-90 scale-0
                transition-all duration-300
                dark:rotate-0 dark:scale-100
              "
            />

            <Moon
              size={16}
              className="
                rotate-0 scale-100
                transition-all duration-300
                dark:-rotate-90 dark:scale-0
              "
            />
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Mobile Theme */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full border border-theme
              transition-all duration-300
              hover:scale-105
              hover:bg-card
            "
          >
            {resolvedTheme === "dark" ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full border border-theme
              transition-all duration-300
              hover:bg-card
            "
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-theme md:hidden">
          <div className="container-main py-6">

            <nav className="flex flex-col gap-5">
              {links.map(([id, label]) => (
                <a
                  key={id}
                  href={`/${currentLocale}#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg transition-colors hover:text-muted"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Mobile Languages */}
            <div className="mt-6 flex gap-4 border-t border-theme pt-5 text-sm">
              <button onClick={() => changeLanguage("en")}>
                EN
              </button>

              <button onClick={() => changeLanguage("fa")}>
                فارسی
              </button>

              <button onClick={() => changeLanguage("ps")}>
                پښتو
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}