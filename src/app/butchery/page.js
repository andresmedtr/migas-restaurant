"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import menuData from "@/menus/menuData.json";
import "@/styles/butchery.css";

const Butchery = () => {
  const [currentSelection, setCurrentSelection] = useState("");

  return (
    <div className="pt-5 w-100 mx-auto">
      <motion.h1
        className="borderBottom text-center pt-5 w-25 mx-auto"
        initial={{ opacity: 0, x: 0, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}>
        BUTCHERY
      </motion.h1>
      <div className="pt-5">
        <div className="col-11 mx-auto">
          <motion.h2 className="text-center">ARGENTINIAN SPECIALTIES</motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 0, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1 }}
            className="row d-flex justify-content-center mx-auto">
            {menuData.butchery.steaks.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: 0, y: -50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1 }}
                key={index}
                className="bg card col-md-3 p-4 m-2 position-relative butcheryItem mx-auto">
                <img
                  onMouseEnter={() => {
                    setCurrentSelection(item.name);
                  }}
                  className="col-12 card-img-top"
                  src={`../assets/${item.image}`}
                  alt={`${currentSelection} ${index + 1}`}
                />
                <div className="card-body itemDescription">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">{item.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Butchery;
