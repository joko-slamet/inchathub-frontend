
import React from 'react';

const RegistrasiWebinarPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Registrasi Webinar</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="nama" className="block text-gray-700 text-sm font-bold mb-2">Nama</label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan Nama Anda"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="kota" className="block text-gray-700 text-sm font-bold mb-2">Kota</label>
            <input
              type="text"
              id="kota"
              name="kota"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan Kota Anda"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
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
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Masukkan Nomor WhatsApp Anda"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-signal hover:bg-signal-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Daftar Webinar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrasiWebinarPage;
