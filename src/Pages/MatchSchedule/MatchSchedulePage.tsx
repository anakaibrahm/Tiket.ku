import styles from "./MatchSchedulePage.module.css";
import { useState, useEffect } from "react";
import MatchScheduleCard from "./components/MatchScheduleCard";
import { v4 as uuidv4 } from "uuid";

interface Team {
  name: string;
  logo: string;
}

interface Match {
  id: string;
  team1: Team;
  team2: Team;
  matchTime: string;
  timeZone: string;
  matchDate: string;
  stadium: string;
}

const MatchSchedulePage = () => {
  const [matchScheduleData, setMatchScheduleData] = useState<Match[]>([]);

  useEffect(() => {
    fetch("/public/data/matchSchedule.json")
      .then((response) => response.json())
      .then((data: Match[]) => {
        const dataWithIds = data.map((match) => ({
          ...match,
          id: uuidv4(),
        }));
        setMatchScheduleData(dataWithIds);
      });
  }, []);

  return (
    <main className={styles["page-container"]}>
      {matchScheduleData.map((match) => (
        <MatchScheduleCard
          key={match.id}
          team1={match.team1}
          team2={match.team2}
          matchTime={match.matchTime}
          timeZone={match.timeZone}
          matchDate={match.matchDate}
          stadium={match.stadium}
        />
      ))}
    </main>
  );
};

export default MatchSchedulePage;
