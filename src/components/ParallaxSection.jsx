import React from "react";
import "./ParallaxSection.css";

export default function ParallaxSection() {
  return (
    <section className="parallax-section">
      <div className="parallax-overlay">
        <div className="parallax-content">
          <h2>Escape to Paradise</h2>
          <p>Relax, unwind, and enjoy breathtaking views at our luxury resorts.</p>
          {/* <button className="btn btn-primary">Book Now</button> */}
        </div>
      </div>
    </section>
  );
}
