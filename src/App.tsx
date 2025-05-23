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
        <Route path="/" element={<MatchSchedule />} />
        <Route path="/order-form/:matchId" element={<OrderForm />} />
        <Route
          path="/payment-form/:matchId/:userId"
          element={<PaymentPage />}
        />
        <Route path="/succes" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
}

export default App;
