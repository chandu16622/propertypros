import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBed, FaTag, FaCogs } from "react-icons/fa";


function Dashnavbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

    useEffect(() => {
        const handleScroll = () => {
            // When user scrolls past 50px, make navbar solid
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Keep login state updated when routes change or user logs in/out
    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }, [location]);

    // If logged in, auto-open sidebar on larger screens; hide on login/signup pages
    const showSideNav = isLoggedIn && !["/login", "/signup"].includes(location.pathname);
    useEffect(() => {
        if (!showSideNav) {
            setSidebarOpen(false);
            return;
        }

        // Auto-open on large screens
        const isLarge = window?.innerWidth >= 768;
        setSidebarOpen(isLarge);
    }, [isLoggedIn, location.pathname, showSideNav]);

    // Close sidebar when user clicks anywhere outside sidebar (helps on large screens)
    useEffect(() => {
        const handler = (e) => {
            if (!sidebarOpen) return;
            const side = document.getElementById('sideNav');
            const toggler = document.querySelector('.navbar-toggler');
            if (side && !side.contains(e.target) && toggler && !toggler.contains(e.target)) {
                setSidebarOpen(false);
            }
        };
        document.addEventListener('click', handler);
        return () => document.removeEventListener('click', handler);
    }, [sidebarOpen]);

    // Add a body class so content can be shifted on larger screens when sidebar is present
    useEffect(() => {
        const className = 'has-side-nav';
        const shouldAdd = showSideNav && sidebarOpen && window?.innerWidth >= 768;
        if (shouldAdd) {
            document.body.classList.add(className);
        } else {
            document.body.classList.remove(className);
        }
        return () => document.body.classList.remove(className);
    }, [showSideNav, sidebarOpen]);

    const navItems = [
        { name: "For Buyers", path: "/buyers", icon: <FaHome /> },
        { name: "For Tenants", path: "/tenants", icon: <FaBed /> },
        { name: "For Sellers", path: "/sellers", icon: <FaTag /> },
        { name: "Services", path: "/services", icon: <FaCogs /> },
    ];

    return (
        <>
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

                {showSideNav && (
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-label="Toggle navigation"
                    onClick={() => setSidebarOpen((s) => !s)}
                    aria-controls="sideNav"
                    aria-expanded={sidebarOpen}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                )}

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item mx-3">
                            <Link
                                to="/"
                                className="btn btn-outline-warning text-white px-3 rounded-pill fw-semibold btn-sm"
                                onClick={() => {
                                    localStorage.removeItem("isLoggedIn");
                                    setIsLoggedIn(false);
                                    setSidebarOpen(false);
                                }}
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* Sidebar */}
        {showSideNav && (
        <aside
            className={`side-nav bg-dark text-light ${sidebarOpen ? "open" : ""}`}
            id="sideNav"
            role="navigation"
            aria-hidden={!sidebarOpen}
        >
            <button
                aria-label="Close sidebar"
                className="btn btn-sm btn-outline-light close-sidebar"
                onClick={() => setSidebarOpen(false)}
            >
                ×
            </button>
            <div className="p-3">
                <h5 className="text-warning fw-bold mb-3">Explore</h5>
                <ul className="list-unstyled">
                    {navItems.map((item) => (
                        <li key={item.name} className="mb-3 text-center sidebar-item" title={item.name}>
                            <Link
                                to={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={`nav-link d-flex flex-column align-items-center ${location.pathname === item.path ? "text-warning fw-semibold" : "text-light"}`}
                                aria-label={item.name}
                            >
                                <div style={{ fontSize: 18 }}>{item.icon}</div>
                                <span className="side-label mt-1" style={{ fontSize: 10, display: "none" }}>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
        )}
        {/* Overlay for small screens */}
        {showSideNav && sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

            {/* Sidebar styles (local) */}
                <style>{`
                .side-nav{
                    position: fixed;
                    top: 56px;
                    left: 0;
                    width: 60px; /* smaller width */
                    height: calc(100vh - 56px);
                    background: rgba(10,10,10,0.95);
                    transform: translateX(-110%);
                    transition: transform 0.28s ease, width 0.28s ease;
                    z-index: 1045;
                    overflow-y: auto;
                    box-shadow: 2px 0 12px rgba(0,0,0,0.25);
                    text-align: center;
                }
                .side-nav.open{ transform: translateX(0); }
                .side-nav .close-sidebar{ display: inline-block; margin-left: auto; }
                .side-nav .sidebar-item { padding: 12px 0; }
                .side-nav .nav-link { color: inherit; }
                .side-nav .nav-link:hover { color: #ffc107; }
                .side-nav .side-label{ display:none; }
                .sidebar-overlay{ position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 1040; }
                @media (min-width: 768px){
                    .side-nav{ transform: translateX(0); min-width: 60px; }
                    .sidebar-overlay{ display: none; }
                }
                /* Keep side-nav compact with no hover expansion */
                .side-nav { width: 60px; }
                .side-nav .side-label{ display: none; }
                
                /* When the sidebar is open on larger screens, shift the page content to the right */
                @media (min-width: 768px) {
                    body.has-side-nav > .container,
                    body.has-side-nav > .container-fluid,
                    body.has-side-nav #root > div {
                        padding-left: 60px !important;
                        transition: padding-left 0.28s ease;
                    }
                }
            `}</style>
        </>
    );
}

export default Dashnavbar;
