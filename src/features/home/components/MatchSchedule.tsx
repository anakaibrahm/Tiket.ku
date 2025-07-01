import { useNavigate } from "react-router-dom";
import { Match } from "./homeProps";

const HomeMatchs: React.FC<Match> = ({
  team1,
  team2,
  matchTime,
  matchId,
  stadium,
}) => {
  // const { matches } = useMatchData();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/matchs/${matchId}/form`);
  };

  return (
    <section id="jadwal" className="bg-white/80 py-12 px-4">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
        Jadwal Pertandingan Terdekat
      </h2>
      <div className="max-w-3xl mx-auto grid gap-6">
        <div className="bg-white border-l-4 border-yellow-400 shadow p-6 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-lg text-blue-900">{`${team1} vs ${team2}`}</p>
            <p className="text-blue-700">{`${matchTime} • ${stadium}`}</p>
          </div>
          <button
            className="mt-4 md:mt-0 bg-blue-900 text-yellow-400 px-6 py-2 rounded hover:bg-blue-800 transition font-semibold cursor-pointer"
            onClick={handleCardClick}
          >
            Pesan Tiket
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeMatchs;
