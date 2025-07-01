// import { GetDatas } from "../../../api/datas";
// import { HomeCardSchedule } from "../../../types/auth";
import { useNavigate } from "react-router-dom";

type Match = {
  team1: string;
  team2: string;
  matchTime: string;
  stadium: string;
};
const HomeMatchScheduleCard: React.FC<Match> = ({
  team1,
  team2,
  matchTime,
  stadium,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/order-form");
  };

  return (
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
  );
};

export default HomeMatchScheduleCard;
