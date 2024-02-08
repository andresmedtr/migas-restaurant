"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const MenuTabs = () => {
  const menuSectionsArray = [
    { name: "Appetizers", file: "appetizers" },
    { name: "Breakfasts", file: "breakfasts" },
    { name: "Entrees", file: "entrees" },
    { name: "Pasta or Breads", file: "pastaAndBreads" },
    { name: "Drinks", file: "drinks" },
  ];

  const [clickedSection, setClickedSection] = useState(
    menuSectionsArray[0].name
  );
  const [pageNumber, setPageNumber] = useState(1);

  // This handles the selected tab and renders the PDF Menu for the specific TAB
  const handleClick = (item) => {
    setClickedSection(item);
    setPageNumber(1);
  };

  // GlobalWorker set up for react-pdf
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  // Returned Body
  return (
    <div className="pt-5">
      <nav>
        <div
          className="nav nav-tabs d-flex w-100 justify-content-center"
          id="nav-tab"
          role="tablist">
          {menuSectionsArray.map((element, index) => {
            let item = element.name;
            return (
              <button
                key={index}
                className={`nav-link col-md-5 ${
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
      <div className="tab-content" id="nav-tabContent">
        {menuSectionsArray.map((element, index) => {
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
                <div className="w-75">
                  <Document
                    file={`/assets/menus/${element.file}.pdf`}
                    className={"w-25 mx-auto"}>
                    <Page
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      pageNumber={pageNumber}
                    />
                  </Document>
                  <div></div>
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
