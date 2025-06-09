import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HomeMatchs from "./components/HomeMatchs";
import Navbar from "./components/Navbar";
import Order from "./components/Order";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-blue-900 to-blue-400 flex flex-col">
      <Navbar />
      <div className="flex" style={{ height: "calc(100vh - 64px)" }}>
        <HeroSection />
      </div>
      <HomeMatchs />
      <Order />
      <Footer />
    </main>
  );
};

export default HomePage;
