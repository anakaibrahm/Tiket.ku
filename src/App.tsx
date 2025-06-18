import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MatchSchedulePage from "./pages/matches/Matches";
import Payment from "./pages/payment/Payment";
import RegisterForm from "./pages/register-form/RegisterForm";
import Ticket from "./pages/ticket/Ticket";
// import SuccessPage from "./pages/Succes/succesPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<MatchSchedulePage />} />
        <Route path="/matchs/:matchId/form" element={<RegisterForm />} />
        <Route path="/matchs/:matchId/payment/:userId" element={<Payment />} />
        {/* <Route path="/succes" element={<SuccessPage />} /> */}
        <Route path="/user/:userId/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
