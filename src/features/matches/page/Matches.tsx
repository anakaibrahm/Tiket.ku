import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { useMatchData } from "../hooks/useMatchData";

const Matches = () => {
  const navigate = useNavigate();
  const { matches } = useMatchData();

  const handleCardClick = (matchId: string) => {
    sessionStorage.setItem("selectedMatchId", matchId);
    if (matchId) {
      navigate(`/matchs/${matchId}/form`);
    }
  };

  return (
    <main className="h-screen grid grid-cols-3 grid-rows-3 p-[1.5rem] gap-[1rem]">
      {matches.map((data) => (
        <Card
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

export default Matches;
