
"use client";

import { useEffect, useState } from "react";

interface PortfolioLoaderProps {
  onComplete: () => void;
}

export default function PortfolioLoader({
  onComplete,
}: PortfolioLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const duration = 1200;
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setIsLeaving(true);

            setTimeout(() => {
              onComplete();
            }, 500);
          }, 150);
        }

        return next;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--background)] text-[var(--foreground)] transition-all duration-500 ${
        isLeaving
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
    >
      <div className="w-[min(90%,420px)]">
        {/* Name */}
        <div className="overflow-hidden">
          <h1 className="animate-[loaderText_0.8s_ease-out] text-center text-4xl font-bold tracking-[-0.05em] md:text-6xl">
            DEJLA SHARIFI
          </h1>
        </div>

        {/* Progress */}
        <div className="mt-10">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
            <span>Loading Portfolio</span>

            <span>
              {Math.floor(progress).toString().padStart(3, "0")}%
            </span>
          </div>

          {/* Progress line */}
          <div className="mt-3 h-[1px] w-full overflow-hidden bg-[var(--border)]">
            <div
              className="h-full bg-[var(--foreground)] transition-[width] duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Role */}
        <p className="mt-6 text-center font-mono text-[10px] tracking-[0.25em] text-muted">
          FRONTEND DEVELOPER
        </p>
      </div>
    </div>
  );
}
