"use client";

import { useEffect } from "react";
import About from "./components/About";
import Carousel from "./components/Carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import Frame from "./components/Frame";

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
      <Frame />
    </div>
  );
};

export default Home;
