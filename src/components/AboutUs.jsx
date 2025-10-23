import React from "react";
import img1 from "../../src/assets/aboutImg1.jpg";
import img2 from "../../src/assets/aboutImg2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  return (
    <>
      <div className="about-section d-flex  pt-4 ">
        <div data-aos="fade-right" className="left-side mt-5 col-md-6 ps-5 ">
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
          <h1 style={{ fontFamily: "italianno", fontSize: "45px" }}>
            Escape to Your Dreams – Your Dream Resort Awaits
          </h1>
          <p>
            Discover breathtaking destinations, luxurious accommodations, and
            unforgettable experiences. Whether you're planning a romantic
            getaway, a family vacation, or a solo adventure, our curated
            selection of world-class resorts ensures your perfect escape is just
            a click away. Book now and let your journey to relaxation begin.
          </p>
          <button className="btn btn-warning fw-bold">Learn More</button>
        </div>
        <div className="right-side">
          <div
            data-aos="fade-left"
            style={{
              position: "relative",
              width: "400px",
              height: "400px",
              margin: "0 auto",
              marginLeft: "80px",
            }}
          >
            <img
              src={img2}
              alt="Resort 2"
              style={{
                position: "absolute",
                top: "10px",
                left: "130px",
                borderRadius: "6px",
                width: "450px",
                height: "250px",
                objectFit: "cover",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                zIndex: 4,
              }}
            />
            <img
              src={img1}
              alt="Resort 3"
              style={{
                position: "absolute",
                top: "200px",
                left: "0px",
                borderRadius: "6px",
                width: "300px",
                height: "170px",
                objectFit: "cover",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                zIndex: 5,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
