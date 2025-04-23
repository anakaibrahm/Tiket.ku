import styles from "./MatchSchedulePage.module.css";
import MatchScheduleCard from "./components/MatchScheduleCard";
import { useNavigate } from "react-router-dom";
import { MatchData } from "../../hooks/MatchData";

const MatchSchedulePage = () => {
  const { matchScheduleData } = MatchData();
  const navigate = useNavigate();

  const handleCardClick = (matchId: string) => {
    navigate(`/ticket-order/${matchId}`);
  };

  return (
    <main className={styles["page-container"]}>
      {matchScheduleData.map((matchScheduleData) => (
        <MatchScheduleCard
          key={matchScheduleData.matchId}
          team1={matchScheduleData.team1}
          team2={matchScheduleData.team2}
          matchTime={matchScheduleData.matchTime}
          timeZone={matchScheduleData.timeZone}
          matchDate={matchScheduleData.matchDate}
          stadium={matchScheduleData.stadium}
          onClick={() => handleCardClick(matchScheduleData.matchId)}
        />
      ))}
    </main>
  );
};

export default MatchSchedulePage;
