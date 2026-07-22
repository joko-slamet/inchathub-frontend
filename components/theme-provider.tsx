"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// Thin wrapper around next-themes with this project's defaults baked in —
// class-based toggling (matches the .dark CSS override in globals.css),
// follows the OS preference until the visitor picks explicitly, and
// persists the choice in localStorage. Hand-rolled attempts at this exact
// mechanism (cookie + blocking inline script) kept hitting Next.js App
// Router hydration edge cases; next-themes has already solved those.
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

export { useTheme } from "next-themes";
