"use client";

import { useState, type ReactNode } from "react";
import { LuChevronDown } from "react-icons/lu";

export function CollapsibleCard({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-line bg-paper p-6">
      <button type="button" onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between text-left">
        <p className="font-display text-base font-semibold text-ink">{title}</p>
        <LuChevronDown className={`size-4 shrink-0 text-ink/50 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="mt-5">{children}</div>}
    </div>
  );
}
