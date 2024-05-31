import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import "@/styles/menusides.css";
import { motion } from "framer-motion";
import Image from "next/image";

const MenuSides = () => {
  const [showSides, setShowSides] = useState(false);
  const handleSides = () => {
    setShowSides(!showSides);
  };

  return (
    <div className="">
      <div className="d-flex justify-content-end fixedButton">
        <button
          onClick={handleSides}
          className={`btn sides-button ${showSides && "d-none"}`}>
          <p className="m-auto">
            S
            <br />
            I
            <br />
            D
            <br />
            E
            <br />S
          </p>
        </button>
      </div>
      {showSides && (
        <motion.div
          className="fixedButton"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: -10 }}
          transition={{ duration: 1 }}>
          <Draggable>
            <div className="sides-container">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={handleSides}
                className="align-items-center closeButton text-light"
              />

              <Image
                src="/assets/sides.png"
                className="sidesImage"
                width={250}
                height={250}
                alt="Sides"
                key="image"
              />
            </div>
          </Draggable>
        </motion.div>
      )}
    </div>
  );
};

export default MenuSides;
