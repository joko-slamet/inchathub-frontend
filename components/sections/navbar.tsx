"use client";

import { useState } from "react";
import Link from "next/link";
import { LuMenu, LuX, LuLogIn, LuLayoutDashboard } from "react-icons/lu";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "@/components/auth-provider";
import type { SiteContent } from "@/content/site-content";

export function Navbar({ content }: { content: SiteContent["nav"] }) {
  const [open, setOpen] = useState(false);
  const user = useAuth();

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-4 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-line bg-paper/90 px-5 py-3 shadow-[0_12px_32px_-16px_rgba(26,22,24,0.25)] backdrop-blur-md sm:px-6">
        <Link href="/" className="flex items-center" aria-label="ChatHub">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {content.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LocaleSwitcher />
          <ThemeToggle />
          <div className="flex items-center gap-3">
            {user ? (
              <Link
                href="/panel"
                className="flex items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                <LuLayoutDashboard className="size-4" />
                Panel Admin
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                <LuLogIn className="size-4" />
                {content.loginLabel}
              </Link>
            )}
            <Button href="/#kontak" variant="primary" size="md">
              {content.ctaPrimary}
            </Button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <LuX className="size-5" /> : <LuMenu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-line bg-paper px-6 py-6 shadow-[0_12px_32px_-16px_rgba(26,22,24,0.25)] md:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {content.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {user ? (
              <Link
                href="/panel"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 text-sm font-medium text-ink/70"
              >
                <LuLayoutDashboard className="size-4" />
                Panel Admin
              </Link>
            ) : (
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-1.5 text-sm font-medium text-ink/70"
              >
                <LuLogIn className="size-4" />
                {content.loginLabel}
              </Link>
            )}
            <Button href="/#kontak" variant="primary" size="md" onClick={() => setOpen(false)}>
              {content.ctaPrimary}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
