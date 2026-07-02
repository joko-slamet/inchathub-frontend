"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

export function PageHero({
  icon: Icon,
  heading,
  subheading,
}: {
  icon: IconType;
  heading: string;
  subheading?: string;
}) {
  return (
    <section
      className="relative overflow-hidden border-b border-line px-6 pt-16 pb-12 text-center md:px-10 md:pt-20 md:pb-14 lg:px-16"
      style={{
        backgroundColor: "var(--color-paper)",
        backgroundImage:
          "radial-gradient(circle at 50% 0%, var(--color-signal-dim) 0%, transparent 55%)",
      }}
    >
      <div className="relative mx-auto max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex size-11 items-center justify-center rounded-full border border-signal/30 bg-signal-dim text-signal"
        >
          <Icon className="size-5" />
        </motion.span>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-2xl leading-snug font-semibold tracking-tight text-ink sm:text-3xl"
        >
          {heading}
        </motion.p>

        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-base leading-relaxed text-ink/65 sm:text-lg"
          >
            {subheading}
          </motion.p>
        )}
      </div>
    </section>
  );
}
