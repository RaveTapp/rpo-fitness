import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReneMain from "./reneMain";
import LandingPage from "./LandingPage";
import SignUp from "./signup/signup";
import Login from "./login/login";
import ForgotPassword from "./forgotPassword/forgotPassword";
import AppNK from "./AppNK";
import Nutrition from "./Nutrition";
import Payment from "./payment/payment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/workout/*" element={<ReneMain />} />
        <Route path="/homepage" element={<AppNK />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
