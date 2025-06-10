import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/matchs");

  return (
    <section className="flex flex-col items-center justify-center flex-1 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
        Pesan Tiket <span className="text-yellow-400">Pertandingan Bola</span>{" "}
        Favoritmu
      </h1>
      <p className="text-lg md:text-2xl text-white/80 mb-8 max-w-2xl">
        Mudah, cepat, dan aman—dapatkan tiket pertandingan sepak bola langsung
        dari genggamanmu
      </p>
      <button
        className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition mb-8 cursor-pointer"
        onClick={handleClick}
      >
        Pesan Sekarang
      </button>
      {/* <img
        src="https://images.unsplash.com/photo-1505843278519-559849c77b93?auto=format&fit=crop&w=800&q=80"
        alt="Stadium"
        className="max-w-md w-full rounded-xl shadow-2xl mb-8 border-4 border-white/20"
      /> */}
    </section>
  );
};

export default HeroSection;
