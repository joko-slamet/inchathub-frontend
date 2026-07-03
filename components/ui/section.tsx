import type { CSSProperties, ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "paper" | "ink";
  className?: string;
  style?: CSSProperties;
}

export function Eyebrow({
  children,
  tone = "paper",
}: {
  children: ReactNode;
  tone?: "paper" | "ink";
}) {
  return (
    <span
      className={`sticker items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.06em] uppercase ${
        tone === "ink"
          ? "bg-paper/10 text-paper"
          : "bg-signal-dim text-signal"
      }`}
    >
      <span className={`size-1.5 rounded-full ${tone === "ink" ? "bg-paper" : "bg-signal"}`} />
      {children}
    </span>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  align = "left",
  tone = "paper",
  className = "",
  style,
}: SectionProps) {
  const isCenter = align === "center";

  return (
    <section
      id={id}
      className={`relative scroll-mt-20 px-6 py-20 sm:py-28 md:px-10 lg:px-16 ${
        tone === "ink" ? "bg-ink text-paper" : "bg-paper text-ink"
      } ${className}`}
      style={style}
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
          <div className={isCenter ? "flex flex-col items-center" : ""}>
            {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
            <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-[2.75rem]">
              {title}
            </h2>
            {description && (
              <p
                className={`mt-5 text-base leading-relaxed sm:text-lg ${
                  tone === "ink" ? "text-paper/75" : "text-ink/70"
                }`}
              >
                {description}
              </p>
            )}
          </div>
        </ScrollReveal>
        {children}
      </div>
    </section>
  );
}
