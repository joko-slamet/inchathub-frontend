"use client";

import { useState } from "react";
import Link from "next/link";
import { LuMenu, LuX } from "react-icons/lu";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import type { SiteContent } from "@/content/site-content";

export function Navbar({ content }: { content: SiteContent["nav"] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center" aria-label="ChatHub">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {content.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LocaleSwitcher />
          <div className="flex items-center gap-3">
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
        <div className="border-t border-line bg-paper px-6 py-6 md:hidden">
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
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Button href="/#kontak" variant="primary" size="md" onClick={() => setOpen(false)}>
              {content.ctaPrimary}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
