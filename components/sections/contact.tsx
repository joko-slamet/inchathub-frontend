"use client";

import { useState, type FormEvent } from "react";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { LuMapPin, LuSend, LuMail } from "react-icons/lu";
import type { IconType } from "react-icons";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { mapEmbedSrc, type SiteContent } from "@/content/site-content";

// Positional match with contact.infoCards in content — keep order in sync.
const cardIcons: { icon: IconType; color?: string }[] = [
  { icon: SiWhatsapp, color: "#25D366" },
  { icon: SiInstagram, color: "#E4405F" },
  { icon: LuMapPin },
  { icon: LuMail },
  { icon: LuMail },
];

export function Contact({ content }: { content: SiteContent["contact"] }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    // No backend yet — log the submission and show a confirmation instead.
    console.log("Contact form submitted:", payload);
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <Section
      id="hubungi-kami"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain}{" "}
          <span className="text-signal">{content.titleAccent}</span>
        </>
      }
      description={content.description}
    >
      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <ScrollReveal>
          <div className="flex flex-col gap-4">
            {content.infoCards.map((card, index) => {
              const { icon: Icon, color } = cardIcons[index];
              return (
                <a
                  key={card.label}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5 shadow-[0_16px_40px_-28px_rgba(20,16,15,0.3)] transition-colors hover:border-ink/20"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-signal-dim">
                    <Icon
                      className="size-5"
                      style={color ? { color } : undefined}
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.65rem] tracking-widest text-ink/40 uppercase">
                      {card.label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/80">
                      {card.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 rounded-2xl border border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(20,16,15,0.3)] sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-ink/60">
                  {content.form.nameLabel}
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={content.form.namePlaceholder}
                  className="rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-ink/60">
                  {content.form.emailLabel}
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={content.form.emailPlaceholder}
                  className="rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
                />
              </label>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-ink/60">
                {content.form.phoneLabel}
              </span>
              <input
                type="tel"
                name="phone"
                placeholder={content.form.phonePlaceholder}
                className="rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-ink/60">
                {content.form.messageLabel}
              </span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder={content.form.messagePlaceholder}
                className="resize-none rounded-lg border border-line bg-paper px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 focus:outline-none"
              />
            </label>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              {content.form.submitLabel}
              <LuSend className="size-4" />
            </Button>

            {submitted && (
              <p className="rounded-lg bg-ok/10 px-3.5 py-2.5 text-sm text-ok">
                {content.form.successMessage}
              </p>
            )}
          </form>
        </ScrollReveal>
        <ScrollReveal
          delay={0.15}
          className="overflow-hidden rounded-2xl border border-line shadow-[0_16px_40px_-28px_rgba(20,16,15,0.3)] lg:col-span-2"
        >
          <iframe
            src={mapEmbedSrc}
            title={content.mapTitle}
            width="100%"
            height="360"
            style={{ border: 0, display: "block" }}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </ScrollReveal>
      </div>
    </Section>
  );
}
