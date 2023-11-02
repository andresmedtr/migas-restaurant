import React, { useEffect } from "react";
import About from "../components/About";
import Carousel from "../components/Carousel";
import PopularPlates from "../components/Specialties/PopularPlates";
import AOS from "aos";
import "aos/dist/aos.css";
import Promotions from "../components/Promotions/Promotions";

const Home = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 350,
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="App">
      <Carousel />
      <About />
      <Promotions />
      <PopularPlates />
    </div>
  );
};

export default Home;
