"use client";

import React, { useEffect } from "react";
import About from "../components/About";
import Carousel from "../components/Carousel";
import PopularPlates from "../components/Specialties/PopularPlates";
import AOS from "aos";
import "aos/dist/aos.css";
import Promotions from "../components/Promotions/Promotions";
import Layout from "../layout";

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
    <Layout>
      <Carousel />
      <About />
      <Promotions />
      <PopularPlates />
    </Layout>
  );
};

export default Home;
