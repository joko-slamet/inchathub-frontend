"use client";

import { useState, useActionState } from "react";
import Link from "next/link";
import { LuLock, LuEye, LuEyeOff, LuLoaderCircle, LuCircleCheck } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { resetPassword } from "@/app/actions/auth";

export function ResetPasswordForm({ token }: { token: string }) {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction, pending] = useActionState(resetPassword, undefined);

  if (state?.success) {
    return (
      <>
        <p className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-ink">
          <LuCircleCheck className="size-5 text-emerald-600 dark:text-emerald-400" />
          Password berhasil direset
        </p>
        <p className="mt-2 text-sm text-ink/60">
          Silakan masuk kembali menggunakan password baru Anda.
        </p>
        <Button href="/login" variant="primary" size="lg" className="mt-6 w-full">
          Kembali ke halaman masuk
        </Button>
      </>
    );
  }

  return (
    <>
      <p className="font-display text-xl font-semibold tracking-tight text-ink">Buat password baru</p>
      <p className="mt-1.5 text-sm text-ink/60">Masukkan password baru untuk akun ChatHub Anda.</p>

      <form action={formAction} className="mt-6 flex flex-col gap-4">
        <input type="hidden" name="token" value={token} />

        {state?.error && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-400">
            {state.error}
          </p>
        )}

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">Password baru</span>
          <div className="flex items-center gap-2.5 rounded-lg border border-line px-3.5 py-2.5 focus-within:border-ink/40">
            <LuLock className="size-4 shrink-0 text-ink/40" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              minLength={8}
              autoComplete="new-password"
              placeholder="••••••••"
              className="w-full text-sm text-ink placeholder:text-ink/35 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
              className="shrink-0 text-ink/40 hover:text-ink"
            >
              {showPassword ? <LuEyeOff className="size-4" /> : <LuEye className="size-4" />}
            </button>
          </div>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-medium text-ink/60">Konfirmasi password</span>
          <div className="flex items-center gap-2.5 rounded-lg border border-line px-3.5 py-2.5 focus-within:border-ink/40">
            <LuLock className="size-4 shrink-0 text-ink/40" />
            <input
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              required
              minLength={8}
              autoComplete="new-password"
              placeholder="••••••••"
              className="w-full text-sm text-ink placeholder:text-ink/35 focus:outline-none"
            />
          </div>
        </label>

        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={pending}>
          {pending ? (
            <>
              <LuLoaderCircle className="size-4 animate-spin" />
              Memproses...
            </>
          ) : (
            "Reset password"
          )}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-ink/50">
        <Link href="/login" className="hover:text-ink">
          Kembali ke halaman masuk
        </Link>
      </p>
    </>
  );
}
