import Link from "next/link";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { LuCircleCheck, LuCircleX, LuLoaderCircle } from "react-icons/lu";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { PendingPoller } from "@/components/checkout/pending-poller";
import { SESSION_COOKIE } from "@/lib/session";
import type { OrderDTO } from "@/lib/order-types";

async function fetchOrder(orderId: string, token: string): Promise<OrderDTO | null> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function CheckoutReturnPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order: orderId } = await searchParams;
  if (!orderId) notFound();

  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) notFound();

  const order = await fetchOrder(orderId, token);
  if (!order) notFound();

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center px-6 py-16"
      style={{
        backgroundColor: "var(--color-paper)",
        backgroundImage: "radial-gradient(circle at 50% 0%, var(--color-signal-dim) 0%, transparent 55%)",
      }}
    >
      <Link href="/" className="mb-8 flex items-center" aria-label="ChatHub">
        <Logo />
      </Link>

      <div className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-line bg-paper p-8 text-center shadow-[0_20px_60px_-32px_rgba(20,16,15,0.3)]">
        {order.status === "PAID" && (
          <>
            <LuCircleCheck className="size-12 text-ok" />
            <p className="mt-4 font-display text-xl font-semibold text-ink">Pembayaran berhasil</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
              Paket Anda sudah aktif. Terima kasih sudah berlangganan ChatHub.
            </p>
          </>
        )}

        {order.status === "FAILED" && (
          <>
            <LuCircleX className="size-12 text-signal" />
            <p className="mt-4 font-display text-xl font-semibold text-ink">Pembayaran gagal</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
              Transaksi tidak berhasil diselesaikan. Silakan coba lagi.
            </p>
            <Link href={`/checkout?plan=${order.plan.key}`} className="mt-6 w-full">
              <Button variant="primary" size="lg" className="w-full">
                Coba lagi
              </Button>
            </Link>
          </>
        )}

        {order.status === "PENDING" && (
          <>
            <LuLoaderCircle className="size-12 animate-spin text-ink/40" />
            <p className="mt-4 font-display text-xl font-semibold text-ink">Menunggu konfirmasi</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
              Kami sedang menunggu konfirmasi pembayaran dari Duitku. Halaman ini akan otomatis
              memperbarui statusnya.
            </p>
            <PendingPoller />
          </>
        )}
      </div>
    </main>
  );
}
