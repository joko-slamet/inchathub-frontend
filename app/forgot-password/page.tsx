"use client";

import { useActionState } from "react";
import Link from "next/link";
import { LuMail, LuLoaderCircle, LuArrowLeft, LuCircleCheck } from "react-icons/lu";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { requestPasswordReset } from "@/app/actions/auth";

export default function ForgotPasswordPage() {
  const [state, formAction, pending] = useActionState(requestPasswordReset, undefined);

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

      <div className="w-full max-w-sm rounded-2xl border border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(20,16,15,0.3)] sm:p-8">
        {state?.success ? (
          <>
            <p className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-ink">
              <LuCircleCheck className="size-5 text-emerald-600" />
              Periksa email Anda
            </p>
            <p className="mt-2 text-sm text-ink/60">
              Jika email tersebut terdaftar, kami telah mengirimkan link untuk reset password. Link berlaku
              selama 1 jam.
            </p>
          </>
        ) : (
          <>
            <p className="font-display text-xl font-semibold tracking-tight text-ink">Lupa password</p>
            <p className="mt-1.5 text-sm text-ink/60">
              Masukkan email Anda dan kami akan mengirimkan link untuk membuat password baru.
            </p>

            <form action={formAction} className="mt-6 flex flex-col gap-4">
              {state?.error && (
                <p className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-600">
                  {state.error}
                </p>
              )}

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium text-ink/60">Email</span>
                <div className="flex items-center gap-2.5 rounded-lg border border-line px-3.5 py-2.5 focus-within:border-ink/40">
                  <LuMail className="size-4 shrink-0 text-ink/40" />
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="username"
                    placeholder="nama@email.com"
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
                  "Kirim link reset"
                )}
              </Button>
            </form>
          </>
        )}
      </div>

      <Link href="/login" className="mt-8 flex items-center gap-1.5 text-sm text-ink/50 hover:text-ink">
        <LuArrowLeft className="size-4" />
        Kembali ke halaman masuk
      </Link>
    </main>
  );
}
