import MatchScheduleCard from "./components/MatchScheduleCard";
import { useNavigate } from "react-router-dom";
import { GetDatas } from "../../api/datas";

const MatchSchedulePage = () => {
  const { matchDatas } = GetDatas();
  const navigate = useNavigate();

  const handleCardClick = (matchId: string) => {
    navigate(`/order-form/${matchId}`);
  };

  return (
    <main className="h-screen grid grid-cols-3 grid-rows-3 !p-[1.5rem] !gap-[1rem]">
      {matchDatas.map((data) => (
        <MatchScheduleCard
          key={data.matchId}
          team1={data.team1}
          team2={data.team2}
          matchTime={data.matchTime}
          timeZone={data.timeZone}
          matchDate={data.matchDate}
          stadium={data.stadium}
          onClick={() => handleCardClick(data.matchId)}
        />
      ))}
    </main>
  );
};

export default MatchSchedulePage;
