import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Component } from "./components/Footer";
import InboundTours from "./pages/InboundTours";
import OutboundTours from "./pages/OutboundTours";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inboundTours" element={<InboundTours />} />
          <Route path="/outboundTours" element={<OutboundTours />} />
        </Routes>
      </div>
      <Component />
    </BrowserRouter>
  );
}

export default App;
