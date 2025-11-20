import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "For Buyers", path: "/buyers" },
    { name: "For Tenants", path: "/tenants" },
    { name: "For Sellers", path: "/sellers" },
    { name: "Services", path: "/services" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm"
      style={{
        background:
          scrolled || location.pathname !== "/"
            ? "rgba(0, 0, 0, 0.8)"
            : "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(175, 128, 9, 0.3))",
        backdropFilter: "blur(8px)",
        transition: "background-color 0.4s ease, box-shadow 0.3s ease",
        boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold fs-3 text-white">
          Property<span className="text-warning">Pro</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            {navItems.map((item) => (
              <li key={item.name} className="nav-item mx-2">
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path
                      ? "text-warning fw-semibold"
                      : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="nav-item mx-3">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-outline-warning text-white px-3 rounded-pill fw-semibold btn-sm"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="btn btn-outline-warning text-white px-3 rounded-pill fw-semibold btn-sm"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
