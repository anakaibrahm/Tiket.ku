import styles from "./MatchSchedulePage.module.css";
import { useState, useEffect } from "react";
import MatchScheduleCard from "./components/MatchScheduleCard";
import { useNavigate } from "react-router-dom";

interface Team {
  name: string;
  logo: string;
}

interface Match {
  id: string;
  matchId: string;
  team1: Team;
  team2: Team;
  matchTime: string;
  timeZone: string;
  matchDate: string;
  stadium: string;
}

const MatchSchedulePage = () => {
  const [matchScheduleData, setMatchScheduleData] = useState<Match[]>([]);
  const navigate = useNavigate();

  const handleCardClick = (matchId: string) => {
    navigate(`/ticket-order/${matchId}`);
  };

  useEffect(() => {
    fetch("/public/data/matchSchedule.json")
      .then((response) => response.json())
      .then((data: Match[]) => {
        setMatchScheduleData(data);
      });
  }, []);

  return (
    <main className={styles["page-container"]}>
      {matchScheduleData.map((match) => (
        <MatchScheduleCard
          key={match.matchId}
          team1={match.team1}
          team2={match.team2}
          matchTime={match.matchTime}
          timeZone={match.timeZone}
          matchDate={match.matchDate}
          stadium={match.stadium}
          onClick={() => handleCardClick(match.matchId)}
        />
      ))}
    </main>
  );
};

export default MatchSchedulePage;
