"use client";

import { useState } from "react";
import { LuX } from "react-icons/lu";

export function ChipInput({
  label,
  values,
  onChange,
  placeholder,
}: {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
}) {
  const [draft, setDraft] = useState("");

  function addChip() {
    const trimmed = draft.trim();
    if (!trimmed || values.includes(trimmed)) return;
    onChange([...values, trimmed]);
    setDraft("");
  }

  function removeChip(index: number) {
    onChange(values.filter((_, i) => i !== index));
  }

  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-ink/60">{label}</span>
      <div className="flex min-h-12 flex-wrap items-center gap-2 rounded-lg border border-line p-2.5 focus-within:border-ink/40">
        {values.map((value, index) => (
          <span
            key={index}
            className="flex items-center gap-1.5 rounded-full bg-signal-dim px-3 py-1 text-xs font-medium text-signal"
          >
            {value}
            <button
              type="button"
              onClick={() => removeChip(index)}
              aria-label={`Hapus topik ${value}`}
              className="text-signal/60 hover:text-signal"
            >
              <LuX className="size-3" />
            </button>
          </span>
        ))}
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              addChip();
            } else if (e.key === "Backspace" && draft === "" && values.length > 0) {
              removeChip(values.length - 1);
            }
          }}
          onBlur={addChip}
          placeholder={placeholder}
          className="min-w-[8rem] flex-1 bg-transparent px-1 py-1 text-sm text-ink placeholder:text-ink/35 focus:outline-none"
        />
      </div>
    </label>
  );
}
