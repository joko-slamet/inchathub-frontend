import { PricingEditor } from "@/components/panel/pricing-editor";
import type { PricingPlanDTO } from "@/lib/pricing-types";

async function getPricingPlans(): Promise<PricingPlanDTO[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/pricing-plans`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load pricing plans");
  return res.json();
}

export default async function AdminPricingPage() {
  const plans = await getPricingPlans();
  return <PricingEditor initialPlans={plans} />;
}
