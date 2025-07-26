import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgIMG from "../../../assets/backgrounds/bg-hero.png";
import { Button } from "../../../components";
import { Navbar } from "../../../components/Navbar";
import { supabase } from "../../../lib/supabase";
import AuthContainer from "../../auth/components/AuthContainer";
import { useMatchData } from "../../matches/hooks/useMatchData";

const HomePage = () => {
  const [authType, setAuthType] = useState<"login" | "signup">("login");
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { matches } = useMatchData();
  const navigate = useNavigate();

  const handleCTAClick = async () => {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      setAuthType("login");
      setIsAuthOpen(true);
      return;
    }
  };

  const handleOpenAuth = (type: "login" | "signup") => {
    setAuthType(type);
    setIsAuthOpen(true);
  };

  const closeAuth = () => {
    setIsAuthOpen(false);
  };

  return (
    <main>
      <header className="fixed z-3 translate-1/2 right-1/2">
        <Navbar
          handleLogin={() => handleOpenAuth("login")}
          handleSignup={() => handleOpenAuth("signup")}
        />
      </header>
      <section className="bg-te-papa-green-500 flex flex-col items-center justify-center h-[100vh]">
        <div
          className="absolute bg-cover bg-no-repeat inset-0 z-0 h-full"
          style={{ backgroundImage: `url(${bgIMG})` }}
        />
        <div className="absolute inset-0 z-1 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),#1e3b35)] h-full" />

        <div className="z-2 flex flex-col items-center mt-9">
          <h1 className="text-white text-6xl font-extrabold text-center leading-tight mb-1.5">
            Dukung Tim Favoritmu,
            <br />
            Langsung di <span className="text-aquamarine-500">Stadion</span>
          </h1>
          <p className="text-white text-xl text-center">
            Rasakan atmosfernya. Jadilah bagian dari kemenangan.
          </p>
          <Button
            label="PESAN TIKET SEKARANG"
            className="bg-ecstasy-500 py-4 px-5 rounded-2xl font-semibold text-white mt-10 text-[14px]"
            onClick={handleCTAClick}
          />
        </div>
      </section>

      {/* <section className="bg-te-papa-green-500 flex justify-center">
        <div className="glassmorphism relative z-2 w-[1100px] h-fit flex flex-col items-center pt-5">
          {matches.map((match) => (
            <ScheduleCard
              key={match.match_id}
              teamHome={{ name: match.team_home, logo: match.logo_home }}
              teamAway={{ name: match.team_away, logo: match.logo_away }}
            />
          ))} */}
      {/* <Button
            label="lihat selengkapnya"
            className="absolute bg-te-papa-green-400/80 py-5 px-7 rounded-2xl font-medium mt-7 text-aquamarine-400 backdrop-blur-3xl z-2 -bottom-8 border border-aquamarine-400/50 capitalize text-2xl"
            onClick={() => handleCTAClick()}
          /> */}
      {/* </div> */}
      {/* </section> */}

      {/* Letakkan AuthContainer di sini. Ia akan muncul sebagai overlay. */}
      {isAuthOpen && (
        <>
          {/* Backdrop dengan efek blur */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-4"
            onClick={closeAuth}
          />
          <AuthContainer
            authType={authType}
            onClose={closeAuth}
            onAuthTypeChange={setAuthType}
          />
        </>
      )}
    </main>
  );
};

export default HomePage;
