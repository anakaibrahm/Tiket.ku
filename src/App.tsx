import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MatchSchedulePage from "./pages/MatchSchedule/MatchSchedulePage";
import OrderForm from "./pages/OrderForm/OrderFormPage";
import PaymentPage from "./pages/Payment/PaymentPage";
// import SuccessPage from "./pages/Succes/succesPage";
import Ticket from "./pages/Ticket/Ticket";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matchs" element={<MatchSchedulePage />} />
        <Route path="/matchs/:matchId/form" element={<OrderForm />} />
        <Route
          path="/matchs/:matchId/payment/:userId"
          element={<PaymentPage />}
        />
        {/* <Route path="/succes" element={<SuccessPage />} /> */}
        <Route path="/user/:userId/ticket" element={<Ticket />} />
      </Routes>
    </Router>
  );
}

export default App;
