// src/Pages/Rentals.js
import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaPhone,
  FaWhatsapp,
  FaFilter,
  FaTimes,
  FaArrowUp,
} from "react-icons/fa";

// images (keeps same imports you had)
import rent1 from "../images/rent1.jpg";
import rent2 from "../images/rent2.jpg";
import rent3 from "../images/rent3.jpg";
import rent4 from "../images/rent4.jpg";
import rent5 from "../images/rent5.jpg";
import rent6 from "../images/rent6.jpg";
import rent7 from "../images/rent7.jpg";
import rent8 from "../images/rent8.jpg";
import rent9 from "../images/rent9.jpg";
import rent10 from "../images/rent10.jpg";
import rent11 from "../images/rent11.jpg";
import rent12 from "../images/rent12.jpg";
import vizag1 from "../images/vizag1.jpg";
import vizag2 from "../images/vizag2.jpg";
import vizag3 from "../images/vizag3.jpg";
import vizag4 from "../images/vizag4.jpg";
import vizag5 from "../images/vizag5.jpg";
import vizag6 from "../images/vizag6.jpg";

const PER_PAGE = 6;

function parsePrice(priceStr = "") {
  // Convert "₹18,500/month" or "₹1,20,000" -> integer rupees
  const digits = priceStr.replace(/[^0-9]/g, "");
  return digits ? parseInt(digits, 10) : 0;
}

// Helper: guess bhk from title text (1BHK, 2BHK, 3BHK, Studio, PG)
function guessBHK(title = "") {
  const t = title.toLowerCase();
  if (t.includes("3bhk") || t.includes("3 bhk") || t.includes("3 bhk")) return "3BHK";
  if (t.includes("2bhk") || t.includes("2 bhk")) return "2BHK";
  if (t.includes("1bhk") || t.includes("1 bhk")) return "1BHK";
  if (t.includes("studio")) return "Studio";
  if (t.includes("pg")) return "PG";
  return "Other";
}

