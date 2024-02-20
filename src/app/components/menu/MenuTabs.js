"use client";

import { useState } from "react";
import Image from "next/image";
import MenuSides from "./MenuSides";
import { lazy } from "react";

const MenuTabs = () => {
  const menuImgsSectionsArray = [
    { name: "Appetizers", file: ["ap1", "ap2", "ap3"] },
    {
      name: "Grilled",
      file: ["grill3", "grill4", "grill5", "grill6", "grill7"],
    },
    {
      name: "Chef's Specials",
      file: ["grill2", "grill1", "grill8"],
    },
    { name: "Breakfasts/Brunch", file: ["bf1", "bf2", "bf3", "brunch"] },

    {
      name: "Breads",
      file: ["bread1", "bread2", "bread3", "bread4"],
    },
    {
      name: "Pastas",
      file: ["pastas"],
    },
    {
      name: "Kids",
      file: ["kids"],
    },
    { name: "Vegan & Fish", file: ["vegan"] },

    { name: "Desserts", file: ["desserts"] },
    { name: "Drinks", file: ["drinks", "drinks1"] },
  ];

  const menuSectionsArray = [
    { name: "Appetizers", file: "appetizers" },
    { name: "Breakfasts", file: "breakfasts" },
    { name: "Drinks", file: "drinks" },
    { name: "Breads and Pastas", file: "pastaAndBreads" },
    { name: "From Our Grill", file: "entrees" },
    { name: "Desserts", file: "desserts" },
  ];

  // Sets the Clicked tab
  const [clickedSection, setClickedSection] = useState(
    menuSectionsArray[4].name
  );

  // This handles the selected tab and renders the PDF Menu for the specific TAB
  const handleClick = (item) => {
    setClickedSection(item);
  };

  // // GlobalWorker set up for react-pdf
  // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  //   "pdfjs-dist/build/pdf.worker.min.js",
  //   import.meta.url
  // ).toString();

  // Returned Body
  return (
    <div className="pt-5">
      <nav className="pt-3">
        <div
          className="nav nav-tabs d-flex w-100 justify-content-center"
          id="nav-tab"
          role="tablist">
          {menuImgsSectionsArray.map((element, index) => {
            let item = element.name;
            return (
              <button
                key={index}
                className={`nav-link col text-secondary fs-md-5 ${
                  clickedSection === item ? "active" : ""
                }`}
                id={`nav-${item.toLowerCase()}-tab`}
                data-bs-toggle="tab"
                data-bs-target={`#nav-${item.toLowerCase()}`}
                type="button"
                role="tab"
                aria-controls={`nav-${item.toLowerCase()}`}
                onClick={() => handleClick(item)}
                aria-selected={clickedSection === item}>
                {item}
              </button>
            );
          })}
        </div>
      </nav>
      {clickedSection === "Grilled" && <MenuSides />}
      <div className="tab-content" id="nav-tabContent">
        {menuImgsSectionsArray.map((element, index) => {
          let item = element.name;
          return (
            <div
              key={index}
              className={`tab-pane fade w-100 mx-auto ${
                clickedSection === item ? "show active" : ""
              }`}
              id={`nav-${item.toLowerCase()}`}
              role="tabpanel"
              aria-labelledby={`nav-${item.toLowerCase()}-tab`}>
              {clickedSection === item && (
                <div className="w-100 mx-auto p-2 text-center">
                  {element.file.map((fileItem, fileIndex) => (
                    <Image
                      src={`/assets/menuImg/${fileItem}.png`}
                      className="mx-auto"
                      width={350}
                      height={500}
                      alt={fileIndex}
                      key={`${fileItem} - ${fileIndex}`}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuTabs;
