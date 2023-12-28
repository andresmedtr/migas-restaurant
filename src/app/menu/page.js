"use client";

import menuData from "../../../public/assets/menu/menuImg.json";
import MenuSides from "../components/MenuSides";
import Image from "next/image";

const Menu = () => {
  const iterateImages = (array) => {
    return array.map((item, index) => {
      return (
        <div
          className="col-12 col-lg-4 d-flex justify-content-center align-items-center p-0"
          key={index}>
          <Image
            src={`/assets/menu/${item}`}
            width={500}
            height={600}
            quality={100}
            style={{ width: "80%", height: "auto" }}
            alt={`${index + 1}`}
            key={index}
          />
        </div>
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
        <div className="borderBottom"> MENU</div>
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
