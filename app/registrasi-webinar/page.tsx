
import React, { useState } from 'react';

const RegistrasiWebinarPage = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setIsError(false);

    try {
      const response = await fetch('/api/webinar-registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, city, email, whatsapp }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Registrasi berhasil! Kami akan menghubungi Anda segera.');
        setName('');
        setCity('');
        setEmail('');
        setWhatsapp('');
      } else {
        setIsError(true);
        setMessage(data.message || 'Terjadi kesalahan saat registrasi.');
      }
    } catch (error) {
      setIsError(true);
      setMessage('Terjadi kesalahan jaringan. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Registrasi Webinar</h1>
        {message && (
          <div className={`mb-4 p-3 rounded-md text-center ${isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama" className="block text-gray-700 text-sm font-bold mb-2">Nama</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan Nama Anda"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="kota" className="block text-gray-700 text-sm font-bold mb-2">Kota</label>
            <input
              type="text"
              id="kota"
              name="kota"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan Kota Anda"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan Email Anda"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="whatsapp" className="block text-gray-700 text-sm font-bold mb-2">Nomor WhatsApp</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan Nomor WhatsApp Anda"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-signal hover:bg-signal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              disabled={loading}
            >
              {loading ? 'Mendaftar...' : 'Daftar Webinar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrasiWebinarPage;
