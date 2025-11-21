// src/Pages/Dashboard.js
import React from "react";
import LandingPage from "../Components/LandingPage";
import Dashnavbar from "../Components/Dashnavbar";

export default function Dashboard() {
  return (
    <>
      {/* Dashboard Navbar */}
      <Dashnavbar />

      {/* Landing page content */}
      <LandingPage />
    </>
  );
}
