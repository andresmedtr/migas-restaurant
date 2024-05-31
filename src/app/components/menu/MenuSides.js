import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
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
      <div className="d-flex justify-content-end fixedButton me-4">
        <button
          onClick={handleSides}
          className={`btn ${showSides && "d-none"}`}
          style={{
            width: "80%",
            backgroundColor: "#FFA50080",
            color: "#000000",
          }}>
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
          <div className="sides-container">
            <FontAwesomeIcon
              icon={faTimes}
              onClick={handleSides}
              className=" align-items-center closeButton text-light"
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
        </motion.div>
      )}
    </div>
  );
};

export default MenuSides;
