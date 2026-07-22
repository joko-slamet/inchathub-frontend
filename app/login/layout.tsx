import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masuk — ChatHub",
  description: "Masuk ke akun ChatHub Anda.",
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
