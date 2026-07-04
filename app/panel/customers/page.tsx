import { cookies } from "next/headers";
import { LuUsers } from "react-icons/lu";
import { SESSION_COOKIE } from "@/lib/session";
import type { CurrentUser } from "@/lib/dal";

async function getCustomers(): Promise<CurrentUser[]> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const res = await fetch(`${process.env.BACKEND_URL}/api/users/customers`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load customers");
  return res.json();
}

function planName(customer: CurrentUser): string {
  const translation =
    customer.activePlan?.translations.find((t) => t.locale === "id") ?? customer.activePlan?.translations[0];
  return translation?.name ?? customer.activePlan?.key ?? "—";
}

export default async function AdminCustomersPage() {
  const customers = await getCustomers();

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8">
      <div>
        <p className="font-display text-2xl font-semibold tracking-tight text-ink">Customer</p>
        <p className="mt-1 text-sm text-ink/60">
          Daftar customer dengan paket aktif yang masih berlaku ({customers.length} customer).
        </p>
      </div>

      {customers.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line py-16 text-center">
          <LuUsers className="size-8 text-ink/25" />
          <p className="text-sm text-ink/60">Belum ada customer dengan paket aktif.</p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-line bg-paper">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs font-semibold tracking-wide text-slate uppercase">
                <th className="px-5 py-3.5">Nama</th>
                <th className="px-5 py-3.5">Kontak</th>
                <th className="px-5 py-3.5">Paket Aktif</th>
                <th className="px-5 py-3.5">Berlaku Hingga</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {customers.map((customer) => (
                <tr key={customer.id}>
                  <td className="px-5 py-4 font-medium text-ink">{customer.name}</td>
                  <td className="px-5 py-4">
                    <p className="text-ink/80">{customer.email}</p>
                    {customer.phone && <p className="text-xs text-ink/50">{customer.phone}</p>}
                  </td>
                  <td className="px-5 py-4 text-ink/80">{planName(customer)}</td>
                  <td className="px-5 py-4 text-ink/70">
                    {customer.planExpiresAt
                      ? new Date(customer.planExpiresAt).toLocaleDateString("id-ID", { dateStyle: "medium" })
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
