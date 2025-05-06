import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MatchSchedule from "./pages/MatchSchedule/MatchSchedulePage";
import OrderForm from "./pages/OrderForm/OrderFormPage";
import "./Styles/Global.css";
import PaymentPage from "./Pages/Payment/PaymentPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MatchSchedule />} />
        <Route path="/order-form" element={<OrderForm />} />
      </Routes>
    </Router>
  );
}

export default App;
