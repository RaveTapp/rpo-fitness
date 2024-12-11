import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReneMain from "./reneMain";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/workout/*" element={<ReneMain />}/>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);