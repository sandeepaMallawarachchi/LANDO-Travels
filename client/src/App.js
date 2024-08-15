import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Component } from "./components/Footer";
import InboundTours from "./pages/InboundTours";
import OutboundTours from "./pages/OutboundTours";
import CorporateTravelServices from "./pages/CorporateTravelServices";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inboundTours" element={<InboundTours />} />
          <Route path="/outboundTours" element={<OutboundTours />} />
          <Route path="/corporateTravelServices" element={<CorporateTravelServices />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Component />
    </BrowserRouter>
  );
}

export default App;
