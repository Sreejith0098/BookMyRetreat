import React, { useEffect } from "react";
import img1 from "../../src/assets/aboutImg1.jpg";
import img2 from "../../src/assets/aboutImg2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-section container py-5">
      <div className="row align-items-center">
        {/* Left Side */}
        <div
          data-aos="fade-right"
          className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0"
        >
          <h5
            style={{
              textDecoration: "underline",
              color: "grey",
              textDecorationColor: "#cc7722",
              textDecorationThickness: "3px",
              textUnderlineOffset: "4px",
            }}
          >
            ABOUT US
          </h5>
          <h1
            style={{
              fontFamily: "italianno",
              fontSize: "2.5rem",
              lineHeight: "1.3",
            }}
          >
            Escape to Your Dreams – Your Dream Resort Awaits
          </h1>
          <p className="mt-3" style={{ color: "#555" }}>
            Discover breathtaking destinations, luxurious accommodations, and
            unforgettable experiences. Whether you're planning a romantic
            getaway, a family vacation, or a solo adventure, our curated
            selection of world-class resorts ensures your perfect escape is just
            a click away. Book now and let your journey to relaxation begin.
          </p>
          <button className="btn btn-warning fw-bold mt-3">Learn More</button>
        </div>

        {/* Right Side */}
        <div
          data-aos="fade-left"
          className="col-12 col-md-6 d-flex justify-content-center position-relative"
          style={{ minHeight: "320px" }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "450px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={img2}
              alt="Resort 2"
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            />
            <img
              src={img1}
              alt="Resort 1"
              style={{
                width: "70%",
                borderRadius: "8px",
                objectFit: "cover",
                position: "absolute",
                bottom: "-30px",
                left: "15px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
