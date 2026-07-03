import { cookies } from "next/headers";
import { LuUser, LuMail, LuPhone, LuReceipt } from "react-icons/lu";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { requireUser } from "@/lib/dal";
import { SESSION_COOKIE } from "@/lib/session";
import { formatRupiah } from "@/lib/pricing-format";
import { getSiteContent, defaultLocale } from "@/content/site-content";
import type { OrderDTO, OrderStatus } from "@/lib/order-types";
import type { PricingTranslation } from "@/lib/pricing-types";

async function getMyOrders(): Promise<OrderDTO[]> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const res = await fetch(`${process.env.BACKEND_URL}/api/orders/mine`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

const statusLabel: Record<OrderStatus, string> = {
  PENDING: "Menunggu",
  PAID: "Lunas",
  FAILED: "Gagal",
};

const statusClass: Record<OrderStatus, string> = {
  PENDING: "bg-slate-dim text-ink/60",
  PAID: "bg-ok/10 text-ok",
  FAILED: "bg-signal-dim text-signal",
};

function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass[status]}`}
    >
      {statusLabel[status]}
    </span>
  );
}

function preferredTranslation(translations: PricingTranslation[]) {
  return translations.find((t) => t.locale === "id") ?? translations[0];
}

function planName(order: OrderDTO): string {
  return preferredTranslation(order.plan.translations)?.name ?? order.plan.key;
}

export default async function DashboardPage() {
  const user = await requireUser();
  const orders = await getMyOrders();
  const content = getSiteContent(defaultLocale);

  const activePlanName = user.activePlan
    ? (preferredTranslation(user.activePlan.translations)?.name ?? user.activePlan.key)
    : null;

  const expiresAt = user.planExpiresAt ? new Date(user.planExpiresAt) : null;
  const isExpired = !expiresAt || expiresAt.getTime() < Date.now();
  const daysLeft = expiresAt ? Math.ceil((expiresAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24)) : null;

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1 px-6 py-12 sm:py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <span className="sticker inline-flex items-center gap-2 rounded-full bg-signal-dim px-4 py-1.5 text-xs font-semibold tracking-[0.06em] text-signal uppercase">
            <span className="size-1.5 rounded-full bg-signal" />
            Dashboard
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold text-ink">
            Halo, {user.name.split(" ")[0]}
          </h1>
          <p className="mt-1 text-sm text-ink/60">
            Kelola akun dan lihat riwayat pembelian paket kamu di sini.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
            <div className="rounded-[1.75rem] border-2 border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(26,22,24,0.3)]">
              <p className="font-display text-lg font-semibold text-ink">Riwayat order</p>

              {orders.length === 0 ? (
                <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-dashed border-line py-12 text-center">
                  <LuReceipt className="size-8 text-ink/25" />
                  <p className="text-sm text-ink/60">Kamu belum pernah membeli paket.</p>
                  <Button href="/pricing" variant="primary" size="md">
                    Lihat paket harga
                  </Button>
                </div>
              ) : (
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[520px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-line text-xs font-semibold tracking-wide text-slate uppercase">
                        <th className="py-3">Tanggal</th>
                        <th className="py-3">Paket</th>
                        <th className="py-3">Jumlah</th>
                        <th className="py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td className="py-3.5 whitespace-nowrap text-ink/70">
                            {new Date(order.createdAt).toLocaleDateString("id-ID", { dateStyle: "medium" })}
                          </td>
                          <td className="py-3.5 text-ink/80">{planName(order)}</td>
                          <td className="py-3.5 font-medium text-ink">{formatRupiah(order.amount, "id")}</td>
                          <td className="py-3.5">
                            <StatusBadge status={order.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-[1.75rem] border-2 border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(26,22,24,0.3)]">
                <span className="text-xs font-medium text-ink/60">Paket aktif</span>
                {activePlanName && !isExpired ? (
                  <>
                    <p className="mt-2 font-display text-xl font-bold text-ink">{activePlanName}</p>
                    <p className="mt-1 text-sm text-ink/60">
                      Berlaku sampai {expiresAt?.toLocaleDateString("id-ID", { dateStyle: "long" })}
                      {daysLeft !== null && daysLeft <= 7 && (
                        <span className="ml-1 font-medium text-signal">({daysLeft} hari lagi)</span>
                      )}
                    </p>
                    <Button href="/pricing" variant="outline" size="md" className="mt-4 w-full">
                      Perpanjang paket
                    </Button>
                  </>
                ) : (
                  <>
                    <p className="mt-2 text-sm text-ink/60">
                      {activePlanName
                        ? "Paket kamu sudah kedaluwarsa."
                        : "Kamu belum berlangganan paket apa pun."}
                    </p>
                    <Button href="/pricing" variant="primary" size="md" className="mt-4 w-full">
                      Lihat paket harga
                    </Button>
                  </>
                )}
              </div>

              <div className="rounded-[1.75rem] border-2 border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(26,22,24,0.3)]">
                <span className="text-xs font-medium text-ink/60">Data akun</span>
                <div className="mt-3 flex flex-col gap-2.5 text-sm">
                  <div className="flex items-center gap-2.5">
                    <LuUser className="size-4 shrink-0 text-ink/40" />
                    <span className="text-ink">{user.name}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <LuMail className="size-4 shrink-0 text-ink/40" />
                    <span className="truncate text-ink/70">{user.email}</span>
                  </div>
                  {user.phone && (
                    <div className="flex items-center gap-2.5">
                      <LuPhone className="size-4 shrink-0 text-ink/40" />
                      <span className="text-ink/70">{user.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}
