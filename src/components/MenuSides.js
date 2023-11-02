import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import sides from "../assets/menu/sides.jpg";
import "../styles/menusides.css";
import { motion } from "framer-motion";
import Draggable from "react-draggable";

const MenuSides = () => {
  const [showSides, setShowSides] = useState(false);
  const handleSides = () => {
    setShowSides(!showSides);
  };

  return (
    <Draggable axis="x" scale={1}>
      <div className="fixedButton w-50">
        <div className="d-flex justify-content-end me-4">
          <p
            onClick={handleSides}
            className={`btn btn-warning d-flex align-items-center fixedButton text-center ${
              showSides && "d-none"
            }`}
            style={{ width: "5%" }}>
            Sides
          </p>
        </div>
        {showSides && (
          <motion.div
            className="fixedButton"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: -10 }}
            transition={{ duration: 1 }}>
            <div className="sides-container">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={handleSides}
                className=" align-items-center closeButton"
              />
              <img
                className="sides-image"
                src={sides}
                alt="Sides"
                key="image"
              />
            </div>
          </motion.div>
        )}
      </div>
    </Draggable>
  );
};

export default MenuSides;
