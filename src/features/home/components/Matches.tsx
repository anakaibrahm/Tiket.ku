// import MatchSchedulePage from "../../MatchSchedule/MatchSchedulePage";

const HomeMatchs = () => {
  return (
    <section id="jadwal" className="bg-white/80 py-12 px-4">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
        Jadwal Pertandingan Terdekat
      </h2>
      <div className="max-w-3xl mx-auto grid gap-6">
        {/* {matches.map((match) => (
          <div
            key={match.id}
            className="bg-white border-l-4 border-yellow-400 shadow p-6 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="font-bold text-lg text-blue-900">{match.teams}</p>
              <p className="text-blue-700">
                {match.date} • {match.location}
              </p>
            </div>
            <a
              href="/pesan"
              className="mt-4 md:mt-0 bg-blue-900 text-yellow-400 px-6 py-2 rounded hover:bg-blue-800 transition font-semibold"
            >
              Pesan Tiket
            </a>
          </div>
        ))} */}
        {}
      </div>
    </section>
  );
};

export default HomeMatchs;
