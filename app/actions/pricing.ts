"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { decrypt, SESSION_COOKIE } from "@/lib/session";
import type { PricingPlanDTO, PricingPlanInput } from "@/lib/pricing-types";

type ActionResult<T> = { ok: true; data: T } | { ok: false; error: string };

async function requireAdminToken(): Promise<string> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const session = await decrypt(token);
  if (!session || session.role !== "ADMIN" || !token) {
    throw new Error("Unauthorized");
  }
  return token;
}

async function parseErrorBody(res: Response): Promise<string> {
  const body = await res.json().catch(() => null);
  return body?.error ?? `Request failed with status ${res.status}`;
}

function refreshPricingPages() {
  // The public /pricing page and homepage fetch plans client-side (see
  // hooks/use-pricing-plans.ts) and always hit the backend directly, so only
  // this Server Component route needs cache invalidation.
  revalidatePath("/panel/pricing");
}

export async function createPricingPlan(input: PricingPlanInput): Promise<ActionResult<PricingPlanDTO>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/pricing-plans`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(input),
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  refreshPricingPages();
  return { ok: true, data: await res.json() };
}

export async function updatePricingPlan(
  id: string,
  input: Partial<PricingPlanInput>,
): Promise<ActionResult<PricingPlanDTO>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/pricing-plans/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(input),
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  refreshPricingPages();
  return { ok: true, data: await res.json() };
}

export async function deletePricingPlan(id: string): Promise<ActionResult<true>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/pricing-plans/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  refreshPricingPages();
  return { ok: true, data: true };
}
