import { cookies } from "next/headers";
import Link from "next/link";
import {
  LuWallet,
  LuReceipt,
  LuUsers,
  LuInbox,
  LuNewspaper,
  LuTag,
  LuSettings,
  LuBuilding2,
  LuTrendingUp,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import { SESSION_COOKIE } from "@/lib/session";
import { formatRupiah } from "@/lib/pricing-format";
import { formatRelativeTime } from "@/lib/relative-time";
import { SalesChart, type SalesChartPoint } from "@/components/panel/sales-chart";
import type { AdminOrderDTO } from "@/lib/order-types";
import type { CurrentUser } from "@/lib/dal";
import type { ArticleDTO } from "@/lib/ai-article-types";
import type { ContactSubmissionDTO } from "@/lib/contact-submission-types";

async function getJson<T>(path: string, token: string | undefined): Promise<T> {
  const res = await fetch(`${process.env.BACKEND_URL}${path}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

function planName(order: AdminOrderDTO): string {
  const translation =
    order.plan.translations.find((t) => t.locale === "id") ?? order.plan.translations[0];
  return translation?.name ?? order.plan.key;
}

function articleTitle(article: ArticleDTO): string {
  const translation = article.translations.find((t) => t.locale === "id") ?? article.translations[0];
  return translation?.title ?? article.topic;
}

function lastMonths(count: number): { key: string; label: string }[] {
  const now = new Date();
  return Array.from({ length: count }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (count - 1 - i), 1);
    return { key: `${d.getFullYear()}-${d.getMonth()}`, label: d.toLocaleDateString("id-ID", { month: "short" }) };
  });
}

function buildSalesChart(orders: AdminOrderDTO[]): SalesChartPoint[] {
  const months = lastMonths(6);
  const revenueByMonth = new Map<string, number>();

  for (const order of orders) {
    if (order.status !== "PAID") continue;
    const date = new Date(order.paidAt ?? order.createdAt);
    const key = `${date.getFullYear()}-${date.getMonth()}`;
    revenueByMonth.set(key, (revenueByMonth.get(key) ?? 0) + order.amount);
  }

  return months.map((m) => ({ month: m.label, revenue: revenueByMonth.get(m.key) ?? 0 }));
}

const contentShortcuts: { label: string; icon: IconType; href: string }[] = [
  { label: "Order", icon: LuReceipt, href: "/panel/orders" },
  { label: "Customer", icon: LuUsers, href: "/panel/customers" },
  { label: "Formulir Kontak", icon: LuInbox, href: "/panel/contact" },
  { label: "Harga", icon: LuTag, href: "/panel/pricing" },
  { label: "Blog", icon: LuNewspaper, href: "/panel/blog" },
  { label: "Profil Perusahaan", icon: LuBuilding2, href: "/panel/about" },
  { label: "Site Setting", icon: LuSettings, href: "/panel/homepage" },
];

export default async function AdminOverviewPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;

  const [orders, customers, articles, submissions] = await Promise.all([
    getJson<AdminOrderDTO[]>("/api/orders", token),
    getJson<CurrentUser[]>("/api/users/customers", token),
    getJson<ArticleDTO[]>("/api/articles", token),
    getJson<ContactSubmissionDTO[]>("/api/contact-submissions", token),
  ]);

  const paidOrders = orders.filter((o) => o.status === "PAID");
  const totalRevenue = paidOrders.reduce((sum, o) => sum + o.amount, 0);

  const now = new Date();
  const ordersThisMonth = orders.filter((o) => {
    const d = new Date(o.createdAt);
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth();
  }).length;

  const stats: { label: string; value: string; icon: IconType }[] = [
    { label: "Total Pendapatan", value: formatRupiah(totalRevenue, "id"), icon: LuWallet },
    { label: "Order Bulan Ini", value: String(ordersThisMonth), icon: LuReceipt },
    { label: "Customer Aktif", value: String(customers.length), icon: LuUsers },
    { label: "Pesan Masuk", value: String(submissions.length), icon: LuInbox },
  ];

  const chartData = buildSalesChart(orders);

  const activity = [
    ...paidOrders.map((o) => ({
      title: `Order baru dari ${o.user.name} — paket ${planName(o)}`,
      date: new Date(o.paidAt ?? o.createdAt),
    })),
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

      <div className="rounded-2xl border border-line bg-paper p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-display text-base font-semibold text-ink">Grafik Penjualan</p>
            <p className="mt-0.5 text-xs text-ink/55">Pendapatan dari order lunas, 6 bulan terakhir</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-ok/10 px-2.5 py-1 text-xs font-medium text-ok">
            <LuTrendingUp className="size-3.5" />
            {paidOrders.length} order lunas
          </span>
        </div>
        <div className="mt-4">
          <SalesChart data={chartData} />
        </div>
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
