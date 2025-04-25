import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MatchSchedule from "./Pages/MatchSchedule/MatchSchedulePage";
import OrderForm from "./Pages/OrderForm/OrderFormPage";
import "./Styles/Global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MatchSchedule />} />
        <Route path="/ticket-order/:MatchId" element={<OrderForm />} />
      </Routes>
    </Router>
  );
}

export default App;
