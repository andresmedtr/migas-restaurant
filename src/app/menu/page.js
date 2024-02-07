"use client";

import menuData from "../../../public/assets/menuJson/menuImg.json";
import MenuTabs from "../components/MenuTabs";
import MenuSides from "../components/MenuSides";
import Image from "next/image";

const Menu = () => {
  const storeMenu = () => {
    return (
      // <div>
      <div className="menuPdf">
        <iframe
          loading="lazy"
          className="menuFrame"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFsXtvYCgU&#x2F;view?embed"
          allowfullscreen="allowfullscreen"
          allow="fullscreen"
        />
      </div>
      /* <a
          href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFsXtvYCgU&#x2F;view?utm_content=DAFsXtvYCgU&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
          target="_blank"
          rel="noopener">
          menu de migas steak house digital 1
        </a>
      </div> */

      // PREVIOUS CODE

      // <div
      //   className="col-12 col-lg-4 d-flex justify-content-center align-items-center p-0"
      //   key={index}>
      //   <Image
      //     src={`/assets/menu/${item}`}
      //     width={500}
      //     height={600}
      //     quality={100}
      //     style={{ width: "80%", height: "auto" }}
      //     alt={`${index + 1}`}
      //     key={index}
      //   />
      // </div>
    );
  };

  const images = storeMenu();

  return (
    <div className="pt-5 w-100 heightSetting">
      <MenuTabs />
      {/* <div
        style={{
          textAlign: "center",
          padding: "1rem",
          fontSize: "3rem",
        }}
        className="container pt-5">
        <div className="borderBottom"> MENU</div>
      </div>
      <MenuSides />
      <div className="row w-100 p-3 justify-content-center menuImagesContainer">
        {images} */}
      {/* </div> */}
    </div>
  );
};

export default Menu;
