
import { cookies } from "next/headers";
import { LuUsers } from "react-icons/lu";
import { SESSION_COOKIE } from "@/lib/session";
import type { WebinarRegistrationDTO } from "@/lib/webinar-registration-types";

async function getRegistrations(): Promise<WebinarRegistrationDTO[]> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const res = await fetch(`${process.env.BACKEND_URL}/api/webinar-registrations`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(body || "Gagal mengambil data registrasi.");
  }

  return res.json();
}

export default async function RegistrasiWebinarAdminPage() {
  const registrations = await getRegistrations();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <div>
        <p className="font-display text-2xl font-semibold tracking-tight text-ink">Registrasi Webinar</p>
        <p className="mt-1 text-sm text-ink/60">
          Daftar peserta yang sudah mendaftar webinar ({registrations.length} pendaftar).
        </p>
      </div>

      {registrations.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line py-16 text-center">
          <LuUsers className="size-8 text-ink/25" />
          <p className="text-sm text-ink/60">Belum ada pendaftar webinar.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-line bg-paper">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-line">
              <thead className="bg-slate-dim/60">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-ink/60 uppercase">Nama</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-ink/60 uppercase">Kota</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-ink/60 uppercase">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-ink/60 uppercase">WhatsApp</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-ink/60 uppercase">Tanggal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {registrations.map((registration) => (
                  <tr key={registration.id} className="hover:bg-slate-dim/35">
                    <td className="px-4 py-3 text-sm font-medium text-ink">{registration.name}</td>
                    <td className="px-4 py-3 text-sm text-ink/75">{registration.city}</td>
                    <td className="px-4 py-3 text-sm text-ink/75">{registration.email}</td>
                    <td className="px-4 py-3 text-sm text-ink/75">{registration.whatsapp}</td>
                    <td className="px-4 py-3 text-sm text-ink/60">
                      {new Date(registration.createdAt).toLocaleString("id-ID", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
