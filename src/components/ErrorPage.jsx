// src/components/ErrorPage.jsx

import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-7xl font-bold text-red-500">404</h1>

      <h2 className="text-2xl font-semibold mt-4">
        Halaman Tidak Ditemukan
      </h2>

      <p className="text-gray-600 mt-2">
        Maaf, halaman yang kamu cari tidak tersedia.
      </p>

      <Link
        to="/"
        className="mt-6 px-5 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
      >
        Kembali ke Home
      </Link>
    </div>
  );
}