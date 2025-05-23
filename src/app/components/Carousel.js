import React, { useState, useRef, useEffect } from "react";
import "../../styles/carousel.css";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import OrdersModal from "./OrdersModal";

const CarouselPage = () => {
  const videoRef = useRef();
  useEffect(() => {
    videoRef.current.play();
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="carouselContainer">
      <div className="d-flex mx-auto locationText">
        Located in the heart of Miramar, Florida
        <a
          href="https://www.google.com/maps/place/Miga's+Florida/@25.9793519,-80.3644991,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9a475305c9a3d:0xc3fbeda0da46d66c!8m2!3d25.9793471!4d-80.3619242!16s%2Fg%2F12m8_5tgn?entry=ttu"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon className="locationIcon" icon={faLocationDot} />
        </a>
      </div>

      <motion.h2
        className="orderNow border-light border-bottom"
        initial={{ y: -50 }}
        type="button"
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 10,
          duration: 3,
        }}
        onClick={handleShow}>
        ORDER NOW
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
        className="subtitle border-bottom border-2">
        Welcome
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        className="carouselHeading">
        Miga&apos;s Steakhouse
        <div style={{ display: "flex" }}>
          <p className="border-bottom border-2" style={{ width: "45%" }} />
          <span className="icon" />
          <p style={{ width: "47%" }} className="border-bottom border-2" />
        </div>
      </motion.h1>
      <motion.h2
        className="pLength"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.5 }}>
        Since 2009
      </motion.h2>
      <motion.h5
        className="orderBottomCorner btn btn-light text-dark"
        onClick={handleShow}>
        ORDER NOW
      </motion.h5>
      <div className="sliderShadow" />
      <div className="sliderContainer w-100">
        <video
          className="video w-100"
          loop
          muted
          allowFullScreen={true}
          ref={videoRef}
          autoPlay={true}
          playsInline>
          <source src={`/assets/VIDEO_MIGAS.mp4`} />
        </video>

        {/* <Image
          className="col-12 col-md-6 h-100"
          width={1}
          height={1}
          src={"/assets/asadodetiras.jpg"}
        />
        <Image
          className="col-12 col-md-6 h-100"
          width={1}
          height={1}
          src={"/assets/4meatsample.jpg"}
        />
        <Image
          className="col-12 h-100"
          width={1}
          height={1}
          src={"/assets/mixgrillx4.jpg"}
        /> */}
      </div>

      {/* <Carousel interval={2000} style={{ width: "100%" }}>
        <Carousel.Item className="sliderContainer">
          
        </Carousel.Item>
      </Carousel> */}

      <OrdersModal show={showModal} handleShow={handleShow} />
    </div>
  );
};

export default CarouselPage;
