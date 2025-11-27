import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUsers, FaHome, FaStore, FaWrench } from 'react-icons/fa';


function Dashnavbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [isSmall, setIsSmall] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : true);

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

    useEffect(() => {
        const onResize = () => setIsSmall(window.innerWidth < 768);
        window.addEventListener('resize', onResize);
        // init
        onResize();
        return () => window.removeEventListener('resize', onResize);
    }, []);

    // Auto-open on large screen when resize causes isSmall -> false, and close when isSmall -> true
    useEffect(() => {
        if (!showSideNav) return;
        if (!isSmall) {
            setSidebarOpen(true);
        } else {
            setSidebarOpen(false);
        }
    }, [isSmall, showSideNav]);

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

    // Lock body scrolling when sidebar is used as modal on small screens
    useEffect(() => {
        if (sidebarOpen && isSmall) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = prev; };
        }
        return;
    }, [sidebarOpen, isSmall]);

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

    // Focus trap + ESC close when sidebar is open in small screens
    useEffect(() => {
        if (!sidebarOpen || typeof window === 'undefined' || window.innerWidth >= 768) return;
        const side = document.getElementById('sideNav');
        if (!side) return;

        const focusable = side.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        first?.focus();

        const onKey = (e) => {
            if (e.key === 'Escape' || e.key === 'Esc') {
                setSidebarOpen(false);
                return;
            }
            if (e.key === 'Tab') {
                if (focusable.length === 0) { e.preventDefault(); return; }
                if (e.shiftKey) {
                    if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
                } else {
                    if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
                }
            }
        };

        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [sidebarOpen]);

    const navItems = [
        { name: "Buyers", path: "/buyers", icon: FaUsers },
        { name: "Tenants", path: "/tenants", icon: FaHome },
        { name: "Sellers", path: "/sellers", icon: FaStore },
        { name: "Services", path: "/services", icon: FaWrench },
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

                {showSideNav && isSmall && (
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
            role={isSmall ? 'dialog' : 'navigation'}
            aria-hidden={!sidebarOpen}
            aria-modal={isSmall ? sidebarOpen : undefined}
            
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
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                        <li key={item.name} className="mb-2 sidebar-item">
                            <Link
                                to={item.path}
                                onClick={() => setSidebarOpen(false)}
                                className={`nav-link ${location.pathname === item.path ? "text-warning fw-semibold" : "text-light"}`}
                                aria-current={location.pathname === item.path ? 'page' : undefined}
                                aria-label={item.name}
                                title={item.name}
                            >
                                {/* Icon + label (compact) */}
                                { /* React Icon component for consistent rendering */ }
                                {item.icon && <Icon className="nav-icon" aria-hidden="true" />}
                                <span className="side-label" style={{ fontSize: 12 }}>{item.name}</span>
                            </Link>
                        </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
        )}
        {/* Overlay for small screens */}
        {showSideNav && isSmall && sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>}

           
                <style>{`
                /* Make the sidebar compact (small) by default on all viewports */
                :root{ --sidebar-width: 64px; }
                .side-nav{
                    position: fixed;
                    top: 56px;                /* sits directly under top navbar */
                    left: 0;
                    width: var(--sidebar-width);             /* small compact width for text */
                    min-width: var(--sidebar-width);
                    height: calc(100vh - 56px);
                    background: linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(175, 128, 9, 0.3));
                    border-radius: 0;
                    transform: translateX(0); /* docked and visible */
                    transition: width 0.22s ease, box-shadow 0.22s ease;
                        z-index: 1065;
                    overflow: hidden;         /* hide overflow */
                    pointer-events: auto;     /* allow interactions on docked sidebar */
                    box-shadow: 2px 0 12px rgba(0,0,0,0.25);
                    text-align: center;
                    padding-top: 2px;
                    max-height: calc(100vh - 56px);
                }

                /* keep open state visually the same width (still small) but allow different styling if needed */
                .side-nav.open{
                    width: var(--sidebar-width);
                }

                /* text layout */
                .side-nav .list-unstyled{ margin-top: 4px; padding-left: 0; }
                .side-nav .sidebar-item { padding: 2px 0; }
                .side-nav .nav-link {
                    color: inherit;
                    display: flex;               /* use column layout (icon above text) */
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 2px;
                    text-decoration: none;
                    padding: 2px 4px;
                    font-size: 10px;
                    line-height: 1.1;
                    word-break: break-word;
                    min-height: 32px;          /* reduce vertical whitespace */
                }
                .side-nav .nav-icon{ /* small icons */
                    font-size: 14px;
                    line-height: 1;
                    width: 16px;
                    height: 16px;
                    display: inline-block;
                }
                .side-nav .nav-link .side-label{ display: block; font-size: 10px; } /* show text */
                .side-nav .nav-link:hover { color: #ffc107; }

                /* hide the close button on compact docked sidebar */
                .side-nav .close-sidebar{ display: none; }

                /* overlay not used for compact docked sidebar */
                .sidebar-overlay{ display: none; }

                /* hide the navbar toggler by default; only show on small screens */
                .navbar-toggler{ display: none; }

                /* Ensure content is shifted to accommodate compact sidebar on larger screens */
                @media (min-width: 768px) {
                    body.has-side-nav .container,
                    body.has-side-nav .container-fluid,
                    body.has-side-nav #root,
                    body.has-side-nav #root > div,
                    body.has-side-nav main {
                        padding-left: var(--sidebar-width) !important;
                        transition: padding-left 0.22s ease;
                    }
                }

                /* On very small screens keep the sidebar as a centered panel (still compact width) */
                @media (max-width: 767.98px){
                    .navbar-toggler{ display: inline-block; }
                    .side-nav{
                        left: 50%;
                        transform: translateX(-50%) scale(.99);
                        opacity: 0;
                        transition: transform 0.2s ease, opacity 0.2s ease;
                        width: 80%;              /* make touch target usable on small screens */
                        max-width: 320px;
                        border-radius: 8px;
                        overflow-y: auto;
                        top: 10vh;
                        max-height: calc(100vh - 20vh);
                        pointer-events: none; /* not interactive until open */
                        padding-top: 8px;
                    }
                    /* when open on small screens animate in */
                    .side-nav.open { transform: translateX(-50%) scale(1); opacity: 1; pointer-events: auto; }
                    /* On small panel we want icons and labels horizontally for readability */
                    .side-nav .nav-link{ flex-direction: row; gap: 8px; padding: 10px; }
                    .side-nav .nav-icon { font-size: 16px; width: auto; height: auto; }
                    .side-nav .nav-link .side-label{ display: block; font-size: 13px; }
                    .sidebar-overlay{ display: block; position: fixed; inset: 0; background: rgba(0,0,0,0.55); z-index: 1060; pointer-events: auto; }
                    .side-nav .close-sidebar{ display: inline-block; position: absolute; top: 8px; right: 8px; z-index: 1070; }
                }
            `}</style>

        </>
    );
}

export default Dashnavbar;
