"use client";

import { locales, type Locale } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";

const localeLabels: Record<Locale, string> = { id: "ID", en: "EN" };

export function LocaleSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div className={`flex items-center gap-1.5 text-xs font-semibold uppercase ${className}`}>
      {locales.map((l, index) => (
        <span key={l} className="flex items-center gap-1.5">
          {index > 0 && <span className="text-ink/20">/</span>}
          <button
            type="button"
            onClick={() => setLocale(l)}
            aria-current={l === locale ? "true" : undefined}
            className={l === locale ? "font-semibold text-ink" : "text-ink/40 hover:text-ink"}
          >
            {localeLabels[l]}
          </button>
        </span>
      ))}
    </div>
  );
}
