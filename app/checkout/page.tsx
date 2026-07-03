import Link from "next/link";
import { notFound } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";
import { Logo } from "@/components/ui/logo";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import type { PricingPlanDTO } from "@/lib/pricing-types";
import type { PaymentMethodDTO } from "@/lib/order-types";
import { getCurrentUser } from "@/lib/dal";

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan: planKey } = await searchParams;
  if (!planKey) notFound();

  const res = await fetch(`${process.env.BACKEND_URL}/api/pricing-plans`, { cache: "no-store" });
  const plans: PricingPlanDTO[] = res.ok ? await res.json() : [];
  const plan = plans.find((p) => p.key === planKey);
  if (!plan) notFound();

  const translation = plan.translations.find((t) => t.locale === "id") ?? plan.translations[0];

  const methodsRes = await fetch(
    `${process.env.BACKEND_URL}/api/orders/payment-methods?planId=${plan.id}`,
    { cache: "no-store" },
  );
  const paymentMethods: PaymentMethodDTO[] = methodsRes.ok ? await methodsRes.json() : [];

  const user = await getCurrentUser();

  return (
    <main
      className="relative min-h-screen overflow-hidden px-6 py-12 sm:py-16"
      style={{
        backgroundColor: "var(--color-paper)",
        backgroundImage: "radial-gradient(var(--color-line) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div
        aria-hidden="true"
        className="blob pointer-events-none absolute -top-24 -right-20 size-[420px] bg-signal-dim/70 blur-2xl sm:size-[520px]"
      />
      <div
        aria-hidden="true"
        className="blob pointer-events-none absolute -bottom-32 -left-24 size-72 bg-slate-dim blur-xl"
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center" aria-label="ChatHub">
            <Logo />
          </Link>
          <Link href="/pricing" className="flex items-center gap-1.5 text-sm text-ink/50 hover:text-ink">
            <LuArrowLeft className="size-4" />
            Kembali ke paket harga
          </Link>
        </div>

        <div className="mt-10">
          <CheckoutForm
            planId={plan.id}
            planName={translation?.name ?? plan.key}
            planTagline={translation?.tagline}
            price={plan.price}
            paymentMethods={paymentMethods}
            user={user}
          />
        </div>
      </div>
    </main>
  );
}
