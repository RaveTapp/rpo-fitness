import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReneMain from "./reneMain";
import LandingPage from "./LandingPage";
import SignUp from "./signup/signup";
import Login from "./login/login";
import AppNK from "./AppNK";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/workout/*" element={<ReneMain />} />
        <Route path="/homepage" element={<AppNK />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
