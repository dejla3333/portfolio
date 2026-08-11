
"use client";

import type { ReactNode } from "react";
import Header from "./header";
import ThemeProvider from "./theme-provider";

interface LocaleShellProps {
  children: ReactNode;
  locale: string;
}

export default function LocaleShell({
  children,
  locale,
}: LocaleShellProps) {
  return (
    <ThemeProvider>
      <Header locale={locale} />
      {children}
    </ThemeProvider>
  );
}
