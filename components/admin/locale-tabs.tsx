"use client";

import { locales, type Locale } from "@/content/site-content";

const localeLabels: Record<Locale, string> = { id: "Indonesia", en: "English" };

export function LocaleTabs({ active, onChange }: { active: Locale; onChange: (locale: Locale) => void }) {
  return (
    <div className="flex items-center gap-1 rounded-full border border-line p-1">
      {locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase transition-colors ${
            l === active ? "bg-ink text-paper" : "text-ink/50 hover:text-ink"
          }`}
        >
          {localeLabels[l]}
        </button>
      ))}
    </div>
  );
}
