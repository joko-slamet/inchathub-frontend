"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SiWhatsapp, SiInstagram, SiTelegram, SiFacebook } from "react-icons/si";
import { LuMail, LuGlobe } from "react-icons/lu";

const bubbleLayout = [
  { badge: "WhatsApp", icon: SiWhatsapp, color: "#25D366", className: "top-[5%] left-[0%]", delay: 0 },
  { badge: "Instagram", icon: SiInstagram, color: "#E4405F", className: "top-[0%] left-[38%]", delay: 0.5 },
  { badge: "Telegram", icon: SiTelegram, color: "#26A5E4", className: "top-[28%] left-[-4%]", delay: 1.0 },
  { badge: "Email", icon: LuMail, color: "#808184", className: "top-[68%] left-[-2%]", delay: 1.5 },
  { badge: "Facebook", icon: SiFacebook, color: "#1877F2", className: "top-[90%] left-[30%]", delay: 2.0 },
  { badge: "Website", icon: LuGlobe, color: "#1a1618", className: "top-[48%] left-[6%]", delay: 2.5 },
];

export function ConvergenceVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto h-[480px] w-full max-w-lg sm:h-[560px] sm:max-w-xl lg:mx-0 lg:h-[720px] lg:max-w-none"
      aria-hidden="true"
    >
      {/* Channel bubbles */}
      {bubbleLayout.map((bubble, index) => (
        <motion.div
          key={bubble.badge}
          className={`absolute z-20 ${bubble.className}`}
          initial={{ opacity: 0, x: -20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.3 + bubble.delay, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
            transition={{ duration: 3.5 + index * 0.4, repeat: Infinity, ease: "easeInOut", delay: bubble.delay }}
            className="relative flex items-center gap-2 rounded-full border border-line bg-paper/95 px-3.5 py-2 shadow-[0_10px_28px_-14px_rgba(26,22,24,0.35)] backdrop-blur-sm"
          >
            <span
              className="flex size-7 items-center justify-center rounded-full shadow-sm"
              style={{ backgroundColor: `${bubble.color}18` }}
            >
              <bubble.icon className="size-3.5" style={{ color: bubble.color }} />
            </span>
            <span className="text-[0.7rem] font-semibold tracking-wide text-ink/65">
              {bubble.badge}
            </span>

            {/* Animated dot traveling to center */}
            {!shouldReduceMotion && (
              <motion.span
                className="pointer-events-none absolute top-1/2 left-full -translate-y-1/2 size-2 rounded-full"
                style={{ backgroundColor: bubble.color }}
                initial={{ opacity: 0, x: 0 }}
                animate={{
                  x: [0, 20, 60, 100],
                  opacity: [0, 1, 0.8, 0],
                  scale: [1, 0.9, 0.7, 0.4],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  delay: bubble.delay + 0.8,
                  ease: "easeIn",
                }}
              />
            )}
          </motion.div>
        </motion.div>
      ))}

      {/* Main hero image area */}
      <div className="absolute inset-0 z-10 flex items-center justify-center lg:left-auto lg:right-0 lg:w-[680px] lg:justify-end">
        {/* Layered background blobs */}
        <div
          aria-hidden="true"
          className="blob animate-pulse-glow pointer-events-none absolute size-[26rem] bg-signal-dim/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="blob-2 animate-float-slow pointer-events-none absolute size-56 bg-slate-dim/50 blur-2xl translate-x-20 translate-y-12"
        />

        {/* Decorative orbit ring */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute size-[420px] animate-spin-slow rounded-full border border-dashed border-signal/10 lg:size-[560px]"
        />

        {/* Image */}
        <div className="relative w-full max-w-[640px] rotate-2 overflow-visible">
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/hero-transparent.png"
              alt="Maskot robot AI ChatHub dikelilingi jendela obrolan dari berbagai kanal"
              width={1376}
              height={768}
              priority
              className="h-auto w-full object-cover drop-shadow-[0_32px_48px_rgba(190,30,45,0.25)]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
