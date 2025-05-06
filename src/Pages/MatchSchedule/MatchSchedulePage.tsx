import styles from "./MatchSchedulePage.module.css";
import MatchScheduleCard from "./components/MatchScheduleCard";
import { useNavigate } from "react-router-dom";
import { GetData } from "../../api/datas";

const MatchSchedulePage = () => {
  const { datas } = GetData();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/order-form`);
  };

  return (
    <main className={styles["page-container"]}>
      {datas.map((data) => (
        <MatchScheduleCard
          key={data.matchId}
          team1={data.team1}
          team2={data.team2}
          matchTime={data.matchTime}
          timeZone={data.timeZone}
          matchDate={data.matchDate}
          stadium={data.stadium}
          onClick={() => handleCardClick()}
        />
      ))}
    </main>
  );
};

export default MatchSchedulePage;
