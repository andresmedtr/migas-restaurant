"use client";

import { useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import Image from "next/image";
import { Document, Page, pdfjs } from "react-pdf";
import MenuSides from "./MenuSides";
import { lazy } from "react";

const MenuTabs = () => {
  const menuImgsSectionsArray = [
    { name: "Appetizers", file: ["ap1", "ap2"] },
    { name: "Breakfasts", file: ["bf1", "bf2", "bf3"] },
    { name: "Drinks", file: ["dr1"] },
    {
      name: "Breads and Pastas",
      file: ["bread1", "bread2", "bread3", "bread4", "bread5", "bread6"],
    },
    { name: "From Our Grill", file: ["grill1", "2", "3"] },
    { name: "Desserts", file: ["1", "2", "3"] },
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
    menuSectionsArray[0].name
  );

  // Set the number of pages
  const [numPages, setNumPages] = useState(null);

  // Sets the desired page
  const [pageNumber, setPageNumber] = useState(1);

  // This handles the selected tab and renders the PDF Menu for the specific TAB
  const handleClick = (item) => {
    setClickedSection(item);
    setPageNumber(1);
  };

  // Pages handling
  const handleApprovedLoad = ({ numPages }) => {
    setNumPages(numPages);
    console.log(numPages);
  };

  const handleNextPage = (pageNumber) => {
    console.log(pageNumber, "pageNumber", numPages, "number of pages");
    if (pageNumber < numPages) setPageNumber(pageNumber + 1);
  };
  const handlePrevPage = (pageNumber) => {
    console.log(pageNumber, "pageNumber", numPages, "number of pages");
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  // GlobalWorker set up for react-pdf
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  // Returned Body
  return (
    <div className="pt-5">
      <nav className="pt-3">
        <div
          className="nav nav-tabs d-flex w-100 justify-content-center"
          id="nav-tab"
          role="tablist">
          {menuSectionsArray.map((element, index) => {
            let item = element.name;
            return (
              <button
                key={index}
                className={`nav-link col text-secondary fs-5 ${
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
      {clickedSection === "From Our Grill" && <MenuSides />}
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
                <div className="w-100 mx-auto p-5 text-center">
                  {element.file.map((fileItem, fileIndex) => (
                    <Image
                      src={`/assets/menuImg/${fileItem}.png`}
                      width={350}
                      height={500}
                      alt={fileIndex}
                      key="image"
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* OBJECT TAG DOESNT WORK ON MOBILES */}
      {/* <object
                    data={`/assets/menus/${element.file}.pdf#zoom=75`}
                    type="application/pdf"
                    className={"w-100 pdfContent"}
                  /> */}

      {/* CANVAS HTML CODE TO RENDER PDFS DOESNT WORK ON MOBILES*/}
      {/* <div
                                      style="position: relative; width: 100%; height: 0; padding-top: 154.5455%;
                   padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
                   border-radius: 8px; will-change: transform;"
                  >
                    <iframe
                      loading="lazy"
                      style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
                      src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFsXtvYCgU&#x2F;view?embed"
                      allowfullscreen="allowfullscreen"
                      allow="fullscreen"></iframe>
                  </div> */}

      {/* react pdf */}
      {/* <Document
                    lazy
                    file={`/assets/menus/${element.file}.pdf`}
                    className={"mx-auto row h-auto"}
                    onLoadSuccess={handleApprovedLoad}>
                    <Page
                      className={"col-lg-4 p-0 bg-dark mx-auto"}
                      loading={<p></p>}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      pageNumber={pageNumber}
                    />
                  </Document>
                  <div className="mt-3 col-lg-2 col-5  m-auto border border-warning rounded-3">
                    <div className="d-flex row mx-auto">
                      <div
                        className="btn bg-warning col-lg-3 col-3"
                        onClick={() => handlePrevPage(pageNumber)}>
                        <FaRegArrowAltCircleLeft className="fs-3" />
                      </div>
                      <p className="col-lg-6 col-6 text-center m-auto fs-6">
                        {pageNumber} of {numPages}
                      </p>
                      <div
                        className="btn bg-warning col-lg-3 col-3"
                        onClick={() => handleNextPage(pageNumber)}>
                        <div>
                          <FaRegArrowAltCircleRight className="fs-3" />
                        </div>
                      </div>
                    </div>
                  </div> */}
    </div>
  );
};

export default MenuTabs;
