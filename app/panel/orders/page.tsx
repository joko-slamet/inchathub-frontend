import { cookies } from "next/headers";
import { LuReceipt } from "react-icons/lu";
import { SESSION_COOKIE } from "@/lib/session";
import { formatRupiah } from "@/lib/pricing-format";
import type { AdminOrderDTO, OrderStatus } from "@/lib/order-types";

async function getOrders(): Promise<AdminOrderDTO[]> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const res = await fetch(`${process.env.BACKEND_URL}/api/orders`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load orders");
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

function planName(order: AdminOrderDTO): string {
  const translation =
    order.plan.translations.find((t) => t.locale === "id") ?? order.plan.translations[0];
  return translation?.name ?? order.plan.key;
}

export default async function AdminOrdersPage() {
  const orders = await getOrders();
  const paidCount = orders.filter((o) => o.status === "PAID").length;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <div>
        <p className="font-display text-2xl font-semibold tracking-tight text-ink">Order</p>
        <p className="mt-1 text-sm text-ink/60">
          Daftar transaksi pembelian paket oleh customer ({orders.length} order, {paidCount} lunas).
        </p>
      </div>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line py-16 text-center">
          <LuReceipt className="size-8 text-ink/25" />
          <p className="text-sm text-ink/60">Belum ada order yang masuk.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-line bg-paper">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs font-semibold tracking-wide text-slate uppercase">
                <th className="px-5 py-3.5">Tanggal</th>
                <th className="px-5 py-3.5">Pembeli</th>
                <th className="px-5 py-3.5">Paket</th>
                <th className="px-5 py-3.5">Jumlah</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Referensi Duitku</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-5 py-4 whitespace-nowrap text-ink/70">
                    {new Date(order.createdAt).toLocaleString("id-ID", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </td>
                  <td className="px-5 py-4">
                    <p className="font-medium text-ink">{order.user.name}</p>
                    <p className="text-xs text-ink/50">{order.user.email}</p>
                  </td>
                  <td className="px-5 py-4 text-ink/80">{planName(order)}</td>
                  <td className="px-5 py-4 font-medium text-ink">{formatRupiah(order.amount, "id")}</td>
                  <td className="px-5 py-4">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="px-5 py-4 text-xs text-ink/45">{order.duitkuReference ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
