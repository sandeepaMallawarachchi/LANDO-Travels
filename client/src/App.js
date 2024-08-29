import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

//user routes
import Home from "./pages/Home";
import Header from "./components/Header";
import AdminHeader from "./components/AdminHeader";
import Footers from "./components/Footers";
import InboundTours from "./pages/InboundTours";
import OutboundTours from "./pages/OutboundTours";
import CorporateTravelServices from "./pages/CorporateTravelServices";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectedRoute";

//admin routes
import Admindashboard from "./pages/adminPages/Admindashboard";
import Inbox from "./pages/adminPages/Inbox";
import AdminSideBar from "./pages/adminPages/AdminSideBar";
import AdminRegister from "./pages/adminPages/AdminRegister";
import AllAdmins from "./pages/adminPages/AllAdmins";
import AdminLogin from "./pages/adminPages/AdminLogin";
import AdminCards from "./pages/adminPages/AdminCards";

function Layout({ children }) {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {isAdminRoute ? (
        <>
          <AdminHeader />
          <div className="flex">
            <AdminSideBar />
            <div className="flex-grow">{children}</div>
          </div>
        </>
      ) : (
        <>
          <Header />
          <div>{children}</div>
          <Footers />
        </>
      )}
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
          <Route
            path="/corporateTravelServices"
            element={<CorporateTravelServices />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route
            path="/admin/admindashboard/:adminID"
            element={
              <ProtectedRoute>
                <Admindashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/inbox"
            element={
              <ProtectedRoute>
                <Inbox />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/adminregister"
            element={
              <ProtectedRoute>
                <AdminRegister />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/allUsers"
            element={
              <ProtectedRoute>
                <AllAdmins />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/workhistory"
            element={
              <ProtectedRoute>
                <Workflow />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
