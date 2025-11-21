import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./Components/Navbar";
import Dashnavbar from "./Components/Dashnavbar";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Buyers from "./Pages/Buyers";
import Tenants from "./Pages/Tenants";
import Sellers from "./Pages/Sellers";
import Services from "./Pages/Services";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProjectDetails from "./Pages/ProjectDetails";
import BuyerProperties from "./Pages/BuyerProperties";
import SellerProperties from "./Pages/SellerProperties";
import Contactus from "./Pages/Contactus";
import Dashboard from "./Pages/Dashboard";
import Rentals from "./Pages/Rentals";

function LayoutWrapper() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Show Navbar ONLY on Landing Page
  const showNavbar = location.pathname === "/";

  return (
    <>
      {showNavbar ? <Navbar /> : <Dashnavbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/buyer-properties" element={<BuyerProperties />} />
        <Route path="/seller-properties" element={<SellerProperties />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}
