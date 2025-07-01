import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./features/home/page/Home";
import Matches from "./features/matches/page/Matches";
import Payment from "./features/payment/page/Payment";
import Ticket from "./features/tickets/component/Ticket";
import RegisterForm from "./features/users/page/RegisterForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matchs" element={<Matches />} />
        <Route path="/matchs/:matchId/form" element={<RegisterForm />} />
        <Route path="/matchs/:matchId/payment/:userId" element={<Payment />} />
        <Route path="/user/:userId/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
