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
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    }, [location]);

    const showSideNav = isLoggedIn && !["/login", "/signup"].includes(location.pathname);

    useEffect(() => {
        if (!showSideNav) {
            setSidebarOpen(false);
            return;
        }
        const isLarge = window?.innerWidth >= 768;
        setSidebarOpen(isLarge);
    }, [isLoggedIn, location.pathname, showSideNav]);

    useEffect(() => {
        const onResize = () => setIsSmall(window.innerWidth < 768);
        window.addEventListener('resize', onResize);
        onResize();
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        if (!showSideNav) return;
        if (!isSmall) {
            setSidebarOpen(true);
        } else {
            setSidebarOpen(false);
        }
    }, [isSmall, showSideNav]);

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

    useEffect(() => {
        if (sidebarOpen && isSmall) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            return () => { document.body.style.overflow = prev; };
        }
    }, [sidebarOpen, isSmall]);

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

            {showSideNav && (
                <aside
                    className={`side-nav bg-dark text-light ${sidebarOpen ? "open" : ""}`}
                    id="sideNav"
                    role={isSmall ? 'dialog' : 'navigation'}
                    aria-hidden={!sidebarOpen}
                    aria-modal={isSmall ? sidebarOpen : undefined}
                >
                    <div className="p-3 position-relative" style={{ paddingTop: isSmall ? '16px' : '12px' }}>
                        <button
                            aria-label="Close sidebar"
                            type="button"
                            className="btn btn-sm btn-outline-light close-sidebar"
                            onClick={() => setSidebarOpen(false)}
                        >
                            ×
                        </button>

                        <ul className="list-unstyled mb-0" style={{ paddingRight: isSmall ? '8px' : '0' }}>
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.name} className="mb-2 sidebar-item">
                                        <Link
                                            to={item.path}
                                            onClick={() => setSidebarOpen(false)}
                                            className={`nav-link ${location.pathname === item.path ? "text-warning fw-semibold" : "text-light"}`}
                                        >
                                            <Icon className="nav-icon" aria-hidden="true" />
                                            <span className="side-label" style={{ fontSize: isSmall ? 15 : 14 }}>{item.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </aside>
            )}

            {showSideNav && isSmall && sidebarOpen && (
                <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)}></div>
            )}

            {/* STYLE BLOCK */}
            <style>{`
/* Sidebar variables */
:root { 
    --sidebar-width: 120px;
    --sidebar-width-mobile: 280px;
}

/* BASE SIDEBAR - DESKTOP */
.side-nav {
    position: fixed;
    top: 56px;
    left: 0;
    width: var(--sidebar-width);
    min-width: var(--sidebar-width);
    height: calc(100vh - 56px);
    background: linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(175, 128, 9, 0.3));
    border-radius: 0;
    transition: transform 0.25s ease, opacity 0.25s ease;
    z-index: 1065;
    box-shadow: 2px 0 12px rgba(0,0,0,0.25);
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 12px;
    padding-left: 0;
    padding-right: 0;
}

/* MOBILE — sidebar hidden until hamburger toggles it */
@media (max-width: 767.98px) {
    .side-nav {
        position: fixed;
        top: 56px;
        left: 0;
        transform: translateX(-110%);
        opacity: 0;
        width: var(--sidebar-width-mobile);
        max-width: 85vw;
        height: calc(100vh - 56px);
        background: linear-gradient(to bottom, rgba(10,10,10,0.95), rgba(30,30,30,0.9));
        border-radius: 0 12px 12px 0;
        z-index: 1065;
        box-shadow: 3px 0 20px rgba(0,0,0,0.5);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        padding-top: 16px;
        padding-left: 12px;
        padding-right: 12px;
    }
    
    .side-nav.open {
        transform: translateX(0);
        opacity: 1;
    }
}

/* DESKTOP — sidebar always visible when logged in */
@media (min-width: 768px) {
    body.has-side-nav main {
        padding-left: var(--sidebar-width) !important;
    }
}

/* NAV LINKS - DESKTOP */
.side-nav .nav-link {
    color: white;
    display: flex;
    flex-direction: row !important;
    align-items: center;
    gap: 8px;
    padding: 10px 8px;
    text-decoration: none;
    font-size: 12px;
    border-radius: 8px;
    transition: all 0.2s ease;
    white-space: nowrap;
}

.side-nav .nav-link:hover {
    color: #ffc107;
    background: rgba(255, 193, 7, 0.1);
    transform: translateX(4px);
}

.side-nav .nav-link.active {
    color: #ffc107;
    background: rgba(255, 193, 7, 0.15);
}

/* NAV LINKS - MOBILE (when sidebar open) */
@media (max-width: 767.98px) {
    .side-nav.open .nav-link {
        flex-direction: row !important;
        gap: 12px;
        padding: 12px 14px;
        font-size: 15px;
        border-radius: 10px;
        min-height: 48px;
        display: flex;
        align-items: center;
        margin-bottom: 4px;
    }

    .side-nav.open .nav-link:hover {
        background: rgba(255, 193, 7, 0.2);
        transform: translateX(6px);
    }
}

/* ICON SIZE - DESKTOP */
.side-nav .nav-icon {
    font-size: 18px;
    min-width: 22px;
    flex-shrink: 0;
}

/* ICON SIZE - MOBILE */
@media (max-width: 767.98px) {
    .side-nav.open .nav-icon {
        font-size: 22px;
        min-width: 28px;
        flex-shrink: 0;
    }
}

/* LABEL */
.side-nav .side-label {
    white-space: normal;
    word-wrap: break-word;
    flex: 1;
    overflow: visible;
}

/* SIDEBAR ITEM CONTAINER */
.sidebar-item {
    transition: all 0.2s ease;
    margin-bottom: 6px;
}

@media (max-width: 767.98px) {
    .sidebar-item {
        margin-bottom: 8px;
    }
}

/* CLOSE BUTTON (mobile only) */
.close-sidebar {
    display: none;
    background: rgba(255, 193, 7, 0.2) !important;
    color: #ffc107 !important;
    border: 1px solid rgba(255, 193, 7, 0.3) !important;
    width: 36px;
    height: 36px;
    padding: 0 !important;
    font-size: 24px;
    line-height: 1;
}

.close-sidebar:hover {
    background: rgba(255, 193, 7, 0.3) !important;
}

@media (max-width: 767.98px) {
    .close-sidebar {
        display: flex !important;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 12px;
        right: 12px;
        z-index: 200;
    }
}

/* HAMBURGER — always visible on mobile */
@media (max-width: 767.98px) {
    .navbar-toggler {
        display: block !important;
        padding: 0.25rem 0.5rem;
        border-color: rgba(255, 193, 7, 0.5) !important;
    }
    
    .navbar-toggler:focus {
        box-shadow: 0 0 0 0.25rem rgba(255, 193, 7, 0.25) !important;
    }
}

/* OVERLAY ON MOBILE */
.sidebar-overlay {
    display: none;
}

@media (max-width: 767.98px) {
    .sidebar-overlay {
        display: block;
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.65);
        z-index: 1050;
        animation: fadeInOverlay 0.3s ease;
    }
}

/* ANIMATIONS */
@keyframes fadeInOverlay {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* RESPONSIVE PADDING FOR CONTENT */
@media (max-width: 480px) {
    .side-nav {
        --sidebar-width-mobile: 70vw;
    }
}

/* Smooth scroll in sidebar */
.side-nav::-webkit-scrollbar {
    width: 6px;
}

.side-nav::-webkit-scrollbar-track {
    background: rgba(255, 193, 7, 0.05);
}

.side-nav::-webkit-scrollbar-thumb {
    background: rgba(255, 193, 7, 0.3);
    border-radius: 3px;
}

.side-nav::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 193, 7, 0.5);
}
    
`}</style>

        </>
    );
}

export default Dashnavbar;
