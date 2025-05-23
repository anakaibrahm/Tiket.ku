import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MatchSchedule from "./pages/MatchSchedule/MatchSchedulePage";
import OrderForm from "./pages/OrderForm/OrderFormPage";
import "./Styles/Global.css";
import PaymentPage from "./pages/Payment/PaymentPage";
import "./app.css";
import SuccessPage from "./pages/Succes/succesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OrderForm />} />
        <Route path="/match-schedule/:userId" element={<MatchSchedule />} />
        <Route path="/payment-form/:userId" element={<PaymentPage />} />
        <Route path="/succes" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
