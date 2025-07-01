const Order = () => {
  return (
    <section id="cara" className="py-12 px-4 bg-blue-900 text-white">
      <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
        Cara Pesan Tiket
      </h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="w-14 h-14 mx-auto rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center text-2xl font-bold mb-4">
            1
          </div>
          <p>Pilih pertandingan dan tiket yang tersedia</p>
        </div>
        <div>
          <div className="w-14 h-14 mx-auto rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center text-2xl font-bold mb-4">
            2
          </div>
          <p>Isi data diri dan lakukan pembayaran</p>
        </div>
        <div>
          <div className="w-14 h-14 mx-auto rounded-full bg-yellow-400 text-blue-900 flex items-center justify-center text-2xl font-bold mb-4">
            3
          </div>
          <p>Dapatkan e-tiket & tunjukkan saat masuk stadion</p>
        </div>
      </div>
    </section>
  );
};

export default Order;
