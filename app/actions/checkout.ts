"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE } from "@/lib/session";

export type CheckoutState = { error: string } | undefined;

const COOKIE_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;

async function setSessionCookie(token: string) {
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE_SECONDS,
    path: "/",
  });
}

async function parseErrorBody(res: Response): Promise<string> {
  const body = await res.json().catch(() => null);
  return body?.error ?? `Request failed with status ${res.status}`;
}

function readPlanId(formData: FormData): string | undefined {
  const planId = formData.get("planId");
  return typeof planId === "string" && planId ? planId : undefined;
}

function readPaymentMethod(formData: FormData): string | undefined {
  const paymentMethod = formData.get("paymentMethod");
  return typeof paymentMethod === "string" && paymentMethod ? paymentMethod : undefined;
}

async function createOrderAndRedirect(
  token: string,
  planId: string,
  paymentMethod: string,
): Promise<CheckoutState> {
  let paymentUrl: string;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ planId, paymentMethod }),
      cache: "no-store",
    });

    if (!res.ok) return { error: await parseErrorBody(res) };
    ({ paymentUrl } = await res.json());
  } catch {
    return { error: "Tidak dapat membuat transaksi pembayaran. Coba lagi nanti." };
  }

  redirect(paymentUrl);
}

// Already-logged-in user paying for a plan — no extra fields beyond the
// hidden planId/paymentMethod inputs.
export async function checkoutAsLoggedInUser(
  _prevState: CheckoutState,
  formData: FormData,
): Promise<CheckoutState> {
  const planId = readPlanId(formData);
  if (!planId) return { error: "Paket tidak valid." };
  const paymentMethod = readPaymentMethod(formData);
  if (!paymentMethod) return { error: "Pilih metode pembayaran terlebih dahulu." };

  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return { error: "Sesi login sudah berakhir, silakan muat ulang halaman." };

  return createOrderAndRedirect(token, planId, paymentMethod);
}

// Not logged in yet: create the account behind the scenes, then pay.
export async function registerAndCheckout(
  _prevState: CheckoutState,
  formData: FormData,
): Promise<CheckoutState> {
  const planId = readPlanId(formData);
  const paymentMethod = readPaymentMethod(formData);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const password = formData.get("password");

  if (!planId) return { error: "Paket tidak valid." };
  if (!paymentMethod) return { error: "Pilih metode pembayaran terlebih dahulu." };
  if (
    typeof name !== "string" ||
    !name ||
    typeof email !== "string" ||
    !email ||
    typeof password !== "string" ||
    !password
  ) {
    return { error: "Nama, email, dan password wajib diisi." };
  }

  let token: string;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        phone: typeof phone === "string" && phone ? phone : undefined,
      }),
      cache: "no-store",
    });

    if (!res.ok) return { error: await parseErrorBody(res) };
    ({ token } = await res.json());
  } catch {
    return { error: "Tidak dapat terhubung ke server. Coba lagi nanti." };
  }

  await setSessionCookie(token);
  return createOrderAndRedirect(token, planId, paymentMethod);
}

// Not logged in, but already has an account ("Sudah punya akun? Masuk" toggle).
export async function loginAndCheckout(
  _prevState: CheckoutState,
  formData: FormData,
): Promise<CheckoutState> {
  const planId = readPlanId(formData);
  const paymentMethod = readPaymentMethod(formData);
  const email = formData.get("email");
  const password = formData.get("password");

  if (!planId) return { error: "Paket tidak valid." };
  if (!paymentMethod) return { error: "Pilih metode pembayaran terlebih dahulu." };
  if (typeof email !== "string" || !email || typeof password !== "string" || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  let token: string;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });

    if (!res.ok) return { error: await parseErrorBody(res) };
    ({ token } = await res.json());
  } catch {
    return { error: "Tidak dapat terhubung ke server. Coba lagi nanti." };
  }

  await setSessionCookie(token);
  return createOrderAndRedirect(token, planId, paymentMethod);
}
