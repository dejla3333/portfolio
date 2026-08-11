
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocaleShell from "@/components/locale-shell";

const locales = ["en", "fa", "ps"] as const;

type Locale = (typeof locales)[number];

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export const metadata: Metadata = {
  title: "Dejla Sharifi — Frontend Developer",
  description:
    "Portfolio of Dejla Sharifi, a frontend developer and creative technologist.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <LocaleShell locale={locale}>
      {children}
    </LocaleShell>
  );
}
