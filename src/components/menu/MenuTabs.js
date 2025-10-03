"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import MenuSides from "./MenuSides";
import { createClient } from "contentful";
import { lazy } from "react";

const MenuTabs = () => {
  const menuImgsSectionsArray = [
    { id: "appetizers", name: "Appetizers", file: ["ap1", "ap2", "ap3"] },
    {
      id: "grilled",
      name: "Grilled",
      file: ["grill3", "grill4", "grill5", "grill6", "grill7"],
    },
    {
      id: "chefSpecials",
      name: "Chef's Specials",
      file: ["grill2", "grill1", "grill8"],
    },
    {
      id: "breakfastsbrunch",
      name: "Breakfasts/Brunch",
      file: ["bf1", "bf2", "bf3", "brunch"],
    },

    {
      id: "breads",
      name: "Breads",
      file: ["bread1", "bread2", "bread3"],
    },
    {
      id: "pastas",
      name: "Pastas",
      file: ["pastas"],
    },
    {
      id: "kids",
      name: "Kids",
      file: ["kids"],
    },
    { id: "veganFish", name: "Vegan & Fish", file: ["vegan", "fish"] },

    { id: "desserts", name: "Desserts", file: ["desserts"] },
    { id: "drinks", name: "Drinks", file: ["drinks", "drinks1"] },
  ];

  const [menuImages, setMenuImages] = useState([]);

  // Sets the Clicked tab
  const [clickedSection, setClickedSection] = useState(
    menuImgsSectionsArray[1].name
  );
  // Set the ID of the clicked section to fetch from Contentful
  const [clickedSectionId, setClickedSectionId] = useState(
    menuImgsSectionsArray[1].id
  );

  const client = createClient({
    space: `${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    accessToken: `${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
  });

  // This handles the selected tab and renders the PDF Menu for the specific TAB
  const handleClick = (element) => {
    setClickedSection(element.name);
    setClickedSectionId(element.id);
  };

  // fetching menu images from contentful
  useEffect(() => {
    const fetchMenuImages = async () => {
      try {
        const response = await client.getAssets({
          "metadata.tags.sys.id[in]": clickedSectionId,
          order: "-sys.createdAt",
        });
        const images = response.items.map((item) => ({
          title: item.fields.title,
          url: `https:${item.fields.file.url}`,
        }));
        setMenuImages(images);
      } catch (error) {
        console.error("Error fetching menu images:", error);
        setTimeout(fetchMenuImages, 3000);
      }
    };
    if (clickedSectionId) fetchMenuImages();
  }, [clickedSectionId]);

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
                onClick={() => handleClick(element)}
                aria-selected={clickedSection === item}>
                {item}
              </button>
            );
          })}
        </div>
      </nav>
      {clickedSection === "Grilled" || clickedSection == "Chef's Specials" ? (
        <MenuSides />
      ) : null}
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
                  {menuImages.map((file, fileIndex) => (
                    <Image
                      src={file.url}
                      className="menuImages mx-auto p-3 col-lg-3"
                      width={450}
                      height={600}
                      alt={file.title}
                      key={`${file.title}`}
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
