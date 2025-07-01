import { useMatchData } from "../../matches/hooks/useMatchData";
import Footer from "../components/Footer";
import Order from "../components/Guide";
import HeroSection from "../components/HeroSection";
import HomeMatchs from "../components/MatchSchedule";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const { matches } = useMatchData();
  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-900 to-blue-400 flex flex-col">
      <Navbar />
      <div className="flex" style={{ height: "calc(100vh - 64px)" }}>
        <HeroSection />
      </div>
      {matches.map((match) => (
        <HomeMatchs
          team1={match.team1.name}
          team2={match.team2.name}
          matchTime={match.matchTime}
          matchId={match.matchId}
          stadium={match.stadium}
        />
      ))}
      <Order />
      <Footer />
    </main>
  );
};

export default HomePage;
