
"use client";

import { useEffect, useState } from "react";

import Portfolio from "../components/portfolio";
import PortfolioLoader from "../components/portfolio-loader";

interface PortfolioPageProps {
  locale: string;
}

export default function PortfolioPage({
  locale,
}: PortfolioPageProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem(
      "dejla-portfolio-loaded"
    );

    if (hasLoaded) {
      setLoading(false);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem(
      "dejla-portfolio-loaded",
      "true"
    );

    setLoading(false);
  };

  return (
    <>
      {loading && (
        <PortfolioLoader onComplete={handleComplete} />
      )}

      <main
        className={`transition-opacity duration-700 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Portfolio locale={locale} />
      </main>
    </>
  );
}