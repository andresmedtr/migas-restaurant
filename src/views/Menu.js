import React from "react";
import { motion } from "framer-motion";
import menuData from "../assets/menu/menuImg.json";
import MenuSides from "../components/MenuSides";
// import sides from "../assets/menu/sides.jpg";

const Menu = () => {
  const iterateImages = (array) => {
    return array.map((item, index) => {
      return (
        <img
          src={require(`../assets/menu/${item}`)}
          alt={`${index + 1}`}
          className="col-6 col-lg-4 p-0 menuImages"
          key={index}
        />
      );
    });
  };

  const images = iterateImages(menuData.images);

  return (
    <div className="pt-5 w-100 heightSetting">
      <div
        style={{
          textAlign: "center",
          padding: "1rem",
          fontSize: "3rem",
        }}
        className="container pt-5">
        <motion.h1
          className="borderBottom"
          initial={{ opacity: 0, x: 0, y: -50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1 }}>
          MENU
        </motion.h1>
      </div>
      <div>
        <MenuSides />
      </div>
      <div className="row w-100 p-3 justify-content-center menuImagesContainer">
        {images}
      </div>
    </div>
  );
};

export default Menu;
