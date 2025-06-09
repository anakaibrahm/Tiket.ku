const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/10 backdrop-blur-md shadow">
      <div className="font-bold text-2xl text-white">
        Tiket.<span className="text-yellow-400">ku</span>
      </div>
      <div className="space-x-4">
        <a
          href="#jadwal"
          className="text-white hover:bg-yellow-400 rounded px-3 py-2 transition-all duration-300 hover:text-blue-900"
        >
          Jadwal
        </a>
        <a
          href="#cara"
          className="text-white hover:bg-yellow-400 rounded px-3 py-2 transition-all duration-300 hover:text-blue-900"
        >
          Cara Pesan
        </a>
        <a
          href="#kontak"
          className="text-white hover:bg-yellow-400 rounded px-3 py-2 transition-all duration-300 hover:text-blue-900"
        >
          Kontak
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
