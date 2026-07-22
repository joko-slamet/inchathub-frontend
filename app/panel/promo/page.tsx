import { cookies } from "next/headers";
import { PromoEditor } from "@/components/panel/promo-editor";
import { SESSION_COOKIE } from "@/lib/session";
import type { PromoDTO } from "@/lib/promo-types";

async function getPromos(token: string): Promise<PromoDTO[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/promos`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

export default async function AdminPromoPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value ?? "";
  const promos = await getPromos(token);
  return <PromoEditor initialPromos={promos} />;
}
