const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-lg rounded-2xl !p-8 max-w-md text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-500 !mx-auto !mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2l4 -4M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10s-4.48 10-10 10z"
          />
        </svg>
        <h1 className="text-2xl font-semibold text-green-700 !mb-2">
          Pembayaran Berhasil!
        </h1>
        <p className="text-gray-600 !mb-6">
          Terima kasih! Transaksi Anda telah diproses dengan sukses.
        </p>
        <a
          href="/"
          className="inline-block bg-green-600 text-white !px-6 !py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default SuccessPage;
