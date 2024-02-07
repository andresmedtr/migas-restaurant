import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const MenuTabs = () => {
  const menuSectionsArray = [
    "Breakfasts",
    "Appetizer",
    "Entrees",
    "Pasta&Breads",
    "Drinks",
  ];

  const [clickedSection, setClickedSection] = useState(menuSectionsArray[0]);
  const [currentItem, setCurrentItem] = useState(
    "https://www.canva.com/design/DAF8ELJBBOQ/view" // Default URL
  );
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // const renderSelectedPdf = (clickedSection) => {
  //   switch (clickedSection) {
  //     case "Breakfasts":
  //       setCurrentItem("https://www.canva.com/design/DAF8EPSjOTk/view?embed");
  //       break;
  //     case "Appetizer":
  //       setCurrentItem("https://www.canva.com/design/DAF8ELJBBOQ/view");
  //       break;
  //     case "Entrees":
  //     case "Pasta/Burgers":
  //     case "Drinks":
  //       setCurrentItem("");
  //       break;
  //     default:
  //       setCurrentItem("https://www.canva.com/design/DAF8ELJBBOQ/view");
  //       break;
  //   }
  // };

  const handleClick = (item) => {
    setClickedSection(item);
    // renderSelectedPdf(item);
  };
  pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          {menuSectionsArray.map((item, index) => (
            <button
              key={index}
              className={`nav-link ${clickedSection === item ? "active" : ""}`}
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
          ))}
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {menuSectionsArray.map((item, index) => (
          <div
            key={index}
            className={`tab-pane fade w-100 mx-auto ${
              clickedSection === item ? "show active" : ""
            }`}
            id={`nav-${item.toLowerCase()}`}
            role="tabpanel"
            aria-labelledby={`nav-${item.toLowerCase()}-tab`}>
            {clickedSection === item && (
              <div className="menuPdf">
                <object
                  data={`/assets/menus/${item.toLowerCase()}.pdf`}
                  type="application/pdf"
                  className="menuFrame"
                />
                {/* <Document
                  file={`/assets/menus/${item.toLowerCase()}.pdf`}
                  onLoadSuccess={onDocumentLoadSuccess}>
                  <Page pageNumber={pageNumber} />
                </Document> */}
                {/* <iframe
                  loading="lazy"
                  className="menuFrame"
                  src="https://www.canva.com/design/DAF8EPSjOTk/view?embed"
                  allowFullScreen="allowfullscreen"
                  allow="fullscreen"
                /> */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuTabs;
