"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, type Role } from "@/lib/session";

export type LoginState = { error: string } | undefined;

const COOKIE_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;

export async function login(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    return { error: "Email dan password wajib diisi." };
  }

  let token: string;
  let role: Role;
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      cache: "no-store",
    });

    if (!res.ok) {
      const body = await res.json().catch(() => null);
      return { error: body?.error ?? "Email atau password salah." };
    }

    const body = await res.json();
    token = body.token;
    role = body.user.role;
  } catch {
    return { error: "Tidak dapat terhubung ke server. Coba lagi nanti." };
  }

  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE_SECONDS,
    path: "/",
  });

  redirect(role === "ADMIN" ? "/panel" : "/dashboard");
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/login");
}

export type ForgotPasswordState = { error?: string; success?: boolean } | undefined;

export async function requestPasswordReset(
  _prevState: ForgotPasswordState,
  formData: FormData,
): Promise<ForgotPasswordState> {
  const email = formData.get("email");

  if (typeof email !== "string" || !email) {
    return { error: "Email wajib diisi." };
  }

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
      cache: "no-store",
    });

    if (!res.ok) {
      const body = await res.json().catch(() => null);
      return { error: body?.error ?? "Email tidak terdaftar." };
    }
  } catch {
    return { error: "Tidak dapat terhubung ke server. Coba lagi nanti." };
  }

  return { success: true };
}

export type ResetPasswordState = { error?: string; success?: boolean } | undefined;

export async function resetPassword(
  _prevState: ResetPasswordState,
  formData: FormData,
): Promise<ResetPasswordState> {
  const token = formData.get("token");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (typeof token !== "string" || !token) {
    return { error: "Link reset password tidak valid." };
  }
  if (typeof password !== "string" || typeof confirmPassword !== "string" || !password || !confirmPassword) {
    return { error: "Password wajib diisi." };
  }
  if (password !== confirmPassword) {
    return { error: "Konfirmasi password tidak cocok." };
  }

  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/auth/reset-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
      cache: "no-store",
    });

    if (!res.ok) {
      const body = await res.json().catch(() => null);
      return { error: body?.error ?? "Token tidak valid atau sudah kedaluwarsa." };
    }
  } catch {
    return { error: "Tidak dapat terhubung ke server. Coba lagi nanti." };
  }

  return { success: true };
}
