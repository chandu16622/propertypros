import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


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
        { name: "Buyers", path: "/buyers" },
        { name: "Tenants", path: "/tenants" },
        { name: "Sellers", path: "/sellers" },
        { name: "Services", path: "/services" },
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
            aria-expanded={sidebarOpen}
        >
            <div className="p-3 position-relative">
                <button
                    aria-label="Close sidebar"
                    type="button"
                    className="btn btn-sm btn-outline-light close-sidebar"
                    onClick={() => setSidebarOpen(false)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSidebarOpen(false); }}
                >
                    ×
                </button>

                <ul className="list-unstyled mb-0">
                    {navItems.map((item) => (
                        <li key={item.name} className="mb-2 sidebar-item">
                            <Link
                                to={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={`nav-link ${location.pathname === item.path ? "text-warning fw-semibold" : "text-light"}`}
                                aria-label={item.name}
                            >
                                <span className="side-label" style={{ fontSize: 13 }}>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
        )}
        {/* Overlay for small screens */}
        {showSideNav && sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

           
                <style>{`
                /* Make the sidebar compact (small) by default on all viewports */
                .side-nav{
                    position: fixed;
                    top: 56px;                /* sits directly under top navbar */
                    left: 0;
                    width: 100px;             /* small compact width for text */
                    min-width: 100px;
                    height: calc(100vh - 56px);
                    background: linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(175, 128, 9, 0.3));
                    border-radius: 0;
                    transform: translateX(0); /* docked and visible */
                    transition: width 0.22s ease, box-shadow 0.22s ease;
                    z-index: 1045;
                    overflow: hidden;         /* hide overflow */
                    box-shadow: 2px 0 12px rgba(0,0,0,0.25);
                    text-align: center;
                    padding-top: 8px;
                }

                /* keep open state visually the same width (still small) but allow different styling if needed */
                .side-nav.open{
                    width: 100px;
                }

                /* text layout */
                .side-nav .sidebar-item { padding: 8px 0; }
                .side-nav .nav-link {
                    color: inherit;
                    display: block;
                    text-decoration: none;
                    padding: 8px 4px;
                    font-size: 12px;
                    line-height: 1.2;
                    word-break: break-word;
                }
                .side-nav .nav-link .side-label{ display: block; } /* show text */
                .side-nav .nav-link:hover { color: #ffc107; }

                /* hide the close button on compact docked sidebar */
                .side-nav .close-sidebar{ display: none; }

                /* overlay not used for compact docked sidebar */
                .sidebar-overlay{ display: none; }

                /* Ensure content is shifted to accommodate compact sidebar on larger screens */
                @media (min-width: 768px) {
                    body.has-side-nav > .container,
                    body.has-side-nav > .container-fluid,
                    body.has-side-nav #root > div {
                        padding-left: 100px !important;
                        transition: padding-left 0.22s ease;
                    }
                }

                /* On very small screens keep the sidebar as a centered panel (still compact width) */
                @media (max-width: 767.98px){
                    .side-nav{
                        left: 50%;
                        transform: translateX(-50%);
                        width: 80%;              /* make touch target usable on small screens */
                        max-width: 320px;
                        border-radius: 8px;
                        overflow-y: auto;
                        padding-top: 8px;
                    }
                    .side-nav .nav-link .side-label{ display: block; font-size: 13px; } /* show labels on small panel */
                    .sidebar-overlay{ display: block; position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 1060; }
                    .side-nav .close-sidebar{ display: inline-block; position: absolute; top: 8px; right: 8px; z-index: 1070; }
                }
            `}</style>

        </>
    );
}

export default Dashnavbar;
