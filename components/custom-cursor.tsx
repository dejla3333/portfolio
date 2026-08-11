
"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState("D");

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;

      setHovered(true);

      const cursorText = target.dataset.cursor;

      if (cursorText) {
        setLabel(cursorText);
      } else {
        setLabel("D");
      }
    };

    const handleLeave = () => {
      setHovered(false);
      setLabel("D");
    };

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll(
      "[data-cursor], a, button"
    );

    elements.forEach((element) => {
      element.addEventListener("mouseenter", handleEnter);
      element.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      elements.forEach((element) => {
        element.removeEventListener("mouseenter", handleEnter);
        element.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      className={`
        pointer-events-none fixed left-0 top-0 z-[9999]
        hidden -translate-x-1/2 -translate-y-1/2
        items-center justify-center
        rounded-full
        border border-[var(--foreground)]
        bg-[var(--foreground)]
        text-[var(--background)]
        md:flex
        transition-all duration-300 ease-out
        ${hovered ? "h-20 w-20" : "h-10 w-10"}
      `}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)
          translate(-50%, -50%)`,
      }}
    >
      <span
        className={`
          font-mono font-bold
          transition-all duration-300
          ${hovered ? "text-[10px] tracking-[0.12em]" : "text-sm"}
        `}
      >
        {label}
      </span>
    </div>
  );
}