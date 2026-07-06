import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";
import { Logo } from "@/components/ui/logo";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

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
        {token ? (
          <ResetPasswordForm token={token} />
        ) : (
          <>
            <p className="font-display text-xl font-semibold tracking-tight text-ink">Link tidak valid</p>
            <p className="mt-1.5 text-sm text-ink/60">
              Link reset password tidak ditemukan atau tidak lengkap. Silakan minta link baru.
            </p>
            <Link
              href="/forgot-password"
              className="mt-6 inline-block text-sm font-medium text-signal hover:underline"
            >
              Minta link reset baru
            </Link>
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
