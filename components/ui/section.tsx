import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
  tone?: "paper" | "ink";
  className?: string;
}

export function Eyebrow({
  children,
  tone = "paper",
}: {
  children: ReactNode;
  tone?: "paper" | "ink";
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-8 ${tone === "ink" ? "bg-paper/40" : "bg-signal"}`}
      />
      <span
        className={`font-mono text-xs tracking-[0.18em] uppercase ${
          tone === "ink" ? "text-paper/70" : "text-ink/60"
        }`}
      >
        {children}
      </span>
    </div>
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
}: SectionProps) {
  const isCenter = align === "center";

  return (
    <section
      id={id}
      className={`relative scroll-mt-20 px-6 py-20 sm:py-28 md:px-10 lg:px-16 ${
        tone === "ink" ? "bg-ink text-paper" : "bg-paper text-ink"
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
          <div className={isCenter ? "flex flex-col items-center" : ""}>
            <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]">
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
