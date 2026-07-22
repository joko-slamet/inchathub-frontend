"use client";

import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  // resolvedTheme is unknown until after mount (the server has no way to
  // know the visitor's theme), so render a neutral placeholder until then
  // rather than guessing — avoids a hydration mismatch on this icon.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      className={`flex size-9 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-slate-dim hover:text-ink ${className}`}
    >
      {mounted ? (
        isDark ? (
          <LuSun className="size-4.5" />
        ) : (
          <LuMoon className="size-4.5" />
        )
      ) : (
        <span className="size-4.5" />
      )}
    </button>
  );
}
