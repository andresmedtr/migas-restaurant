import React from "react";
import { motion } from "framer-motion";
import "../styles/frame.css";

const Frame = () => {
  return (
    <div data-aos="fade-down">
      <div
        style={{
          textAlign: "center",
          padding: "1rem",
          fontSize: "3rem",
        }}
        className="container">
        <motion.h1
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="borderBottom text-center"
          initial={{ opacity: 0, x: 0, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}>
          VIRTUAL VISIT
        </motion.h1>
      </div>
      <div
        className="d-flex justify-content-center mt-3 w-75 m-auto"
        data-aos="fade-up">
        <iframe
          title="virtual-visit"
          width="853"
          height="480"
          src="https://my.matterport.com/show/?m=217HjqoQQZq"
          allowFullScreen={true}
          allow="xr-spatial-tracking"></iframe>{" "}
      </div>
    </div>
  );
};

export default Frame;
