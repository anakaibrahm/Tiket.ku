import { useNavigate } from "react-router-dom";
import bgIMG from "../../../assets/backgrounds/bg-hero.png";
import { Button } from "../../../components";
import { useMatchData } from "../../matches/hooks/useMatchData";
import ScheduleCard from "../components/ScheduleCard";
const HomePage = () => {
  const { matches } = useMatchData();
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate("/matchs");
  };

  return (
    <main className="bg-te-papa-green-500">
      <section className="flex flex-col items-center justify-center space-y-16 h-[200vh]">
        {/* <div
          className="absolute inset-0 z-0 h-[200vh] bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${bgIMG})` }}
        /> */}

        <div
          className="absolute bg-cover bg-no-repeat inset-0 z-0 h-full"
          style={{ backgroundImage: `url(${bgIMG})` }}
        />
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),#1e3b35)] h-full" />
        <div className="z-20 flex flex-col items-center justify-center mt-3">
          <h1 className="text-white text-7xl font-extrabold text-center leading-tight">
            Dukung Tim Favoritmu,
            <br />
            Langsung di <span className="text-aquamarine-500">Stadion</span>
          </h1>
          <p className="text-white text-3xl text-center mt-5 mb-5">
            Rasakan atmosfernya. Jadilah bagian
            <br />
            dari kemenangan.
          </p>
          <Button
            label="PESAN TIKET SEKARANG"
            className="bg-ecstasy-500 py-5 px-7 rounded-2xl font-semibold mt-7 text-white"
            onClick={() => handleCTAClick()}
          />
        </div>
        {/* </section> */}
        {/* <section className="z-20 relative flex items-center justify-center mt-15"> */}
        <div className="z-20 w-[1200px] h-fit bg-teal-200/25 rounded-[30px] backdrop-blur-[5px] flex flex-col items-center py-6 gap-8">
          {matches.map((match, index) => (
            <ScheduleCard
              key={index}
              teamHome={match.teamHome}
              teamAway={match.teamAway}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
