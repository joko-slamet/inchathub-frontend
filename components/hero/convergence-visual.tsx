"use client";

import Image from "next/image";
import { SiWhatsapp, SiInstagram, SiTelegram, SiFacebook } from "react-icons/si";
import { LuMail, LuGlobe } from "react-icons/lu";

const bubbleLayout = [
  { badge: "WA", icon: SiWhatsapp, color: "#25D366", className: "top-[2%] left-[-2%]", travel: { x: 78, y: 30 }, delay: 0 },
  { badge: "IG", icon: SiInstagram, color: "#E4405F", className: "top-[0%] left-[36%]", travel: { x: 46, y: 44 }, delay: 0.7 },
  { badge: "TG", icon: SiTelegram, color: "#26A5E4", className: "top-[26%] left-[-6%]", travel: { x: 88, y: 8 }, delay: 1.4 },
  { badge: "MAIL", icon: LuMail, color: undefined, className: "top-[68%] left-[-4%]", travel: { x: 82, y: -22 }, delay: 2.1 },
  { badge: "FB", icon: SiFacebook, color: "#1877F2", className: "top-[92%] left-[28%]", travel: { x: 54, y: -50 }, delay: 2.8 },
  { badge: "WEB", icon: LuGlobe, color: undefined, className: "top-[46%] left-[4%]", travel: { x: 70, y: 0 }, delay: 3.5 },
];

export function ConvergenceVisual() {
  return (
    <div
      className="relative mx-auto h-[480px] w-full max-w-lg sm:h-[560px] sm:max-w-xl lg:mx-0 lg:h-[720px] lg:max-w-none"
      aria-hidden="true"
    >
      {/* {bubbleLayout.map((bubble, index) => (
        <div key={bubble.badge} className={`absolute z-0 ${bubble.className}`}>
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.85 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="relative flex items-center gap-2 rounded-full border border-line bg-paper/95 px-3.5 py-2 shadow-[0_10px_28px_-14px_rgba(26,22,24,0.3)]"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-slate-dim text-ink/70">
              <bubble.icon className="size-3.5" style={bubble.color ? { color: bubble.color } : undefined} />
            </span>
            <span className="text-[0.7rem] font-semibold tracking-wide text-ink/60 uppercase">
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
      ))} */}

      <div className="absolute inset-0 z-10 flex items-center justify-center lg:left-auto lg:right-0 lg:w-[680px] lg:justify-end">
        <div
          aria-hidden="true"
          className="blob animate-float pointer-events-none absolute size-96 bg-signal-dim/70 blur-2xl sm:size-[28rem]"
        />
        <div className="tilt-hover relative w-full max-w-[640px] rotate-2 overflow-hidden">
          <div className="animate-float">
            <Image
              src="/images/hero-transparent.png"
              alt="Maskot robot AI ChatHub dikelilingi jendela obrolan dari berbagai kanal"
              width={1376}
              height={768}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
