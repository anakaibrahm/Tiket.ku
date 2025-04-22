import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MatchSchedule from "./Pages/MatchSchedule/MatchSchedulePage";
import TicketOrderPage from "./Pages/TicketOrder/TicketOrderPage";
import "./Styles/Global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MatchSchedule />} />
        <Route path="/ticket-order" element={<TicketOrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
