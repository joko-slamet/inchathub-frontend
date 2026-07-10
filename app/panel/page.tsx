import { cookies } from "next/headers";
import Link from "next/link";
import {
  LuInbox,
  LuNewspaper,
  LuTag,
  LuSettings,
  LuBuilding2,
  LuImage,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import { SESSION_COOKIE } from "@/lib/session";
import { formatRelativeTime } from "@/lib/relative-time";
import type { ArticleDTO, ArticlePage } from "@/lib/ai-article-types";
import type { ContactSubmissionDTO } from "@/lib/contact-submission-types";

async function getJson<T>(path: string, token: string | undefined): Promise<T> {
  const res = await fetch(`${process.env.BACKEND_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

function articleTitle(article: ArticleDTO): string {
  const translation = article.translations.find((t) => t.locale === "id") ?? article.translations[0];
  return translation?.title ?? article.topic;
}

const contentShortcuts: { label: string; icon: IconType; href: string }[] = [
  { label: "Formulir Kontak", icon: LuInbox, href: "/panel/contact" },
  { label: "Harga", icon: LuTag, href: "/panel/pricing" },
  { label: "Blog", icon: LuNewspaper, href: "/panel/blog" },
  { label: "Profil Perusahaan", icon: LuBuilding2, href: "/panel/about" },
  { label: "Our Client", icon: LuImage, href: "/panel/our-client" },
  { label: "Site Setting", icon: LuSettings, href: "/panel/homepage" },
];

export default async function AdminOverviewPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;

  // Page 1 (most recent 10) is enough for both the total count (via `total`)
  // and the "recent activity" feed below, which only ever shows the 6 most
  // recent items across articles + submissions combined — no need to fetch
  // every article just for this overview page.
  const [articlePage, submissions] = await Promise.all([
    getJson<ArticlePage>("/api/articles?page=1&limit=10", token),
    getJson<ContactSubmissionDTO[]>("/api/contact-submissions", token),
  ]);
  const articles = articlePage.data;

  const stats: { label: string; value: string; icon: IconType }[] = [
    { label: "Pesan Masuk", value: String(submissions.length), icon: LuInbox },
    { label: "Artikel Blog", value: String(articlePage.total), icon: LuNewspaper },
  ];

  const now = new Date();
  const activity = [
    ...submissions.map((s) => ({
      title: `Pesan baru masuk dari formulir kontak: ${s.name}`,
      date: new Date(s.createdAt),
    })),
    ...articles.map((a) => ({
      title: `Artikel blog baru dipublikasikan: "${articleTitle(a)}"`,
      date: new Date(a.generatedAt),
    })),
  ]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 6);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div>
        <p className="font-display text-2xl font-semibold tracking-tight text-ink">Selamat datang, Admin</p>
        <p className="mt-1 text-sm text-ink/60">Ringkasan performa dan konten situs ChatHub.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
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
          {activity.length === 0 ? (
            <p className="mt-4 text-sm text-ink/55">Belum ada aktivitas.</p>
          ) : (
            <ul className="mt-4 divide-y divide-line">
              {activity.map((item, index) => (
                <li key={index} className="flex items-start justify-between gap-4 py-3.5">
                  <p className="text-sm leading-relaxed text-ink/75">{item.title}</p>
                  <p className="shrink-0 font-mono text-xs text-ink/40">{formatRelativeTime(item.date, now)}</p>
                </li>
              ))}
            </ul>
          )}
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
