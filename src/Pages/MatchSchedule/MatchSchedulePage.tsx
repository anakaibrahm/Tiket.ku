import styles from "./MatchSchedulePage.module.css";
import IndonesianLogo from "../../assets/IndonesiaFootballLogo.png";
import BahrainLogo from "../../assets/BahrainFootballLogo.png";
import MatchScheduleCard from "./components/MatchScheduleCard";

const MatchSchedulePage = () => {
  return (
    <main className={styles["page-container"]}>
      <MatchScheduleCard
        team1={{
          name: "Indonesia",
          logo: IndonesianLogo,
        }}
        team2={{
          name: "Bahrain",
          logo: BahrainLogo,
        }}
        matchTime="20:00"
        timeZone="WIB"
        matchDate="25 September 2023"
        stadium="Stadion Gelora Bung Karno"
      />
    </main>
  );
};

export default MatchSchedulePage;
