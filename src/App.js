import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Buyers from "./Pages/Buyers";
import Tenants from "./Pages/Tenants";
import Sellers from "./Pages/Sellers";
import Services from "./Pages/Services";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ProjectDetails from "./Pages/ProjectDetails";

// ⭐ Import Rentals page
import Rentals from "./Pages/Rentals";

function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/sellers" element={<Sellers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/project/:id" element={<ProjectDetails />} />

        {/* ⭐ Added Rentals Route */}
        <Route path="/rentals" element={<Rentals />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
