import React from "react";
import styles from "../MatchSchedulePage.module.css";

interface MatchScheduleCard {
  team1: {
    name: string;
    logo: string;
  };
  team2: {
    name: string;
    logo: string;
  };
  matchTime: string;
  timeZone: string;
  matchDate: string;
  stadium: string;
}

const MatchScheduleCard: React.FC<MatchScheduleCard> = ({
  team1,
  team2,
  matchTime,
  timeZone,
  matchDate,
  stadium,
}) => {
  return (
    <div className={styles["match-schedule-card"]}>
      <section className={styles["left"]}>
        <h2 className={styles["team-name-1"]}>{team1.name}</h2>
        <img className={styles["team-logo-1"]} src={team1.logo} alt="" />
      </section>
      <section className={styles["mid"]}>
        <h2 className={styles["match-time"]}>{matchTime}</h2>
        <h2 className={styles["match-time-zone"]}>{timeZone}</h2>
      </section>
      <section className={styles["right"]}>
        <h2 className={styles["team-name-2"]}>{team2.name}</h2>
        <img className={styles["team-logo-2"]} src={team2.logo} alt="" />
      </section>
      <section className={styles["bot"]}>
        <h2 className={styles["match-date"]}>{matchDate}</h2>
        <p className={styles["match-stadium"]}>{stadium}</p>
      </section>
    </div>
  );
};

export default MatchScheduleCard;
