import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "@/styles/promotions.css";
import Image from "next/image";

const PromotionsCarousel = ({ slide }) => {
  const [itemIdx, setItemIdx] = useState(0);

  const handlePrev = () => {
    setItemIdx(itemIdx === 0 ? slide.promotions.length - 1 : itemIdx - 1);
  };

  const handleNext = () => {
    setItemIdx(itemIdx === slide.promotions.length - 1 ? 0 : itemIdx + 1);
  };

  return (
    <div className="slider">
      <FaArrowAltCircleLeft
        className="left-arrow"
        onClick={() => handlePrev()}
      />
      <FaArrowAltCircleRight
        className="right-arrow"
        onClick={() => handleNext()}
      />
      {slide.promotions.map((item, index) => {
        return (
          <div
            className={`${index === itemIdx ? "slideActive" : "slides"}`}
            key={index}>
            {index === itemIdx && (
              <div className="mb-5 w-100">
                <h2 className="mt-lg-5">{item.name}</h2>
                {/* DISPLAYING IMAGE OR VIDEO ON DAILY SPECIALS SECTION */}
                {!item.image ? (
                  <video
                    className="w-75 mx-auto rounded-4 "
                    loop
                    muted
                    playsInline
                    controls
                    playbackrate={1.5}
                    autoPlay={true}>
                    <source src={`/assets/${item.video}`} />
                  </video>
                ) : (
                  <div className="rounded-4 w-75 mx-auto bg bg-dark text-center">
                    <Image
                      width={1000}
                      height={760}
                      src={`/assets/${item.image}`}
                      style={{ opacity: "0.6", height: "auto" }}
                      alt={`${index + 1} ${item.name}`}
                      className="w-100 mx-auto rounded-4"
                    />
                  </div>
                )}

                <h4 className="mt-2 w-75 descriptionBorders mx-auto mb-2 fs-4">
                  {item.description}
                </h4>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PromotionsCarousel;
