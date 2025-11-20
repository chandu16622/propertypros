// src/Pages/BuyerProperties.js
import React, { useState } from "react";
import {
    FaSearch,
    FaMapMarkerAlt,
    FaHome,
    FaBath,
    FaBed,
    FaHeart,
    FaRegHeart,
    FaSync,
    FaCheck,
} from "react-icons/fa";

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

const PER_PAGE = 3;

function BuyerProperties() {
    const [search, setSearch] = useState("");
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [scheduleModal, setScheduleModal] = useState(false);

    const [wishlist, setWishlist] = useState([]);
    const [compare, setCompare] = useState([]);
    const [modalTab, setModalTab] = useState("details");

    const [page, setPage] = useState(1);

    const properties = [
        { id: 1, title: "Luxury 3BHK Apartment", location: "Madhapur, Hyderabad", price: "₹1.2 Cr", beds: 3, baths: 3, area: "1650 sq.ft", img: project1 },
        { id: 2, title: "Premium Villa with Garden", location: "Kondapur, Hyderabad", price: "₹2.8 Cr", beds: 4, baths: 4, area: "2850 sq.ft", img: project2 },
        { id: 3, title: "Affordable 2BHK Home", location: "Gachibowli, Hyderabad", price: "₹78 Lakhs", beds: 2, baths: 2, area: "1200 sq.ft", img: project3 },
        { id: 3, title: "Affordable 2BHK Home", location: "Gachibowli, Hyderabad", price: "₹78 Lakhs", beds: 2, baths: 2, area: "1200 sq.ft", img: project4 },
        { id: 3, title: "Affordable 2BHK Home", location: "Gachibowli, Hyderabad", price: "₹78 Lakhs", beds: 2, baths: 2, area: "1200 sq.ft", img: project5 },
        { id: 3, title: "Affordable 2BHK Home", location: "Gachibowli, Hyderabad", price: "₹78 Lakhs", beds: 2, baths: 2, area: "1200 sq.ft", img: project6 },

        { id: 4, title: "Modern Duplex Villa", location: "Vizag", price: "₹1.9 Cr", beds: 4, baths: 4, area: "2400 sq.ft", img: dev1 },
        { id: 5, title: "Smart Home Apartment", location: "Bengaluru", price: "₹95 Lakhs", beds: 3, baths: 2, area: "1300 sq.ft", img: dev2 },
        { id: 6, title: "Ocean View Villa", location: "Goa", price: "₹3.6 Cr", beds: 5, baths: 5, area: "3500 sq.ft", img: dev3 },
        { id: 7, title: "Sea Villa", location: "Goa", price: "₹3.3 Cr", beds: 5, baths: 5, area: "3400 sq.ft", img: dev4 },
        { id: 8, title: "Premium Sea Villa", location: "Goa", price: "₹3.5 Cr", beds: 5, baths: 5, area: "3600 sq.ft", img: dev5 },
        { id: 9, title: "Luxury Ocean Villa", location: "Goa", price: "₹3.9 Cr", beds: 5, baths: 5, area: "3800 sq.ft", img: dev6 },
    ];

    // FILTER SEARCH
    const filtered = properties.filter(
        (p) =>
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.location.toLowerCase().includes(search.toLowerCase())
    );

    // PAGINATION
    const totalPages = Math.ceil(filtered.length / PER_PAGE);
    const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

    // WISHLIST
    const toggleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    // COMPARE
    const toggleCompare = (id) => {
        setCompare((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    return (
        <>
            {/* GAP BELOW NAVBAR */}
            <div style={{ paddingTop: "120px" }}></div>

            <div className="container-fluid py-4">
                <div className="text-center">
                    <h1 className="fw-bold text-warning">Explore Premium Properties</h1>
                    <p className="text-muted">Find your dream home with ease.</p>
                </div>

                {/* Search */}
                <div className="container mb-4">
                    <div className="d-flex justify-content-center">
                        <div className="shadow-sm d-flex align-items-center px-3" style={{ width: "60%", background: "#fff", borderRadius: 999 }}>
                            <FaSearch className="me-2 text-warning" />
                            <input
                                className="form-control border-0 py-2"
                                placeholder="Search your listings (title, location, price)..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setPage(1);
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* PROPERTY GRID */}
                <div className="container">
                    <div className="row g-4">
                        {visible.map((p) => (
                            <div className="col-md-4" key={p.id}>
                                <div className="card shadow-lg border-0 property-card">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-100"
                                        style={{ height: "240px", objectFit: "cover" }}

                                    />

                                    <div className="card-body">
                                        <h5 className="fw-bold">{p.title}</h5>
                                        <p className="text-muted small">
                                            <FaMapMarkerAlt className="text-warning me-1" />
                                            {p.location}
                                        </p>
                                        <h6 className="text-warning fw-bold">{p.price}</h6>

                                        <div className="d-flex justify-content-between mt-3">
                                            <span><FaBed className="text-warning me-1" /> {p.beds} Beds</span>
                                            <span><FaBath className="text-warning me-1" /> {p.baths} Baths</span>
                                            <span><FaHome className="text-warning me-1" /> {p.area}</span>
                                        </div>

                                        <div className="d-flex justify-content-between mt-3">
                                            <button
                                                className="btn btn-outline-danger w-50 me-2"
                                                onClick={() => toggleWishlist(p.id)}
                                            >
                                                {wishlist.includes(p.id) ? (
                                                    <>
                                                        <FaHeart /> Wishlisted
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaRegHeart /> Wishlist
                                                    </>
                                                )}
                                            </button>

                                            <button
                                                className="btn btn-outline-primary w-50"
                                                onClick={() => toggleCompare(p.id)}
                                            >
                                                {compare.includes(p.id) ? (
                                                    <>
                                                        <FaCheck /> Added
                                                    </>
                                                ) : (
                                                    <>
                                                        <FaSync /> Compare
                                                    </>
                                                )}
                                            </button>
                                        </div>

                                        <button
                                            className="btn btn-dark w-100 mt-3 rounded-pill"
                                            onClick={() => {
                                                setSelectedProperty(p);
                                                setModalTab("details");
                                            }}
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PAGINATION */}
                    <div className="text-center mt-4">
                        <button
                            className="btn btn-outline-dark btn-sm me-2"
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                        >
                            Prev
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                className={`btn btn-sm ${page === i + 1
                                    ? "btn-warning text-dark"
                                    : "btn-outline-dark"
                                    } mx-1`}
                                onClick={() => setPage(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            className="btn btn-outline-dark btn-sm ms-2"
                            disabled={page === totalPages}
                            onClick={() => setPage(page + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* VIEW DETAILS MODAL */}
            {selectedProperty && (
                <div
                    className="modal fade show d-block"
                    style={{ background: "rgba(0,0,0,0.6)" }}
                    onClick={() => setSelectedProperty(null)}
                >
                    <div
                        className="modal-dialog modal-lg modal-dialog-centered"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-content rounded-4 overflow-hidden">

                            {/* TABS */}
                            <div className="d-flex justify-content-around p-2 border-bottom bg-dark">
                                <button
                                    className={`btn ${modalTab === "details"
                                        ? "btn-warning text-dark"
                                        : "btn-light"
                                        }`}
                                    onClick={() => setModalTab("details")}
                                >
                                    Details
                                </button>

                                <button
                                    className={`btn ${modalTab === "map"
                                        ? "btn-warning text-dark"
                                        : "btn-light"
                                        }`}
                                    onClick={() => setModalTab("map")}
                                >
                                    Map
                                </button>
                            </div>

                            {/* DETAILS TAB */}
                            {modalTab === "details" && (
                                <>
                                    <img
                                        src={selectedProperty.img}
                                        className="w-100"
                                        style={{ height: "330px", objectFit: "cover" }}
                                    />

                                    <div className="p-4">
                                        <h3 className="fw-bold text-warning">{selectedProperty.title}</h3>

                                        <p className="text-muted mb-1">
                                            <FaMapMarkerAlt className="text-warning me-2" />
                                            {selectedProperty.location}
                                        </p>

                                        <h4 className="fw-bold">{selectedProperty.price}</h4>

                                        <div className="d-flex justify-content-between my-3">
                                            <span><FaBed className="text-warning" /> {selectedProperty.beds} Beds</span>
                                            <span><FaBath className="text-warning" /> {selectedProperty.baths} Baths</span>
                                            <span><FaHome className="text-warning" /> {selectedProperty.area}</span>
                                        </div>

                                        <button
                                            className="btn btn-dark w-100 rounded-pill"
                                            onClick={() => setScheduleModal(true)}
                                        >
                                            Schedule a Visit
                                        </button>
                                    </div>
                                </>
                            )}

                            {/* MAP TAB */}
                            {modalTab === "map" && (
                                <div className="p-3">
                                    <iframe
                                        width="100%"
                                        height="350"
                                        style={{ borderRadius: "10px" }}
                                        src={`https://maps.google.com/maps?q=${encodeURIComponent(
                                            selectedProperty.location
                                        )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    ></iframe>

                                    <p className="text-center mt-2 text-muted">
                                        Approx location: <strong>{selectedProperty.location}</strong>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* SCHEDULE VISIT MODAL */}
            {scheduleModal && (
                <div
                    className="modal fade show d-block"
                    style={{ background: "rgba(0,0,0,0.6)" }}
                    onClick={() => setScheduleModal(false)}
                >
                    <div
                        className="modal-dialog modal-md modal-dialog-centered"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-content p-4 rounded-4 shadow-lg">
                            <h3 className="fw-bold text-warning mb-3">Schedule a Visit</h3>

                            <input type="text" className="form-control mb-3" placeholder="Your Name" />
                            <input type="text" className="form-control mb-3" placeholder="Phone Number" />
                            <input type="date" className="form-control mb-3" />

                            <button
                                className="btn btn-dark w-100 rounded-pill"
                                onClick={() => {
                                    alert("Visit Scheduled Successfully!");
                                    setScheduleModal(false);
                                }}
                            >
                                Confirm Visit
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* CARD HOVER STYLE */}
            <style>{`
        .property-card { transition: 0.3s; border-radius: 20px; }
        .property-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.25); }
      `}</style>
        </>
    );
}

export default BuyerProperties;
