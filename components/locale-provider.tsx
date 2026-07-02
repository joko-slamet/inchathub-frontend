"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { defaultLocale, isLocale, type Locale } from "@/content/site-content";

const STORAGE_KEY = "chathub-locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // Reading localStorage during the initial render (or via a useState
    // lazy initializer) would make the client's first paint diverge from
    // the server-rendered HTML and trigger a hydration mismatch. Doing the
    // lookup here, after mount, keeps first paint on defaultLocale and only
    // swaps afterward — the same pattern libraries like next-themes use.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && isLocale(stored)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional post-mount hydration swap, see comment above
      setLocaleState(stored);
      return;
    }

    // No saved preference yet — take a best guess from the browser, but
    // never persist it. Persisting only happens on an explicit choice.
    if (navigator.language.toLowerCase().startsWith("en")) {
      setLocaleState("en");
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
