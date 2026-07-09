"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LuLayoutDashboard,
  LuSettings,
  LuTag,
  LuNewspaper,
  LuBuilding2,
  LuInbox,
  LuImage,
  LuMenu,
  LuX,
  LuLogOut,
  LuExternalLink,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import { Logo } from "@/components/ui/logo";
import { logout } from "@/app/actions/auth";

interface NavItem {
  label: string;
  href: string;
  icon: IconType;
}

const navItems: NavItem[] = [
  { label: "Overview", href: "/panel", icon: LuLayoutDashboard },
  { label: "Harga", href: "/panel/pricing", icon: LuTag },
  { label: "Blog", href: "/panel/blog", icon: LuNewspaper },
  { label: "Formulir Kontak", href: "/panel/contact", icon: LuInbox },
  { label: "Profil Perusahaan", href: "/panel/about", icon: LuBuilding2 },
  { label: "Our Client", href: "/panel/our-client", icon: LuImage },
  { label: "Site Setting", href: "/panel/homepage", icon: LuSettings },
];

function SidebarContent({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <>
      <Link href="/panel" className="flex items-center px-1" aria-label="ChatHub Admin">
        <Logo className="h-7 w-auto" />
      </Link>

      <nav className="mt-8 flex flex-1 flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                active ? "bg-signal-dim text-signal" : "text-ink/70 hover:bg-ink/5 hover:text-ink"
              }`}
            >
              <item.icon className="size-4.5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col gap-1 border-t border-line pt-4">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ink/70 hover:bg-ink/5 hover:text-ink"
        >
          <LuExternalLink className="size-4.5" />
          Lihat Situs
        </a>
        <form action={logout}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ink/70 hover:bg-ink/5 hover:text-ink"
          >
            <LuLogOut className="size-4.5" />
            Keluar
          </button>
        </form>
      </div>
    </>
  );
}

export function AdminShell({
  children,
  user,
}: {
  children: ReactNode;
  user: { name: string };
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const activeItem = navItems.find((item) => item.href === pathname);

  return (
    <div className="flex min-h-screen bg-paper">
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col overflow-y-auto border-r border-line px-4 py-6 md:flex">
        <SidebarContent pathname={pathname} />
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-ink/40" onClick={() => setMobileOpen(false)} />
          <aside className="relative flex w-64 flex-col bg-paper px-4 py-6 shadow-xl">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Tutup menu"
              className="absolute top-6 right-4 flex size-8 items-center justify-center rounded-lg border border-line"
            >
              <LuX className="size-4" />
            </button>
            <SidebarContent pathname={pathname} onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-line px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex size-9 items-center justify-center rounded-lg border border-line md:hidden"
              aria-label="Buka menu"
            >
              <LuMenu className="size-4.5" />
            </button>
            <p className="font-display text-lg font-semibold text-ink">{activeItem?.label ?? "Admin"}</p>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full bg-signal-dim font-mono text-xs font-semibold text-signal">
              {user.name.charAt(0).toUpperCase()}
            </span>
            <span className="hidden text-sm font-medium text-ink/80 sm:inline">{user.name}</span>
          </div>
        </header>

        <main className="flex-1 px-6 py-8">{children}</main>
      </div>
    </div>
  );
}
