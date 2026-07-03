import Link from "next/link";
import { LuFiles, LuNewspaper, LuInbox, LuLanguages, LuTag, LuSettings, LuBuilding2 } from "react-icons/lu";
import type { IconType } from "react-icons";

// Dummy data — no backend yet, this is a UI-only preview of the overview page.
const stats: { label: string; value: string; icon: IconType }[] = [
  { label: "Total Halaman", value: "9", icon: LuFiles },
  { label: "Artikel Blog", value: "6", icon: LuNewspaper },
  { label: "Pesan Masuk", value: "12", icon: LuInbox },
  { label: "Bahasa Aktif", value: "2 (ID/EN)", icon: LuLanguages },
];

const activity: { title: string; time: string }[] = [
  { title: "Konten halaman Harga diperbarui", time: "2 jam lalu" },
  { title: "Artikel blog baru dipublikasikan: \"5 Alasan Bisnis Anda Butuh Omnichannel Inbox\"", time: "1 hari lalu" },
  { title: "Daftar FAQ diperbarui", time: "3 hari lalu" },
  { title: "Pesan baru masuk dari formulir kontak", time: "4 hari lalu" },
  { title: "Konten halaman Tentang Kami diperbarui", time: "6 hari lalu" },
];

const contentShortcuts: { label: string; icon: IconType; href: string }[] = [
  { label: "Site Setting", icon: LuSettings, href: "/panel/homepage" },
  { label: "Harga", icon: LuTag, href: "/panel/pricing" },
  { label: "Blog", icon: LuNewspaper, href: "/panel/blog" },
  { label: "Profil Perusahaan", icon: LuBuilding2, href: "/panel/about" },
];

export default function AdminOverviewPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div>
        <p className="font-display text-2xl font-semibold tracking-tight text-ink">
          Selamat datang, Admin
        </p>
        <p className="mt-1 text-sm text-ink/60">Ringkasan konten situs ChatHub.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-line bg-paper p-5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-signal-dim text-signal">
              <stat.icon className="size-4.5" />
            </span>
            <p className="mt-4 font-display text-2xl font-semibold text-ink">{stat.value}</p>
            <p className="mt-0.5 text-xs text-ink/55">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-line bg-paper p-6">
          <p className="font-display text-base font-semibold text-ink">Aktivitas Terbaru</p>
          <ul className="mt-4 divide-y divide-line">
            {activity.map((item) => (
              <li key={item.title} className="flex items-start justify-between gap-4 py-3.5">
                <p className="text-sm leading-relaxed text-ink/75">{item.title}</p>
                <p className="shrink-0 font-mono text-xs text-ink/40">{item.time}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-line bg-paper p-6">
          <p className="font-display text-base font-semibold text-ink">Kelola Konten</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {contentShortcuts.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col gap-2.5 rounded-xl border border-line px-4 py-4 transition-colors hover:border-ink/20"
              >
                <item.icon className="size-4.5 text-signal" />
                <span className="text-sm font-medium text-ink">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
