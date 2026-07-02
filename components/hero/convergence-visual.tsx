"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Camera, Send, Mail, MessageSquare, Globe } from "lucide-react";
import { InboxPreviewCard } from "@/components/hero/inbox-preview-card";

const bubbleLayout = [
  { badge: "WA", icon: MessageCircle, className: "top-[2%] left-[-2%]", travel: { x: 78, y: 30 }, delay: 0 },
  { badge: "IG", icon: Camera, className: "top-[0%] left-[36%]", travel: { x: 46, y: 44 }, delay: 0.7 },
  { badge: "TG", icon: Send, className: "top-[26%] left-[-6%]", travel: { x: 88, y: 8 }, delay: 1.4 },
  { badge: "MAIL", icon: Mail, className: "top-[68%] left-[-4%]", travel: { x: 82, y: -22 }, delay: 2.1 },
  { badge: "FB", icon: MessageSquare, className: "top-[92%] left-[28%]", travel: { x: 54, y: -50 }, delay: 2.8 },
  { badge: "WEB", icon: Globe, className: "top-[46%] left-[4%]", travel: { x: 70, y: 0 }, delay: 3.5 },
];

export function ConvergenceVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto h-[380px] w-full max-w-sm sm:h-[440px] sm:max-w-md lg:mx-0 lg:h-[520px] lg:max-w-none"
      aria-hidden="true"
    >
      {bubbleLayout.map((bubble, index) => (
        <div key={bubble.badge} className={`absolute z-0 ${bubble.className}`}>
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative flex items-center gap-2 rounded-xl border border-line bg-paper/95 px-3 py-2 shadow-[0_8px_24px_-14px_rgba(20,16,15,0.3)]"
          >
            <span className="flex size-7 items-center justify-center rounded-lg bg-ink text-paper">
              <bubble.icon className="size-3.5" strokeWidth={1.75} />
            </span>
            <span className="font-mono text-[0.65rem] tracking-wider text-ink/60 uppercase">
              {bubble.badge}
            </span>

            {!shouldReduceMotion && (
              <motion.span
                className="pointer-events-none absolute top-1/2 left-1/2 size-1.5 rounded-full bg-signal"
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{
                  x: [0, bubble.travel.x],
                  y: [0, bubble.travel.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 2.4,
                  delay: bubble.delay,
                  ease: "easeIn",
                }}
              />
            )}
          </motion.div>
        </div>
      ))}

      <div className="absolute inset-0 z-10 flex items-center justify-center lg:left-auto lg:right-0 lg:w-[360px] lg:justify-end">
        <InboxPreviewCard />
      </div>
    </div>
  );
}
