"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuChevronDown, LuMessageCircleQuestion } from "react-icons/lu";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";

export function Faq({ content }: { content: SiteContent["faq"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      align="center"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
    >
      <ScrollReveal delay={0.1} className="mx-auto mt-14 max-w-3xl">
        <div className="flex flex-col gap-3">
          {content.items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <motion.div
                key={item.question}
                layout
                initial={false}
                animate={{
                  borderColor: isOpen ? "rgba(190, 30, 45, 0.3)" : "var(--color-line)",
                }}
                className={`overflow-hidden rounded-2xl border-2 transition-colors duration-200 ${
                  isOpen ? "bg-signal-dim/40" : "bg-paper"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${isOpen ? "bg-signal text-white" : "bg-slate-dim text-ink/40"}`}>
                      <LuMessageCircleQuestion className="size-4" />
                    </span>
                    <span className="text-sm font-semibold text-ink sm:text-base">{item.question}</span>
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full ${
                      isOpen ? "bg-signal text-white" : "bg-slate-dim text-ink/50"
                    }`}
                  >
                    <LuChevronDown className="size-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 pl-[3.75rem] text-sm leading-relaxed text-ink/65 sm:text-base">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </ScrollReveal>
    </Section>
  );
}
