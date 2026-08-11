"use client";

import { motion } from "framer-motion";

const snippets = [
  {
    code: `const developer = "Dejla";`,
    className: "left-[3%] top-[20%]",
    delay: 0,
  },
  {
    code: `const stack = ["React", "Next.js", "TypeScript"];`,
    className: "right-[3%] top-[30%]",
    delay: 1.2,
  },
  {
    code: `developer.build();`,
    className: "left-[8%] bottom-[20%]",
    delay: 2,
  },
  {
    code: `return <Future />;`,
    className: "right-[10%] bottom-[15%]",
    delay: 0.7,
  },
];

export default function CodeFloat() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
    >
      {snippets.map((snippet, index) => (
        <motion.div
          key={index}
          className={`absolute ${snippet.className} max-w-[280px] font-mono text-xs text-muted`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.25, 0.55, 0.25],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            delay: snippet.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="mr-2 text-muted">{"//"}</span>
          {snippet.code}
        </motion.div>
      ))}
    </div>
  );
}