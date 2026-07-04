import { cookies } from "next/headers";
import { LuInbox } from "react-icons/lu";
import { SESSION_COOKIE } from "@/lib/session";
import type { ContactSubmissionDTO } from "@/lib/contact-submission-types";

async function getSubmissions(): Promise<ContactSubmissionDTO[]> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const res = await fetch(`${process.env.BACKEND_URL}/api/contact-submissions`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load contact submissions");
  return res.json();
}

export default async function AdminContactSubmissionsPage() {
  const submissions = await getSubmissions();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div>
        <p className="font-display text-2xl font-semibold tracking-tight text-ink">Formulir Kontak</p>
        <p className="mt-1 text-sm text-ink/60">
          Daftar pesan yang masuk melalui formulir di halaman /contact-us ({submissions.length} pesan).
        </p>
      </div>

      {submissions.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line py-16 text-center">
          <LuInbox className="size-8 text-ink/25" />
          <p className="text-sm text-ink/60">Belum ada pesan yang masuk.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {submissions.map((submission) => (
            <div key={submission.id} className="rounded-2xl border border-line bg-paper p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-ink">{submission.name}</p>
                  <p className="text-sm text-ink/60">{submission.email}</p>
                  {submission.phone && <p className="text-sm text-ink/60">{submission.phone}</p>}
                </div>
                <p className="text-xs whitespace-nowrap text-ink/45">
                  {new Date(submission.createdAt).toLocaleString("id-ID", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink/80">{submission.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
