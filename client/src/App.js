import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import AdminHeader from "./components/AdminHeader";
import Footers from "./components/Footers";
import InboundTours from "./pages/InboundTours";
import OutboundTours from "./pages/OutboundTours";
import CorporateTravelServices from "./pages/CorporateTravelServices";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admindashboard from "./pages/Admindashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function Layout({ children }) {
  const location = useLocation();
  const isAdminDashboard = location.pathname === "/admindashboard";

  return (
    <>
      {isAdminDashboard ? <AdminHeader /> : <Header />}
      <div>{children}</div>
      {!isAdminDashboard && <Footers />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inboundTours" element={<InboundTours />} />
          <Route path="/outboundTours" element={<OutboundTours />} />
          <Route path="/corporateTravelServices" element={<CorporateTravelServices />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admindashboard" element={
            <ProtectedRoute>
              <Admindashboard />
            </ProtectedRoute>
          }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;