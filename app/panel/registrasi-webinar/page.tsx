
import React, { useEffect, useState } from 'react';

interface WebinarRegistration {
  id: string;
  name: string;
  city: string;
  email: string;
  whatsapp: string;
  createdAt: string;
}

const RegistrasiWebinarAdminPage = () => {
  const [registrations, setRegistrations] = useState<WebinarRegistration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await fetch('/api/webinar-registrations');
        if (!response.ok) {
          throw new Error('Gagal mengambil data registrasi.');
        }
        const data: WebinarRegistration[] = await response.json();
        setRegistrations(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Registrasi Webinar Admin</h1>
        <p>Memuat data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Registrasi Webinar Admin</h1>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Registrasi Webinar Admin</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-line rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-ink">Nama</th>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-ink">Kota</th>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-ink">Email</th>
              <th className="py-3 px-4 border-b text-left text-sm font-semibold text-ink">Nomor WhatsApp</th>
            </tr>
          </thead>
          <tbody>
            {registrations.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 px-4 text-center text-ink/60">Belum ada pendaftar.</td>
              </tr>
            ) : (
              registrations.map((reg) => (
                <tr key={reg.id}>
                  <td className="py-3 px-4 border-b text-sm text-ink">{reg.name}</td>
                  <td className="py-3 px-4 border-b text-sm text-ink">{reg.city}</td>
                  <td className="py-3 px-4 border-b text-sm text-ink">{reg.email}</td>
                  <td className="py-3 px-4 border-b text-sm text-ink">{reg.whatsapp}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrasiWebinarAdminPage;
