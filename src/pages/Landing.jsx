import React, { useEffect, useState } from "react";
import "./Landing.css";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import ParallaxSection from "../components/ParallaxSection";
import Testimonials from "../components/Testimonials";
import AOS from 'aos'
import "aos/dist/aos.css"; 

export default function Landing() {
    const [hotel, setHotel] = useState([]);
    const[filteredHotels,setFilteredHotels] = useState([]);


  const handleExploreMore = () => {
    alert("Explore more section coming soon!");
  };
  const allHotels =()=>{
    setFilteredHotels(hotel)
}
const ShowExpensive = () => {
    console.log(hotel); 
    const expensive = hotel.filter((eachHotel) => eachHotel.rate > 5000);
    setFilteredHotels(expensive);
  };
  useEffect(()=>{
    AOS.init({
       duration:1000,
       once: false,

    })
  },[])
  
useEffect(() => {
    fetch("/hotels.json")
      .then((res) => res.json())
      .then((data) => {
        setHotel(data);
        setFilteredHotels(data); 
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="resort-root">
        <div className="overlay" />

        <header className="nav">
          <div className="logo ps-3">BookMyRetreat</div>
          <nav>
            <button className="nav-btn">Home</button>
            <a style={{textDecoration:"none"}} href="#cards" className="nav-btn">Resorts</a>
            <button className="nav-btn">Contact</button>
          </nav>
        </header>

        <main data-aos="fade-up" className="hero">
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
            <a href="#cards" style={{textDecoration:'none'}} className="primary">
              Book Now
            </a>
            <button className="secondary" onClick={handleExploreMore}>
              Explore More
            </button>
          </div>
        </main>
      </div>
      <AboutUs/>
      <div >
        <div data-aos="fade-left" style={{display:'flex',justifyContent:'flex-end',marginRight:'88px'}} >
            <button onClick={allHotels} className="btn btn-outline-warning">All Resorts</button>
            <button onClick={ShowExpensive} className="btn btn-outline-primary ms-2">Premium Resorts</button>
        </div>
      <Cards hotel={filteredHotels} />
    </div>
    <ParallaxSection/>
    <Testimonials/>
      <Footer/>
    </>
  );
}
