import MatchScheduleCard from "./components/MatchScheduleCard";
import { useNavigate } from "react-router-dom";
import { GetDatas } from "../../api/datas";
// import { useParams } from "react-router-dom";

const MatchSchedulePage = () => {
  const { matchDatas } = GetDatas();
  const navigate = useNavigate();
  // const { matchId } = useParams();

  const handleCardClick = (matchId: string) => {
    sessionStorage.setItem("selectedMatchId", matchId); // simpan matchId
    if (matchId) {
      navigate(`/matchs/${matchId}/form`);
    }

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
