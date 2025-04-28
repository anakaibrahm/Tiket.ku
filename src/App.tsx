import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MatchSchedule from "./Pages/MatchSchedule/MatchSchedulePage";
import OrderForm from "./Pages/OrderForm/OrderFormPage";
import "./Styles/Global.css";
import PaymentPage from "./Pages/Payment/PaymentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentPage />} />
        <Route path="/ticket-order/:MatchId" element={<OrderForm />} />
      </Routes>
    </Router>
  );
}

export default App;