export default function Rentals() {
  const [search, setSearch] = useState("");
  const [selectedRental, setSelectedRental] = useState(null);

  // Filters & UI state
  const [showFilters, setShowFilters] = useState(false);
  const [locationFilter, setLocationFilter] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bhkFilter, setBhkFilter] = useState("All");
  const [sortBy, setSortBy] = useState("none"); // 'price-asc' | 'price-desc' | 'sqft-desc'
  const [page, setPage] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Base dataset
  const rentals = useMemo(
    () => [
      {
        id: 1,
        image: rent1,
        title: "Fully-Furnished 2BHK Apartment",
        location: "Madhapur, Hyderabad",
        price: "₹18,500/month",
        sqft: "1,150 sq.ft",
        description:
          "A spacious 2BHK with modern interiors, modular kitchen, covered parking, and 24/7 security.",
        moreInfo:
          "Located in a prime IT hub area with easy access to offices, supermarkets, restaurants, and schools.",
        contact: "9876543210",
      },
      {
        id: 2,
        image: rent2,
        title: "1BHK Semi-Furnished Flat",
        location: "Gachibowli, Hyderabad",
        price: "₹12,000/month",
        sqft: "1,140 sq.ft",
        description: "Perfect for bachelors or couples. Includes wardrobe, geyser, balcony view.",
        contact: "9876543211",
      },
      {
        id: 3,
        image: rent3,
        title: "Shared Accommodation (Girls)",
        location: "Ameerpet, Hyderabad",
        price: "₹7,500/month",
        sqft: "1,100 sq.ft",
        description:
          "Secure PG with homemade food, WiFi, fridge, washing machine, and 24/7 water.",
        contact: "9876543212",
      },
      {
        id: 4,
        image: rent4,
        title: "Luxury 3BHK Apartment",
        location: "Kondapur, Hyderabad",
        price: "₹36,000/month",
        sqft: "1,190 sq.ft",
        description: "Premium apartment with modular kitchen, gym access, and balcony garden.",
        contact: "9876543213",
      },
      {
        id: 5,
        image: rent5,
        title: "Studio Room for Rent",
        location: "Banjara Hills, Hyderabad",
        price: "₹14,500/month",
        sqft: "1,200 sq.ft",
        description: "Modern studio room perfect for singles. Comes with AC, WiFi, and kitchenette.",
        contact: "9876543214",
      },
      {
        id: 6,
        image: rent6,
        title: "Independent House – 2BHK",
        location: "Dilsukhnagar, Hyderabad",
        price: "₹16,000/month",
        sqft: "1,150 sq.ft",
        description: "Renovated 2BHK with inverter, parking, and spacious hall.",
        contact: "9876543215",
      },
      {
        id: 7,
        image: rent7,
        title: "Independent House – 2BHK",
        location: "Dilsukhnagar, Hyderabad",
        price: "₹16,000/month",
        sqft: "1,150 sq.ft",
        description: "Renovated 2BHK with inverter, parking, and spacious hall.",
        contact: "9876543215",
      },
      {
        id: 8,
        image: rent8,
        title: "Independent House – 2BHK",
        location: "Dilsukhnagar, Hyderabad",
        price: "₹16,000/month",
        sqft: "1,150 sq.ft",
        description: "Renovated 2BHK with inverter, parking, and spacious hall.",
        contact: "9876543215",
      },
      {
        id: 9,
        image: rent9,
        title: "Independent House – 2BHK",
        location: "Dilsukhnagar, Hyderabad",
        price: "₹16,000/month",
        sqft: "1,150 sq.ft",
        description: "Renovated 2BHK with inverter, parking, and spacious hall.",
        contact: "9876543215",
      },
      {
        id: 10,
        image: rent10,
        title: "Independent House – 2BHK",
        location: "Dilsukhnagar, Hyderabad",
        price: "₹16,000/month",
        sqft: "1,150 sq.ft",
        description: "Renovated 2BHK with inverter, parking, and spacious hall.",
        contact: "9876543215",
      },
      {
        id: 11,
        image: rent11,
        title: "Independent House – 2BHK",
        location: "Dilsukhnagar, Hyderabad",
        price: "₹16,000/month",
        sqft: "1,150 sq.ft",
        description: "Renovated 2BHK with inverter, parking, and spacious hall.",
        contact: "9876543215",
      },
      {
        id: 12,
        image: rent12,
        title: "Independent House – 2BHK",
        location: "Dilsukhnagar, Hyderabad",
        price: "₹16,000/month",
        sqft: "1,150 sq.ft",
        description: "Renovated 2BHK with inverter, parking, and spacious hall.",
        contact: "9876543215",
      },
      {
        id: 13,
        image: vizag1,
        title: "3BHK Beachfront Luxury House",
        location: "Visakhapatnam – RK Beach Road",
        price: "₹35,000/month",
        sqft: "2,250 sq.ft",
        description:
          "Premium sea-facing apartment with full ocean view, modular kitchen, swimming pool access, and 24/7 security.",
        contact: "9876543213",
      },
      {
        id: 14,
        image: vizag2,
        title: "2BHK Near IT Park",
        location: "Visakhapatnam – Madhurawada",
        price: "₹16,000/month",
        sqft: "1,850 sq.ft",
        description:
          "Fully ventilated house with balconies, lift, CCTV, and covered parking.",
        contact: "9876543112",
      },
      {
        id: 15,
        image: vizag3,
        title: "Beautiful 1BHK House",
        location: "Visakhapatnam – Dwaraka Nagar",
        price: "₹6,000/month",
        sqft: "1,050 sq.ft",
        description: "Perfect family home with peaceful environment & easy transport.",
        contact: "9876542212",
      },
      {
        id: 16,
        image: vizag4,
        title: "Furnished 1BHK Apartment",
        location: "Visakhapatnam – Seethammadhara",
        price: "₹9,500/month",
        sqft: "1,120 sq.ft",
        description: "Includes WiFi, bed, cupboard, AC, and inverter.",
        contact: "9876543219",
      },
      {
        id: 17,
        image: vizag5,
        title: "Independent House",
        location: "Visakhapatnam – NAD Junction",
        price: "₹7,000/month",
        sqft: "1,000 sq.ft",
        description: "Very peaceful locality with all essential facilities.",
        contact: "9876523211",
      },
      {
        id: 18,
        image: vizag6,
        title: "Independent 2BHK House",
        location: "Visakhapatnam – Gajuwaka",
        price: "₹11,000/month",
        sqft: "1,120 sq.ft",
        description: "Spacious house with bore water, balconies, and market nearby.",
        contact: "9876543218",
      },
    ],
    []
  );

  // derived lists for filter controls
  const uniqueLocations = useMemo(() => {
    const set = new Set(rentals.map((r) => r.location.split("–")[0].trim()));
    return ["All", ...Array.from(set)];
  }, [rentals]);

  const bhkOptions = useMemo(() => {
    const set = new Set(rentals.map((r) => guessBHK(r.title)));
    return ["All", ...Array.from(set)];
  }, [rentals]);

  // scroll top visibility
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Filtering, search, sorting
  const filtered = useMemo(() => {
    let arr = rentals.filter((r) => {
      const q = search.trim().toLowerCase();
      const matchSearch =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q);

      const price = parsePrice(r.price);
      const minP = minPrice ? parseInt(minPrice, 10) : 0;
      const maxP = maxPrice ? parseInt(maxPrice, 10) : Infinity;
      const matchPrice = price >= minP && price <= maxP;

      const matchLocation =
        locationFilter === "All" || r.location.includes(locationFilter);

      const bhk = guessBHK(r.title);
      const matchBhk = bhkFilter === "All" || bhk === bhkFilter;

      return matchSearch && matchPrice && matchLocation && matchBhk;
    });

    if (sortBy === "price-asc") {
      arr.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    } else if (sortBy === "price-desc") {
      arr.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
    } else if (sortBy === "sqft-desc") {
      const nums = (s) => parseInt((s || "").replace(/[^0-9]/g, "") || 0, 10);
      arr.sort((a, b) => nums(b.sqft) - nums(a.sqft));
    }

    return arr;
  }, [rentals, search, minPrice, maxPrice, locationFilter, bhkFilter, sortBy]);

  // pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const visible = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return filtered.slice(start, start + PER_PAGE);
  }, [filtered, page]);

  // helpers
  const resetFilters = () => {
    setLocationFilter("All");
    setMinPrice("");
    setMaxPrice("");
    setBhkFilter("All");
    setSortBy("none");
  };

  const openWhatsApp = (phone) => {
    // use a contact if available else fallback generic support
    const base = phone ? phone.replace(/\D/g, "") : "919876543210";
    window.open(`https://wa.me/${base}`, "_blank");
  };

  return (
    <div className="container py-5 page-padding" style={{ maxWidth: 1200 }}>
      {/* Top header row: Title + Filters toggle */}
      <div className="d-flex align-items-center justify-content-between mb-3 gap-2">
        <h2 className="text-warning fw-bold mb-0">Available Rentals</h2>

        <div className="d-flex align-items-center gap-2">
          <div className="me-2 d-none d-md-block" style={{ minWidth: 320 }}>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Search by title, location, description..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <button
            className="btn btn-outline-dark d-flex align-items-center"
            onClick={() => setShowFilters((s) => !s)}
            aria-expanded={showFilters}
          >
            <FaFilter className="me-2" />
            Filters
          </button>
        </div>
      </div>

      {/* Responsive search for small screens */}
      <div className="d-block d-md-none mb-3">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Sort bar */}
      <div className="d-flex align-items-center justify-content-between mb-4 gap-2 flex-wrap">
        <div className="d-flex align-items-center gap-2">
          <span className="small text-muted">Sort:</span>
          <div className="btn-group btn-group-sm" role="group" aria-label="Sort">
            <button
              className={`btn btn-outline-secondary ${sortBy === "price-asc" ? "active" : ""}`}
              onClick={() => {
                setSortBy("price-asc");
                setPage(1);
              }}
            >
              Price ↑
            </button>
            <button
              className={`btn btn-outline-secondary ${sortBy === "price-desc" ? "active" : ""}`}
              onClick={() => {
                setSortBy("price-desc");
                setPage(1);
              }}
            >
              Price ↓
            </button>
            <button
              className={`btn btn-outline-secondary ${sortBy === "sqft-desc" ? "active" : ""}`}
              onClick={() => {
                setSortBy("sqft-desc");
                setPage(1);
              }}
            >
              Sqft ↓
            </button>
            <button
              className={`btn btn-outline-secondary ${sortBy === "none" ? "active" : ""}`}
              onClick={() => {
                setSortBy("none");
                setPage(1);
              }}
            >
              None
            </button>
          </div>
        </div>

        <div className="text-muted small">Showing {filtered.length} result(s)</div>
      </div>

      <div className="row">
        {/* Filters Sidebar (slide-in) */}
        <aside
          className={`col-md-4 mb-4 ${showFilters ? "d-block" : "d-none d-md-block"}`}
          style={{
            transition: "transform 0.28s ease",
          }}
        >
          <div className="card border-0 shadow-sm p-3 sticky-top" style={{ top: 20 }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <strong>Filters</strong>
              <button
                className="btn btn-sm btn-outline-secondary d-md-none"
                onClick={() => setShowFilters(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="mb-2">
              <label className="form-label small mb-1">Location</label>
              <select
                className="form-select form-select-sm"
                value={locationFilter}
                onChange={(e) => {
                  setLocationFilter(e.target.value);
                  setPage(1);
                }}
              >
                {uniqueLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-2">
              <label className="form-label small mb-1">Price (min)</label>
              <input
                type="number"
                className="form-control form-control-sm"
                placeholder="₹ min"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                  setPage(1);
                }}
                min="0"
              />
            </div>

            <div className="mb-2">
              <label className="form-label small mb-1">Price (max)</label>
              <input
                type="number"
                className="form-control form-control-sm"
                placeholder="₹ max"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                  setPage(1);
                }}
                min="0"
              />
            </div>

            <div className="mb-2">
              <label className="form-label small mb-1">BHK</label>
              <select
                className="form-select form-select-sm"
                value={bhkFilter}
                onChange={(e) => {
                  setBhkFilter(e.target.value);
                  setPage(1);
                }}
              >
                {bhkOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-flex gap-2 mt-3">
              <button
                className="btn btn-warning btn-sm w-100"
                onClick={() => {
                  setShowFilters(false);
                }}
              >
                Apply
              </button>
              <button className="btn btn-outline-secondary btn-sm w-100" onClick={resetFilters}>
                Reset
              </button>
            </div>
          </div>
        </aside>

        {/* Results column */}
        <main className="col-md-8">
          <div className="row g-4">
            {visible.length > 0 ? (
              visible.map((rental) => (
                <div key={rental.id} className="col-12">
                  <article className="card rental-card border-0 shadow-sm overflow-hidden" role="article">
                    <div className="row g-0">
                      {/* full-image-left layout on md up */}
                      <div className="col-md-5">
                        <div style={{ position: "relative", height: "100%" }}>
                          <img
                            src={rental.image}
                            alt={rental.title}
                            className="w-100 h-100"
                            style={{ objectFit: "cover", minHeight: 200 }}
                          />
                          {/* overlay badge */}
                          <div
                            style={{
                              position: "absolute",
                              left: 12,
                              top: 12,
                              background: "rgba(0,0,0,0.6)",
                              color: "#fff",
                              padding: "6px 10px",
                              borderRadius: 999,
                              fontSize: 13,
                              fontWeight: 600,
                              boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                            }}
                          >
                            {guessBHK(rental.title)}
                          </div>
                        </div>
                      </div>

                      <div className="col-md-7 d-flex align-items-stretch">
                        <div className="card-body d-flex flex-column">
                          <div>
                            <h5 className="fw-bold mb-1">{rental.title}</h5>
                            <p className="text-muted small mb-1">{rental.location}</p>
                          </div>

                          <div className="mt-2">
                            <p className="mb-1 fw-bold text-warning">{rental.price}</p>
                            <p className="mb-2 small text-success fw-semibold">{rental.sqft}</p>
                            <p className="text-secondary small mb-3">{rental.description}</p>
                          </div>

                          <div className="mt-auto d-flex gap-2 align-items-center">
                            <button
                              className="btn btn-outline-dark"
                              onClick={() => setSelectedRental(rental)}
                            >
                              View Contact
                            </button>

                            <a
                              className="btn btn-warning text-dark fw-semibold"
                              href={`https://wa.me/${rental.contact.replace(/\D/g, "")}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaWhatsapp className="me-2" />
                              WhatsApp
                            </a>

                            <a
                              className="btn btn-outline-secondary ms-auto"
                              href={`tel:${rental.contact}`}
                              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                            >
                              <FaPhone /> Call
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="alert alert-danger mb-0">No matching rentals found.</div>
              </div>
            )}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              Prev
            </button>

            <div className="d-flex gap-2 align-items-center">
              {Array.from({ length: totalPages }).map((_, i) => {
                const n = i + 1;
                return (
                  <button
                    key={n}
                    className={`btn btn-sm ${n === page ? "btn-warning text-dark" : "btn-outline-secondary"}`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                );
              })}
            </div>

            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </main>
      </div>

      {/* Floating WhatsApp button */}
      <button
        title="Chat on WhatsApp"
        onClick={() => openWhatsApp(null)}
        style={{
          position: "fixed",
          bottom: 22,
          right: 22,
          zIndex: 1200,
          border: 0,
          outline: "none",
          width: 60,
          height: 60,
          borderRadius: 999,
          background: "#25D366",
          color: "#fff",
          boxShadow: "0 10px 25px rgba(37,211,102,0.18)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        className="shadow"
      >
        <FaWhatsapp size={22} />
      </button>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: 22,
            left: 22,
            zIndex: 1200,
            width: 52,
            height: 52,
            borderRadius: 999,
            background: "#111",
            color: "#ffc107",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          }}
          className="shadow"
        >
          <FaArrowUp />
        </button>
      )}

      {/* Contact Modal (simple) */}
      {selectedRental && (
        <div
          className="modal fade show d-block"
          role="dialog"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 1300 }}
          onClick={() => setSelectedRental(null)}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content border-0">
              <div className="modal-body p-0">
                <img
                  src={selectedRental.image}
                  alt={selectedRental.title}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", maxHeight: 300 }}
                />
                <div className="p-3">
                  <h5 className="fw-bold mb-1">{selectedRental.title}</h5>
                  <p className="small text-muted mb-2">{selectedRental.location}</p>
                  <p className="fw-bold text-warning mb-2">{selectedRental.price}</p>
                  <p className="mb-2">{selectedRental.description}</p>

                  <div className="d-flex gap-2">
                    <a
                      className="btn btn-warning w-100"
                      href={`https://wa.me/${selectedRental.contact.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp className="me-2" /> WhatsApp
                    </a>
                    <a className="btn btn-outline-secondary w-100" href={`tel:${selectedRental.contact}`}>
                      <FaPhone className="me-2" /> Call
                    </a>
                  </div>

                  <button
                    className="btn btn-outer mt-3 d-block mx-auto"
                    onClick={() => setSelectedRental(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inline Styles */}
      <style>{`
  /* Remove any accidental horizontal scroll */
  html, body, #root {
    overflow-x: hidden !important;
  }

  /* FIX NAVBAR OVERFLOW — Push Rentals page content down */
  .page-padding {
    padding-top: 130px !important;
  }

  /* Card style */
  .rental-card {
    border-radius: 12px;
    overflow: hidden;
  }
  .rental-card img {
    display: block;
  }

  /* Make sidebar slide on small screens */
  @media (max-width: 767.98px) {
    aside {
      position: fixed;
      left: ${showFilters ? "0" : "-100%"};
      top: 0;
      height: 100%;
      width: 86%;
      max-width: 320px;
      z-index: 1400;
      transition: left 0.28s ease;
      background: #d38b17ff;
      padding: 12px;
    }
  }

  /* small visual tweaks */
  .btn-outline-dark.d-flex svg {
    margin-right: 6px;
  }
`}</style>

    </div>
  );
}
