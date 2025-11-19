import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images
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


function Rentals() {
  const [search, setSearch] = useState("");
  const [selectedRental, setSelectedRental] = useState(null);

  const rentals = [
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
    "Located in a prime IT hub area with easy access to offices, supermarkets, restaurants, and schools. The apartment is part of a premium gated community with a children's play area, surveillance cameras, and power backup.",
  contact: "9876543210",
},

    {
      id: 2,
      image: rent2,
      title: "1BHK Semi-Furnished Flat",
      location: "Gachibowli, Hyderabad",
      price: "₹12,000/month",
        sqft: "1,140 sq.ft",
      description:
        "Perfect for bachelors or couples. Includes wardrobe, geyser, balcony view.",
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
      description:
        "Premium apartment with modular kitchen, gym access, and balcony garden.",
      contact: "9876543213",
    },
    {
      id: 5,
      image: rent5,
      title: "Studio Room for Rent",
      location: "Banjara Hills, Hyderabad",
      price: "₹14,500/month",
        sqft: "1,200 sq.ft",
      description:
        "Modern studio room perfect for singles. Comes with AC, WiFi, and kitchenette.",
      contact: "9876543214",
    },
    {
      id: 6,
      image: rent6,
      title: "Independent House – 2BHK",
      location: "Dilsukhnagar, Hyderabad",
      price: "₹16,000/month",
        sqft: "1,150 sq.ft",
      description:
        "Renovated 2BHK with inverter, parking, and spacious hall.",
      contact: "9876543215",
    },
    {
      id: 7,
      image: rent7,
      title: "Bachelor Room (Boys)",
      location: "SR Nagar, Hyderabad",
      price: "₹6,000/month",
        sqft: "1,050 sq.ft",
      description:
        "Shared bachelor rooms with WiFi, beds, wardrobes, and maintenance.",
      contact: "9876543216",
    },
    {
      id: 8,
      image: rent8,
      title: "Fully-Furnished PG",
      location: "Kukatpally, Hyderabad",
      price: "₹8,500/month",
        sqft: "1,100 sq.ft",
      description:
        "Furnished PG with AC rooms, food, laundry, RO water, and CCTV.",
      contact: "9876543217",
    },
    {
      id: 9,
      image: rent9,
      title: "Family-Friendly 2BHK House",
      location: "Mehdipatnam, Hyderabad",
      price: "₹17,500/month",
        sqft: "1,180 sq.ft",
      description:
        "Spacious colony-friendly house with bore water, modular kitchen, parking.",
      contact: "9876543218",
    },
     {
      id: 10,
      image: rent10,
      title: "2BHK Sea View Apartment",
      location: "Visakhapatnam - Rushikonda",
      price: "₹22,000/month",
        sqft: "2,150 sq.ft",
      description:
        "Beautiful 2BHK flat with an amazing sea-facing balcony, modular kitchen, covered parking, and full security.",
        contact: "9876543210",
    },
     {
      id: 11,
      image: rent11,
      title: "Girls PG / Shared Room",
      location: "Srikakulam - Palasa Road",
      price: "₹6,000/month",
        sqft: "1,050 sq.ft",
      description:
        "Clean and safe PG for girls. Includes food, WiFi, washing machine, and daily housekeeping and the peacefull environment.",
        contact: "9876543211",
    },
     {
      id: 12,
      image: rent12,
      title: "3BHK Independent House",
      location: "Vizianagaram - Nellimarla",
      price: "₹12,500/month",
        sqft: "1,350 sq.ft",
      description:
        "Spacious home perfect for families. Car parking, bore water, inverter, and peaceful locality and peacefull environment.",
        contact: "9876543212",
    },
    {
  id: 7,
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
  id: 8,
  image: vizag2,
  title: "2BHK Near IT Park",
  location: "Visakhapatnam – Madhurawada",
  price: "₹16,000/month",
    sqft: "1,850 sq.ft",
  description:
    "Near colleges & Tech Park. Fully ventilated house with balconies, lift, CCTV, and covered parking.With good raod connectivity.",
    contact: "9876543112",
},

{
  id: 9,
  image: vizag3,
  title: "beautiful 1bhk house",
  location: "Visakhapatnam – Dwaraka Nagar",
  price: "₹6,000/month",
    sqft: "1,050 sq.ft",
  description:
    "Perfect for family for enjoying the life. Walkable to bus station & good environment with best nature around the locality.",
    contact: "9876542212",
},

{
  id: 10,
  image: vizag4,
  title: "Furnished 1BHK Apartment",
  location: "Visakhapatnam – Seethammadhara",
  price: "₹9,500/month",
    sqft: "1,120 sq.ft",
  description:
    "Includes WiFi, bed, cupboard, AC, and inverter. Peaceful residential area with nearby parksand market with best road connection.",
    contact: "9876543219",
},

{
  id: 11,
  image: vizag5,
  title: "independent house",
  location: "Visakhapatnam – NAD Junction",
  price: "₹7,000/month",
    sqft: "1,000 sq.ft",
  description:
    "All facilities included — homemade food, WiFi, washing machine, 24/7 security. Near major transport routes.",
    contact: "9876523211",
},

{
  id: 12,
  image: vizag6,
  title: "Independent 2BHK House",
  location: "Visakhapatnam – Gajuwaka",
  price: "₹11,000/month",
    sqft: "1,120 sq.ft",
  description:
    "Spacious house with bore water, 2 balconies, nearby markets, and easy transport access and peacefull environment.",
    contact: "9876543218",
},

  ];

  // Filter search
  const filteredRentals = rentals.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    item.location.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bold text-warning mt-4">
        Available Rentals for Tenants
      </h2>

      {/* Search Bar */}
      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search for 1BHK, 2BHK, PG, Studio, Location..."
          style={{ maxWidth: "500px", borderRadius: "30px", padding: "12px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Cards */}
      <div className="row g-4">
        {filteredRentals.length > 0 ? (
          filteredRentals.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div
                className="card shadow-lg border-0 h-100"
                style={{
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top"
                  style={{ height: "230px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted mb-1">{item.location}</p>
                  <p className="text-primary fw-semibold">{item.price}</p>
                  <p className="text-success fw-semibold">{item.sqft}</p>

                  <p className="text-muted">{item.description}</p>
                  

                  {/* Contact Button */}
                  <button
                    className="btn btn-warning w-100 fw-semibold mt-2"
                    onClick={() => setSelectedRental(item)}
                  >
                    Contact Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="text-center text-danger mt-5">
            No matching rentals found.
          </h5>
        )}
      </div>

      {/* Popup Modal */}
      {selectedRental && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            background: "rgba(0,0,0,0.6)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
              <img
                src={selectedRental.image}
                alt="Selected"
                className="img-fluid rounded"
                style={{ height: "250px", objectFit: "cover" }}
              />

              <div className="modal-body">
                <h4 className="fw-bold">{selectedRental.title}</h4>
                <p className="text-muted">{selectedRental.location}</p>
                <p className="text-success fw-semibold">{selectedRental.price}</p>
                <p>{selectedRental.description}</p>

                <h5 className="text-primary fw-bold mt-3">📞 Contact</h5>
                <p className="fw-semibold">{selectedRental.contact}</p>

                <button
                  className="btn btn-danger w-100 mt-3"
                  onClick={() => setSelectedRental(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Rentals;
