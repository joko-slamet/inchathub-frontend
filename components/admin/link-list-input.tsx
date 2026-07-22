"use client";

import { LuTrash2, LuPlus } from "react-icons/lu";
import type { InternalLink } from "@/lib/ai-article-types";

export function LinkListInput({
  label,
  hint,
  values,
  onChange,
}: {
  label: string;
  hint?: string;
  values: InternalLink[];
  onChange: (values: InternalLink[]) => void;
}) {
  function update(index: number, patch: Partial<InternalLink>) {
    onChange(values.map((v, i) => (i === index ? { ...v, ...patch } : v)));
  }

  function add() {
    onChange([...values, { url: "", description: "" }]);
  }

  function remove(index: number) {
    onChange(values.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-ink/60">{label}</span>
      {hint && <p className="text-xs text-ink/45">{hint}</p>}
      <div className="mt-1 flex flex-col gap-2">
        {values.map((link, index) => (
          <div key={index} className="flex items-start gap-2 rounded-lg border border-line p-2.5">
            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <input
                type="text"
                value={link.url}
                onChange={(e) => update(index, { url: e.target.value })}
                placeholder="/pricing atau https://..."
                className="w-full rounded-lg border border-line px-3 py-2 text-sm text-ink focus:border-ink/40 focus:outline-none"
              />
              <input
                type="text"
                value={link.description}
                onChange={(e) => update(index, { description: e.target.value })}
                placeholder="Keterangan singkat, misal: halaman paket harga ChatHub"
                className="w-full rounded-lg border border-line px-3 py-2 text-sm text-ink focus:border-ink/40 focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={() => remove(index)}
              aria-label="Hapus link"
              className="mt-1 shrink-0 rounded-lg p-2 text-ink/40 hover:bg-ink/5 hover:text-signal"
            >
              <LuTrash2 className="size-4" />
            </button>
          </div>
        ))}
        <button type="button" onClick={add} className="flex items-center gap-1.5 self-start text-sm font-medium text-signal hover:underline">
          <LuPlus className="size-4" />
          Tambah Link
        </button>
      </div>
    </div>
  );
}
