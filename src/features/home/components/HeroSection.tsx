import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/matchs");

  return (
    <section className="flex flex-col items-center justify-center flex-1 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Pesan Tiket <span className="text-yellow-400">Pertandingan Bola</span>{" "}
        Favoritmu
      </h1>
      <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-2xl">
        Mudah, cepat, dan aman—dapatkan tiket pertandingan sepak bola langsung
        dari genggamanmu
      </p>
      <button
        className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg transition mb-8 cursor-pointer"
        onClick={handleClick}
      >
        Pesan Sekarang
      </button>
    </section>
  );
};

export default HeroSection;
