import React from "react";
import PromotionsCarousel from "./PromotionsCarousel";
import menuData from "../../menus/menuData.json";

const Promotions = () => {
  return (
    <div data-aos="fade-up" className="mx-auto">
      <div
        className="borderBottom mt-5 container"
        style={{
          marginBottom: "8%",
          display: "flex",
          justifyContent: "center",
        }}>
        <h1 className="text-center"> DAILY SPECIALS</h1>
      </div>
      <PromotionsCarousel slide={menuData} />
    </div>
  );
};

export default Promotions;
