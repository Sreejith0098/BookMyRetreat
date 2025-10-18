import React from "react";
import "./Landing.css";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

export default function Landing() {
  const handleBookNow = () => {
    alert("Booking feature coming soon!");
  };
  const handleExploreMore = () => {
    alert("Explore more section coming soon!");
  };
  return (
    <>
      <div className="resort-root">
        <div className="overlay" />

        <header className="nav">
          <div className="logo ps-3">BookMyRetreat</div>
          <nav>
            <button className="nav-btn">Home</button>
            <button className="nav-btn">Rooms</button>
            <button className="nav-btn">Facilities</button>
            <button className="nav-btn">Contact</button>
          </nav>
        </header>

        <main className="hero">
          <h1
            style={{ fontFamily: "italianno", fontSize: "100px" }}
            className="title"
          >
            Enjoy a Luxury  Experience
          </h1>
          <p className="subtitle">
            Experience the perfect blend of luxury and nature. Book your stay
            and wake up to breathtaking beach views.
          </p>

          <div className="actions">
            <button className="primary" onClick={handleBookNow}>
              Book Now
            </button>
            <button className="secondary" onClick={handleExploreMore}>
              Explore More
            </button>
          </div>
        </main>
      </div>
      <AboutUs/>
      <div>
      <Cards />
    </div>
      <Footer/>
    </>
  );
}
