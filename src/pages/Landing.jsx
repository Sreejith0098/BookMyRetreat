import React, { useEffect, useState } from "react";
import "./Landing.css";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import ParallaxSection from "../components/ParallaxSection";
import Testimonials from "../components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Landing() {
  const [hotel, setHotel] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);

  const handleExploreMore = () => {
    alert("Explore more section coming soon!");
  };

  const allHotels = () => {
    setFilteredHotels(hotel);
    setSelected("all");
  };

  const ShowExpensive = () => {
    const expensive = hotel.filter((eachHotel) => eachHotel.rate > 5000);
    setFilteredHotels(expensive);
    console.log(hotel.map((h) => h.rate));
    setSelected("premium");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data) => {
        setHotel(data);
        setFilteredHotels(data);
      })
      .catch(console.error);
  }, []);

  // sort using rate

  const [sortOrder, setSortOrder] = useState("");

  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    let sorted = [...filteredHotels];
    if (order === "asc") sorted.sort((a, b) => a.rate - b.rate);
    if (order === "desc") sorted.sort((a, b) => b.rate - a.rate);

    setFilteredHotels(sorted);
  };

  // button selected style functionalities
  const [selected, setSelected] = useState("all");
  return (
    <>
      <div className="resort-root">
        <div className="overlay" />

        <header className="nav">
          <div className="logo ps-3">BookMyRetreat</div>
          <nav>
            <button className="nav-btn">Home</button>
            <a
              style={{ textDecoration: "none" }}
              href="#cards"
              className="nav-btn"
            >
              Resorts
            </a>
            <button className="nav-btn">Contact</button>
          </nav>
        </header>
        {/* Aos scroll animation for hero section */}
        <main data-aos="fade-up" className="hero">
          <h1
            style={{ fontFamily: "italianno", fontSize: "100px" }}
            className="title"
          >
            Enjoy a Luxury Experience
          </h1>
          <p className="subtitle">
            Experience the perfect blend of luxury and nature. Book your stay
            and wake up to breathtaking beach views.
          </p>

          <div className="actions">
            <a
              href="#cards"
              style={{ textDecoration: "none" }}
              className="primary"
            >
              Book Now
            </a>
            <button className="secondary" onClick={handleExploreMore}>
              Explore More
            </button>
          </div>
        </main>
      </div>

      <AboutUs />

      <div>
        <div
          data-aos="fade-left"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "88px",
          }}
        >
          {/* sorting resorts based on rate */}
          <div className="ms-3 me-3 d-flex align-items-center gap-3">
            <label
              className={`d-flex align-items-center px-3 py-2 border rounded ${
                sortOrder === "asc"
                  ? "bg-primary text-white"
                  : "bg-light text-dark"
              }`}
              style={{ cursor: "pointer", transition: "all 0.3s" }}
            >
              <input
                type="radio"
                name="sort"
                value="asc"
                checked={sortOrder === "asc"}
                onChange={handleSortChange}
                className="me-2"
              />
              Low to High
            </label>

            <label
              className={`d-flex align-items-center px-3 py-2 border rounded ${
                sortOrder === "desc"
                  ? "bg-primary text-white"
                  : "bg-light text-dark"
              }`}
              style={{ cursor: "pointer", transition: "all 0.3s" }}
            >
              <input
                type="radio"
                name="sort"
                value="desc"
                checked={sortOrder === "desc"}
                onChange={handleSortChange}
                className="me-2"
              />
              High to Low
            </label>
          </div>
          {/* button section for all resorts and expensive resorts */}
          <button
            onClick={allHotels}
            className={`btn me-3 ${
              selected === "all" ? "btn-warning" : "btn-outline-warning"
            }`}
          >
            All Resorts
          </button>
          <button
            onClick={ShowExpensive}
            className={`btn ${
              selected === "premium" ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            Premium Resorts
          </button>
        </div>

        <Cards hotel={filteredHotels} />
      </div>

      <ParallaxSection />
      <Testimonials />
      <Footer />
    </>
  );
}
