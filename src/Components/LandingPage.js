import React, { useEffect, useRef, useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import AOS from "aos";
import "aos/dist/aos.css";
import {
    FaHome,
    FaKey,
    FaBuilding,
    FaMapMarkedAlt,
    FaComments,
    FaTimes,
    FaPaperPlane,
    FaArrowUp,
    FaEnvelope,
} from "react-icons/fa";
// === Local Images ===
import hero from "../images/hero.jpg";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.jpg";
import project5 from "../images/project5.jpg";
import project6 from "../images/project6.jpg";
import dev1 from "../images/dev1.jpg";
import dev2 from "../images/dev2.jpg";
import dev3 from "../images/dev3.jpg";
import dev4 from "../images/dev4.jpg";
import dev5 from "../images/dev5.jpg";
import dev6 from "../images/dev6.jpg";
import seller1 from "../images/seller1.jpg";
import seller2 from "../images/seller2.jpg";
import seller3 from "../images/seller3.jpg";
import seller4 from "../images/seller4.jpg";
import seller5 from "../images/seller5.jpg";
import seller6 from "../images/seller6.jpg";
import cta from "../images/cta.jpg";
import brochure from "../images/property-brochure.pdf";


/**
 * LandingPage (optimized)
 *
 * - Preserves your original structure & styling.
 * - Adds click-to-play video cards (iframe injected only when user clicks).
 * - Lazy loads images.
 * - Throttled scroll listener to avoid jank.
 * - Scroll-top button given high z-index and offset so it's visible above footer.
 *
 * Drop this into your project as-is (replace previous file).
 */

function LandingPage() {
    const [showChat, setShowChat] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [selectedSeller, setSelectedSeller] = useState(null);


    // store which videos are active (iframe loaded)
    const [activeVideos, setActiveVideos] = useState({});
    const videoContainerRef = useRef(null);

    const toggleChat = () => setShowChat((s) => !s);

    // Throttle helper (simple)
    const throttle = (fn, wait) => {
        let last = 0;
        return (...args) => {
            const now = Date.now();
            if (now - last >= wait) {
                last = now;
                fn(...args);
            }
        };
    };
    const navigate = useNavigate();


    useEffect(() => {
        AOS.init({ duration: 1000, once: true, offset: 100 });

        // throttled scroll handler
        const handleScroll = throttle(() => {
            const heroHeight = window.innerHeight * 0.8;
            setIsNavbarVisible(window.scrollY <= heroHeight);
            setShowScrollTop(window.scrollY > 300);
        }, 80); // checks every ~80ms

        window.addEventListener("scroll", handleScroll, { passive: true });
        // call once to set initial state
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });


    // Click-to-play: mark video active -> render iframe
    const activateVideo = useCallback((id) => {
        setActiveVideos((s) => ({ ...s, [id]: true }));
    }, []);

    // For accessibility: create a thumbnail src for a youtube id
    const ytThumb = (id, max = 0) =>
        `https://img.youtube.com/vi/${id}/${max ? "maxresdefault" : "hqdefault"}.jpg`;

    // Prevent heavy background filters by limiting heavy blurs to decorative elements
    // Lazy image props
    const imgProps = { loading: "lazy", decoding: "async" };


    function HeroSearch() {
        const navigate = useNavigate();
        const [keyword, setKeyword] = useState("");
        const [mode, setMode] = useState("Buy");
        const [budget, setBudget] = useState("");

        const handleSearch = () => {
            let route = "/";

            if (mode === "Buy") route = "/buyers";
            if (mode === "Sell") route = "/sellers";
            if (mode === "PG / Co-living") route = "/rentals";

            navigate(`${route}?search=${keyword}&budget=${budget}`);
        };

        return (
            <div className="row justify-content-center" data-aos="zoom-in">
                <div className="col-lg-8 bg-light p-4 rounded shadow-lg">
                    <div className="row g-3">

                        {/* Search */}
                        <div className="col-md-4">
                            <input
                                type="text"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                className="form-control"
                                placeholder="Search city, locality, or project"
                            />
                        </div>

                        {/* Dropdown */}
                        <div className="col-md-3">
                            <select
                                className="form-select"
                                value={mode}
                                onChange={(e) => setMode(e.target.value)}
                            >
                                <option>Buy</option>
                                <option>Sell</option>
                                <option>PG / Co-living</option>
                            </select>
                        </div>

                        {/* Budget */}
                        <div className="col-md-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Budget (₹)"
                                value={budget}
                                onChange={(e) => setBudget(e.target.value)}
                            />
                        </div>

                        {/* Button */}
                        <div className="col-md-2 d-grid">
                            <button
                                onClick={handleSearch}
                                className="btn btn-warning text-dark fw-bold"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // CHAT STATES
    const [chatMessages, setChatMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    // ===== LOCAL AI ENGINE (Option A) =====
    const getAIReply = (text) => {
        text = text.toLowerCase();

        if (text.includes("hi") || text.includes("hello")) {
            return "Hello! 👋 How can I help you with your property needs today?";
        }

        if (text.includes("buy")) {
            return "Great! 🏠 Are you looking for apartments, villas or open plots? And which city?";
        }

        if (text.includes("sell")) {
            return "Selling a property? Please share your location, property type and expected price.";
        }

        if (text.includes("rent") || text.includes("pg")) {
            return "Sure! I can help you get rentals/PG options. Which location and budget?";
        }

        if (text.includes("budget")) {
            return "Please tell me your budget range and I will suggest options!";
        }

        if (text.includes("location") || text.includes("city")) {
            return "Please type your preferred city or locality! 😊";
        }

        if (text.includes("thank")) {
            return "You're welcome! Happy to help any time 😊";
        }

        return "I can help you with buying, selling or renting properties. Tell me what you're looking for!";
    };

    // SEND MESSAGE
    const sendMessage = () => {
        if (!userInput.trim()) return;

        // Add user message
        setChatMessages((prev) => [...prev, { sender: "user", text: userInput }]);

        const aiReply = getAIReply(userInput);
        setUserInput("");

        // Simulate AI typing
        setTimeout(() => {
            setChatMessages((prev) => [...prev, { sender: "ai", text: aiReply }]);
        }, 600);
    };



    return (
        <div >
            {/* ===== HERO SECTION ===== */}
            <section
                className="d-flex align-items-center justify-content-center text-center text-white"
                style={{
                    height: "100vh",
                    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${hero}) center/cover no-repeat`,
                    backgroundAttachment: "scroll",
                    position: "relative",
                }}
            >
                <div className="container" data-aos="fade-up">
                    <h1 className="display-4 fw-bold mb-3">
                        Find Your Perfect <span className="text-warning">Home</span>
                    </h1>
                    <p className="lead mb-5">
                        Discover, buy, or rent verified properties across India’s top
                        locations.
                    </p>

                    {/* SEARCH BOX */}
                    <HeroSearch />
                </div>
            </section>


            {/* ===== CATEGORIES ===== */}
            <section
                className="py-5 text-center"
                data-aos="fade-up"
                style={{
                    background:
                        "linear-gradient(135deg, #fff8e1 0%, #fff3cd 40%, #ffe082 100%)",
                }}
            >
                <div className="container">
                    <h2 className="fw-bold mb-5 text-dark">Explore by Category</h2>
                    <div className="row g-4">
                        {[
                            {
                                icon: <FaHome className="text-warning fs-1 mb-3" />,
                                title: "Buy Property",
                                desc: "Verified homes and apartments ready to move in.",
                            },
                            {
                                icon: <FaKey className="text-warning fs-1 mb-3" />,
                                title: "Rent Property",
                                desc: "Affordable rentals with verified landlords.",
                            },
                            {
                                icon: <FaBuilding className="text-warning fs-1 mb-3" />,
                                title: "Commercial",
                                desc: "Shops, offices, and coworking spaces.",
                            },
                            {
                                icon: <FaMapMarkedAlt className="text-warning fs-1 mb-3" />,
                                title: "Plots & Lands",
                                desc: "Open plots and land for your dream project.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="col-sm-6 col-md-3" data-aos="zoom-in">
                                <div
                                    className="card border-0 shadow-lg p-4 h-100 hover-zoom"
                                    style={{
                                        borderRadius: "15px",
                                        background: "rgba(255,255,255,0.95)",
                                        backdropFilter: "blur(6px)",
                                    }}
                                >
                                    {item.icon}
                                    <h5 className="fw-semibold">{item.title}</h5>
                                    <p className="text-muted small">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TOP PROJECTS ===== */}
            <section
                className="py-5"
                data-aos="fade-up"
                style={{
                    background: "linear-gradient(135deg, #fffbea 0%, #fdf3c0 40%, #ffe082 100%)",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="container text-center text-dark position-relative">
                    <h2 className="fw-bold mb-5  " style={{ letterSpacing: "1px" }}>
                        Top Highlighted Projects
                    </h2>


                    <div className="row g-4 justify-content-center">
                        {[
                            {
                                img: project1,
                                title: "Skyline Residency",
                                location: "Mumbai, Maharashtra",
                                price: "From ₹85L",
                            },
                            {
                                img: project2,
                                title: "Elite Greens",
                                location: "Bengaluru, Karnataka",
                                price: "From ₹72L",
                            },
                            {
                                img: project3,
                                title: "Palm Heights",
                                location: "Pune, Maharashtra",
                                price: "From ₹65L",
                            },
                            {
                                img: project4,
                                title: "Elite Plus Resorts",
                                location: "Goa",
                                price: "From ₹75L",
                            },
                            {
                                img: project5,
                                title: "Private Villas",
                                location: "Vizag",
                                price: "From ₹1.2cr",
                            },
                            {
                                img: project6,
                                title: "Henrry Enclave",
                                location: "French Colony, Pondicherry",
                                price: "From ₹85L",
                            },
                        ].map((project, i) => (
                            <div key={i} className="col-sm-10 col-md-6 col-lg-4" data-aos="zoom-in-up">
                                <div
                                    className="card project-card shadow-lg border-0 h-100 position-relative overflow-hidden"
                                    style={{
                                        borderRadius: "20px",
                                        background: "#ffffff",
                                        transition: "all 0.4s ease",
                                    }}
                                >
                                    {/* Project Image */}
                                    <div
                                        className="project-img-wrapper"
                                        style={{
                                            position: "relative",
                                            overflow: "hidden",
                                            borderTopLeftRadius: "20px",
                                            borderTopRightRadius: "20px",
                                        }}
                                    >
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="card-img-top"
                                            style={{
                                                height: "260px",
                                                objectFit: "cover",
                                                transition: "transform 0.5s ease",
                                            }}
                                        />
                                        <div
                                            className="img-overlay"
                                            style={{
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                                width: "100%",
                                                height: "100%",
                                                background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))",
                                                opacity: 0,
                                                transition: "opacity 0.4s ease",
                                            }}
                                        ></div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="card-body text-start p-4">
                                        <h5 className="fw-bold text-dark mb-2">{project.title}</h5>
                                        <p className="text-muted mb-1 small">📍 {project.location}</p>
                                        <p className="fw-bold text-warning fs-6 mb-3">{project.price}</p>

                                        {/* Click Button */}
                                        <div className="text-start">
                                            <Link to={`/project/${i + 1}`} style={{ textDecoration: "none" }}>
                                                <button
                                                    className="btn btn-warning text-dark fw-semibold rounded-pill px-4 py-2"
                                                    style={{
                                                        fontSize: "0.95rem",
                                                        boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
                                                        transition: "all 0.3s ease",
                                                    }}
                                                >
                                                    View Details →
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                   <div className="mt-4">
      <a
        href={brochure}
        download="Property-Brochure.pdf"
        className="btn btn-warning text-dark fw-bold px-4 py-2 rounded-pill"
      >
        📄 Download Full Brochure
      </a>
    </div>


                </div>

                {/* Custom CSS for animation & style */}
                <style>{`
    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }
    .project-card:hover .card-img-top {
      transform: scale(1.08);
    }
    .project-card:hover .img-overlay {
      opacity: 1;
    }

    @media (max-width: 768px) {
      .project-card {
        margin-bottom: 1.5rem;
      }
      .card-img-top {
        height: 220px !important;
      }
    }
  `}</style>
            </section>


            {/* ===== TOP PICKS WITH VIDEOS (CAROUSEL, click-to-play) ===== */}
            <section
                className="py-5 text-center text-light"
                data-aos="fade-up"
                style={{ position: "relative", overflow: "hidden", background: "#0b0b0b" }}
            >
                {/* Decorative glow */}
                <div
                    style={{
                        position: "absolute",
                        top: "-40px",
                        right: "-40px",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,193,7,0.3), transparent 70%)",
                        filter: "blur(50px)",
                        pointerEvents: "none",
                    }}
                ></div>

                <div className="container position-relative" style={{ zIndex: 2 }} ref={videoContainerRef}>
                    <h2 className="fw-bold mb-3 text-warning">Top Picks with Videos</h2>
                    <p className="text-light mb-5">
                        Explore expert discussions, property walkthroughs, and housing trends from across India.
                    </p>

                    <div id="videoCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {[
                                [
                                    { videoId: "UpfqTkgBnxQ", title: "Buying A Home In India", },
                                    { videoId: "H-XWL9uA5FA", title: "Home Sales Fall 19% - What's Next?", },
                                    { videoId: "SXrBj15GqbE", title: "Real Estate 2025: Market Trends", },
                                ],
                                [
                                    { videoId: "S4p7z7YkQnI", title: "Luxury & Sustainability", },
                                    { videoId: "JqBnJLLgfsw", title: "India’s Luxury Real Estate Surge", },
                                    { videoId: "YMptuUcklmU", title: "Urban Living Redefined", },
                                ],
                            ].map((slide, i) => (
                                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`} data-bs-interval="6000">
                                    <div className="row justify-content-center">
                                        {slide.map((vid, index) => (
                                            <div key={index} className="col-md-4 mb-4">
                                                <div
                                                    className="card border-0 shadow-lg h-100 hover-zoom overflow-hidden"
                                                    style={{
                                                        background: "rgba(255, 255, 255, 0.03)",
                                                        borderRadius: "15px",
                                                        backdropFilter: "blur(4px)",
                                                    }}
                                                >
                                                    {/* If activeVideos[videoId] is true -> render iframe, else show clickable thumbnail */}
                                                    {!activeVideos[vid.videoId] ? (
                                                        <div
                                                            className="video-thumb"
                                                            role="button"
                                                            onClick={() => activateVideo(vid.videoId)}
                                                            onKeyDown={(e) => { if (e.key === "Enter") activateVideo(vid.videoId); }}
                                                            tabIndex={0}
                                                            style={{
                                                                position: "relative",
                                                                paddingBottom: "56.25%",
                                                                height: 0,
                                                                cursor: "pointer",
                                                                background: `linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${ytThumb(vid.videoId)}) center/cover no-repeat`,
                                                            }}
                                                            aria-label={`Play ${vid.title}`}
                                                        >
                                                            <div
                                                                style={{
                                                                    position: "absolute",
                                                                    inset: 0,
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                }}
                                                            >
                                                                <div
                                                                    style={{
                                                                        width: 70,
                                                                        height: 70,
                                                                        borderRadius: "50%",
                                                                        background: "rgba(0,0,0,0.6)",
                                                                        display: "flex",
                                                                        alignItems: "center",
                                                                        justifyContent: "center",
                                                                    }}
                                                                >
                                                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffc107" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M8 5v14l11-7z" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                                                            <iframe
                                                                src={`https://www.youtube.com/embed/${vid.videoId}?autoplay=1&rel=0`}
                                                                title={vid.title}
                                                                allowFullScreen
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                style={{
                                                                    position: "absolute",
                                                                    top: 0,
                                                                    left: 0,
                                                                    width: "100%",
                                                                    height: "100%",
                                                                    borderTopLeftRadius: "15px",
                                                                    borderTopRightRadius: "15px",
                                                                }}
                                                            ></iframe>
                                                        </div>
                                                    )}

                                                    <div className="card-body text-start text-light">
                                                        <h6 className="fw-bold text-warning">{vid.title}</h6>
                                                        <p className="small text-muted">{vid.desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Controls */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#videoCarousel"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                                style={{
                                    backgroundColor: "#ffc107",
                                    borderRadius: "50%",
                                    padding: "10px",
                                    filter: "drop-shadow(0 0 5px rgba(255,193,7,0.6))",
                                }}
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#videoCarousel"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                                style={{
                                    backgroundColor: "#ffc107",
                                    borderRadius: "50%",
                                    padding: "10px",
                                    filter: "drop-shadow(0 0 5px rgba(255,193,7,0.6))",
                                }}
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                        {/* Indicators */}
                        <div className="carousel-indicators mt-4">
                            {[0, 1].map((i) => (
                                <button
                                    key={i}
                                    type="button"
                                    data-bs-target="#videoCarousel"
                                    data-bs-slide-to={i}
                                    className={i === 0 ? "active" : ""}
                                    aria-current={i === 0 ? "true" : undefined}
                                    style={{
                                        width: "12px",
                                        height: "12px",
                                        borderRadius: "50%",
                                        backgroundColor: "#ffc107",
                                        border: "none",
                                        margin: "0 5px",
                                    }}
                                ></button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FEATURED DEVELOPERS ===== */}
            <section
                className="py-5 text-center"
                data-aos="fade-up"
                style={{
                    background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 40%, #3b2f00 100%)",
                    color: "#fff",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Subtle Gold Overlay Glow */}
                <div
                    style={{
                        position: "absolute",
                        top: "-40px",
                        right: "-40px",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,193,7,0.25), rgba(0,0,0,0))",
                        filter: "blur(50px)",
                        pointerEvents: "none",
                    }}
                ></div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <h2 className="fw-bold mb-3 text-warning">Featured Developers</h2>
                    <p className="text-light mb-5">Trusted and Award-winning Real Estate Developers Across India</p>

                    <div id="devCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {[
                                [
                                    { name: "DLF Builders", image: dev1, tagline: "Luxury Homes & Commercial Spaces" },
                                    { name: "Godrej Properties", image: dev2, tagline: "Sustainable & Green Living Spaces" },
                                    { name: "Prestige Group", image: dev3, tagline: "Delivering Excellence Since 1986" },
                                ],
                                [
                                    { name: "Sobha Developers", image: dev4, tagline: "Elegant Homes for Modern India" },
                                    { name: "Tata Realty", image: dev5, tagline: "Redefining Urban Living" },
                                    { name: "Mahindra Lifespaces", image: dev6, tagline: "Sustainable Community Builders" },
                                ],
                            ].map((slide, i) => (
                                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`} data-bs-interval="4000">
                                    <div className="row justify-content-center">
                                        {slide.map((dev, index) => (
                                            <div key={index} className="col-10 col-md-4 mb-4">
                                                <div
                                                    className="card border-0 shadow-lg h-100 hover-zoom overflow-hidden"
                                                    style={{
                                                        borderRadius: "15px",
                                                        background: "rgba(255, 255, 255, 0.06)",
                                                        backdropFilter: "blur(8px)",
                                                        color: "#fff",
                                                    }}
                                                >
                                                    <img
                                                        src={dev.image}
                                                        alt={dev.name}
                                                        className="w-100"
                                                        style={{
                                                            height: "220px",
                                                            objectFit: "cover",
                                                            borderTopLeftRadius: "15px",
                                                            borderTopRightRadius: "15px",
                                                            filter: "brightness(0.9)",
                                                        }}
                                                        {...imgProps}
                                                    />
                                                    <div className="card-body">
                                                        <h5 className="fw-bold mb-1 text-warning">{dev.name}</h5>
                                                        <p className="text-light small mb-0">{dev.tagline}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#devCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" style={{
                                backgroundColor: "#ffc107",
                                borderRadius: "50%",
                                padding: "10px",
                                filter: "drop-shadow(0 0 5px rgba(255,193,7,0.6))",
                            }}></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#devCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" style={{
                                backgroundColor: "#ffc107",
                                borderRadius: "50%",
                                padding: "10px",
                                filter: "drop-shadow(0 0 5px rgba(255,193,7,0.6))",
                            }}></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                        {/* Indicators */}
                        <div className="carousel-indicators mt-4">
                            {[0, 1].map((i) => (
                                <button key={i} type="button" data-bs-target="#devCarousel" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current={i === 0 ? "true" : undefined} style={{
                                    width: "12px",
                                    height: "12px",
                                    borderRadius: "50%",
                                    backgroundColor: "#ffc107",
                                    border: "none",
                                    margin: "0 5px",
                                }}></button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4">
      <a
        href={brochure}
        download="Property-Brochure.pdf"
        className="btn btn-warning text-dark fw-bold px-4 py-2 rounded-pill"
      >
        📄 Download Full Brochure
      </a>
    </div>

                </div>
            </section>

            {/* ===== RECOMMENDED SELLERS (Modern + Working Modal Popup) ===== */}
            <section
                className="py-5 text-center text-light position-relative"
                data-aos="fade-up"
                style={{
                    background: "linear-gradient(135deg, #0f1720 0%, #1b1b1b 50%, #2d2d2d 100%)",
                }}
            >
                {/* Background Glow Accent */}
                <div
                    style={{
                        position: "absolute",
                        top: "-40px",
                        right: "-40px",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(255,193,7,0.3), transparent 70%)",
                        filter: "blur(50px)",
                    }}
                ></div>

                <div className="container position-relative" style={{ zIndex: 2 }}>
                    <h2 className="fw-bold mb-3 text-warning">🏆 Top Rated Sellers</h2>
                    <p className="text-secondary mb-5">
                        Handpicked real estate experts offering the best property advice and services across India.
                    </p>

                    <div className="row g-4 justify-content-center">
                        {[
                            {
                                img: seller1,
                                name: "Katy Wilson",
                                role: "Luxury Real Estate Consultant",
                                experience: "8+ Years",
                                rating: "⭐ 4.9/5",
                                location: "Mumbai, Maharashtra",
                                about:
                                    "Katy specializes in high-end apartments and villas. Fluent in English & Hindi, with deep design expertise.",
                            },
                            {
                                img: seller2,
                                name: "Arjun Mehta",
                                role: "Commercial Property Expert",
                                experience: "10+ Years",
                                rating: "⭐ 4.8/5",
                                location: "Bengaluru, Karnataka",
                                about:
                                    "Specializes in commercial spaces and corporate real estate. Has helped 500+ clients find perfect offices.",
                            },
                            {
                                img: seller3,
                                name: "Melina Scott",
                                role: "Premium Homes Specialist",
                                experience: "6+ Years",
                                rating: "⭐ 4.7/5",
                                location: "Pune, Maharashtra",
                                about:
                                    "Focused on premium residential properties and relocation services with top client satisfaction.",
                            },
                            {
                                img: seller4,
                                name: "Clinkara",
                                role: "Investment & Resale Expert",
                                experience: "12+ Years",
                                rating: "⭐ 4.9/5",
                                location: "Delhi NCR",
                                about:
                                    "Expert in high-value resale and property investment. Excellent negotiation and client retention record.",
                            },
                            {
                                img: seller5,
                                name: "John Mendes",
                                role: "Property Consultant & Advisor",
                                experience: "9+ Years",
                                rating: "⭐ 4.8/5",
                                location: "Chennai, Tamil Nadu",
                                about:
                                    "Known for coastal villas and local expertise in southern India. Focus on transparency and service.",
                            },
                            {
                                img: seller6,
                                name: "Bella Rose",
                                role: "Luxury Villa Specialist",
                                experience: "7+ Years",
                                rating: "⭐ 4.7/5",
                                location: "Goa, India",
                                about:
                                    "Boutique property consultant specializing in holiday homes and premium villas.",
                            },
                        ].map((seller, i) => (
                            <div key={i} className="col-md-6 col-lg-4" data-aos="zoom-in">
                                <div
                                    className="card border-0 shadow-lg seller-card"
                                    style={{
                                        borderRadius: "18px",
                                        background: "rgba(255, 255, 255, 0.07)",
                                        backdropFilter: "blur(8px)",
                                        color: "#fff",
                                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setSelectedSeller(seller)}
                                >
                                    <div className="d-flex align-items-center p-4">
                                        <img
                                            src={seller.img}
                                            alt={seller.name}
                                            className="rounded-circle me-3 shadow"
                                            width="80"
                                            height="80"
                                            style={{ objectFit: "cover", border: "3px solid #ffc107" }}
                                            loading="lazy"
                                        />
                                        <div className="text-start">
                                            <h5 className="fw-bold text-warning mb-1">{seller.name}</h5>
                                            <p className="small mb-1 text-light">{seller.role}</p>
                                            <p className="small text-secondary mb-0">
                                                {seller.rating} · {seller.experience}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 text-start small text-light">
                                        <p className="mb-1">{seller.about.slice(0, 90)}...</p>
                                        <p className="text-muted mb-2">
                                            📍 <span className="text-light">{seller.location}</span>
                                        </p>
                                        <button
                                            className="btn btn-outline-warning btn-sm rounded-pill px-3 fw-semibold"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedSeller(seller);
                                            }}
                                        >
                                            View Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===== React Modal Popup (with Contact Form) ===== */}
                {selectedSeller && (
                    <div
                        className="seller-modal-overlay"
                        onClick={() => setSelectedSeller(null)}
                    >
                        <div
                            className="seller-modal-content"
                            onClick={(e) => e.stopPropagation()}
                            data-aos="zoom-in"
                        >
                            <button
                                className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
                                onClick={() => setSelectedSeller(null)}
                            ></button>

                            <div className="text-center p-4">
                                <img
                                    src={selectedSeller.img}
                                    alt={selectedSeller.name}
                                    width="100"
                                    height="100"
                                    className="rounded-circle mb-3 border border-warning shadow"
                                />
                                <h5 className="fw-bold text-warning">{selectedSeller.name}</h5>
                                <p className="text-light small mb-1">{selectedSeller.role}</p>
                                <p className="text-secondary small mb-1">
                                    {selectedSeller.rating} · {selectedSeller.experience}
                                </p>
                                <p className="text-light small mb-3">📍 {selectedSeller.location}</p>
                                <p className="text-light small mb-3">{selectedSeller.about}</p>

                                {/* Contact Form */}
                                <form
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        alert(`Message sent to ${selectedSeller.name}!`);
                                        setSelectedSeller(null);
                                    }}
                                    className="text-start mx-auto"
                                    style={{ maxWidth: "360px" }}
                                >
                                    <div className="mb-2">
                                        <label className="form-label text-light small fw-semibold">Your Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control form-control-sm bg-dark text-light border-secondary"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <label className="form-label text-light small fw-semibold">Email</label>
                                        <input
                                            type="email"
                                            required
                                            className="form-control form-control-sm bg-dark text-light border-secondary"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-light small fw-semibold">Message</label>
                                        <textarea
                                            className="form-control form-control-sm bg-dark text-light border-secondary"
                                            rows="3"
                                            placeholder={`Message ${selectedSeller.name}...`}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="d-flex justify-content-center gap-2 mt-3">
                                        <button
                                            type="submit"
                                            className="btn btn-warning text-dark fw-semibold px-4 rounded-pill"
                                        >
                                            Send Message
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-light px-4 rounded-pill"
                                            onClick={() => setSelectedSeller(null)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}

                {/* ===== CSS Animations & Styles ===== */}
                <style>{`
    .seller-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(255,193,7,0.2);
    }
    .seller-modal-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.75);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      animation: fadeIn 0.3s ease;
    }
    .seller-modal-content {
      background: #1b1b1b;
      border-radius: 15px;
      width: 90%;
      max-width: 500px;
      position: relative;
      box-shadow: 0 0 20px rgba(255,193,7,0.3);
      animation: scaleIn 0.3s ease;
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleIn {
      from { transform: scale(0.9); opacity: 0; }
      to { transform: scale(1); opacity: 1; }
    }
  `}</style>
            </section>

            {/* ===== CHAT + CONTACT WIDGETS ===== */}
            <div className="position-fixed bottom-0 end-0 m-4 d-flex flex-column align-items-end" style={{ gap: "10px", zIndex: 1050 }}>

                {/* CONTACT BUTTON */}
                <button className="btn btn-dark rounded-circle shadow-lg p-3" data-bs-toggle="modal" data-bs-target="#contactModal" style={{ width: "60px", height: "60px" }}>
                    <FaEnvelope className="fs-4 text-warning" />
                </button>

                {/* CHAT BUTTON */}
                <button
                    onClick={toggleChat}
                    className="btn btn-warning rounded-circle shadow-lg p-3"
                    style={{ width: "60px", height: "60px" }}
                >
                    {showChat ? <FaTimes className="fs-4 text-dark" /> : <FaComments className="fs-4 text-dark" />}
                </button>

                {/* CHAT BOX */}
                {showChat && (
                    <div
                        className="card shadow-lg border-0 mt-3"
                        style={{ width: "320px", borderRadius: "15px", animation: "fadeIn 0.4s ease" }}
                    >
                        <div className="card-header bg-warning text-dark fw-bold d-flex justify-content-between align-items-center">
                            <span>💬 Chat with Agent</span>
                            <FaTimes onClick={toggleChat} style={{ cursor: "pointer" }} />
                        </div>

                        {/* MESSAGE AREA */}
                        <div
                            className="card-body"
                            style={{
                                height: "250px",
                                overflowY: "auto",
                                background: "#f9f9f9",
                            }}
                        >
                            {chatMessages.map((msg, i) => (
                                <div
                                    key={i}
                                    className="p-2 mb-2 rounded"
                                    style={{
                                        maxWidth: "80%",
                                        marginLeft: msg.sender === "user" ? "auto" : "0",
                                        background: msg.sender === "user" ? "#ffe082" : "#e0e0e0",
                                        fontSize: "14px",
                                    }}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        {/* INPUT AREA */}
                        <div className="card-footer bg-light">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a message..."
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                />
                                <button className="btn btn-warning" onClick={sendMessage}>
                                    <FaPaperPlane />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>


            {/* ===== CONTACT MODAL ===== */}
            <div className="modal fade" id="contactModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content border-0 shadow-lg">
                        <div className="modal-header bg-warning text-dark">
                            <h5 className="modal-title fw-bold">📩 Contact Us</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Full Name</label>
                                    <input type="text" className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Message</label>
                                    <textarea className="form-control" rows="4" placeholder="Your message here..."></textarea>
                                </div>
                                <button type="button" className="btn btn-dark w-100 fw-semibold">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== SCROLL TO TOP ===== */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="btn btn-dark rounded-circle shadow position-fixed scroll-top-btn pulse"
                    style={{
                        zIndex: 3000,
                        bottom: 40,
                        left: 24,
                        width: 54,
                        height: 54,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="fs-5 text-warning" />
                </button>
            )}

            {/* ===== SELL PROPERTY CTA ===== */}
            <section
                className="py-5 text-dark text-center"
                style={{
                    background: `linear-gradient(rgba(255,193,7,0.9), rgba(255,193,7,0.9)), url(${cta}) center/cover no-repeat`,
                }}
                data-aos="zoom-in"
            >
                <div className="container">
                    <h2 className="fw-bold mb-3">Have a Property to Sell?</h2>
                    <p className="lead mb-4">
                        List your property with PropertyPro and connect instantly with verified buyers.
                    </p>

                    <button
                        className="btn btn-dark btn-lg rounded-pill px-4 fw-semibold"
                        onClick={() => navigate("/sellers")}
                    >
                        List Your Property Now
                    </button>
                </div>
            </section>

            {/* ===== FOOTER ===== */}

            {/* ===== CUSTOM STYLES ===== */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 rgba(255, 193, 7, 0.4); }
          50% { box-shadow: 0 0 15px rgba(255, 193, 7, 0.9); }
          100% { box-shadow: 0 0 0 rgba(255, 193, 7, 0.4); }
        }
        .pulse { animation: pulseGlow 1.8s infinite; }
        .hover-zoom { transition: transform 0.28s ease, box-shadow 0.28s ease; will-change: transform; }
        .hover-zoom:hover { transform: translateY(-8px); box-shadow: 0 12px 25px rgba(0,0,0,0.15); }
        .transition-navbar { transition: opacity 0.45s ease, transform 0.45s ease; }
        .hidden-navbar { opacity: 0; transform: translateY(-80px); pointer-events: none; }
        .visible-navbar { opacity: 1; transform: translateY(0); }
        .scroll-top-btn { z-index: 3000 !important; }
        .footer-link { color: #bbb; text-decoration: none; transition: color 0.3s ease; }
        .footer-link:hover { color: #ffc107; }
        .social-hover:hover { color: #ffc107 !important; transform: scale(1.1); transition: all 0.2s ease; }
        /* Make carousel controls slightly smaller on mobile */
        @media (max-width: 576px) {
          .carousel-control-prev-icon,
          .carousel-control-next-icon {
            transform: scale(0.8);
            padding: 6px !important;
          }
        }
      `}</style>
            <style>{`
  /* === Fix for unwanted horizontal scroll === */
  html, body, #root {
    max-width: 100%;
    overflow-x: hidden !important;
  }

  section, .carousel, .seller-modal-overlay, .container-fluid {
    overflow-x: hidden !important;
    max-width: 100vw;
  }

  * {
    box-sizing: border-box;
  }

  img, iframe, video {
    max-width: 100%;
    display: block;
  }
`}</style>

        </div>
    );
}

export default LandingPage;
