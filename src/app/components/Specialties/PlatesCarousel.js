import React from "react";
import menuData from "../../menus/menuData.json";
import { Carousel } from "react-bootstrap";
import "../../styles/popularplates.css";
import { Link } from "next/link";

const PlatesCarousel = () => {
  return (
    <div className="row container-fluid mx-auto">
      <div className="col-lg-4 mt-5 mb-lg-5">
        <div className="text-center">
          <h2 className="bordersBottom mx-auto w-50">BREAKFAST</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center h-100"
          data-aos="fade-up">
          <Carousel
            className="carouselShow bg bg-dark rounded-3"
            style={{
              width: "80%",
            }}>
            {menuData.breakfast.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="fixedImage rounded-3"
                  src={require(`../../../../public/media/${item.image}`)}
                  style={{ opacity: "0.7" }}
                  alt={`${index + 1} Slide`}
                />
                <Carousel.Caption className="itemDescription">
                  <h5 className="textCarousel">{item.name}</h5>
                  <p className="textCarousel">{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="col-lg-4 mt-5 mb-lg-5">
        <div className="text-center">
          <h2 className="bordersBottom mx-auto w-50">MIX GRILLS</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center h-100"
          data-aos="fade-down">
          <Carousel
            className="carouselShow bg-dark rounded-3"
            style={{
              width: "80%",
            }}>
            {menuData.mixGrills.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="fixedImage rounded-3"
                  src={require(`../../../../public/media/${item.image}`)}
                  style={{ opacity: "0.7" }}
                  alt={`${index + 1} Slide`}
                />
                <Carousel.Caption className="itemDescription">
                  <h5 className="textCarousel">{item.name}</h5>
                  <p className="textCarousel">{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="col-lg-4 mt-5 mb-5">
        <div className="text-center">
          <h2 className="bordersBottom mx-auto w-50">ENTREES</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center h-100"
          data-aos="fade-up">
          <Carousel
            className="carouselShow rounded-3 bg-dark"
            style={{
              width: "80%",
              height: "auto",
            }}>
            {menuData.entrees.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="fixedImage rounded-3"
                  src={require(`../../../../public/media/${item.image}`)}
                  style={{ opacity: "0.5" }}
                  alt={`${index} Slide`}
                />
                <Carousel.Caption className="itemDescription">
                  <h5 className="textCarousel">{item.name}</h5>
                  <p className="textCarousel">{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="w-lg-75 mx-auto mb-5 mt-5" data-aos="fade-down">
        <div className="col-lg-12">
          <h2 className="text-center bordersBottom mx-auto w-50">DESSERTS</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center h-100"
          data-aos="fade-up">
          <Carousel
            className="carouselShow bg-dark rounded-3"
            style={{
              width: "50%",
              height: "auto",
            }}>
            {menuData.bakery.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="fixedImage rounded-3"
                  src={require(`../../../../public/media/${item.image}`)}
                  style={{ opacity: "0.7" }}
                  alt={`${index} Slide`}
                />
                <Carousel.Caption className="itemDescription">
                  <h5 className="textCarousel">{item.name}</h5>
                  <p className="textCarousel">{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="w-lg-75 mx-auto mt-3" data-aos="fade-down">
        <div className="col-lg-12">
          <h2 className="text-center bordersBottom mx-auto w-50">BUTCHERY</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center h-100"
          data-aos="fade-down">
          <Carousel
            className="carouselShow bg-dark rounded-3"
            style={{
              width: "50%",
              height: "auto",
            }}>
            {menuData.butchery.steaks.map((item, index) => (
              <Carousel.Item key={index}>
                <img
                  className="fixedImage rounded-3"
                  src={require(`../../../../public/media/${item.image}`)}
                  style={{ opacity: "0.7" }}
                  alt={`${index} Slide`}
                />
                <Carousel.Caption className="itemDescription">
                  <h5 className="textCarousel">{item.name}</h5>
                  <p className="textCarousel">{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="d-flex justify-content-center pt-5">
        <Link to="/menu">
          <p
            className="fs-2 btn btn-warning text-light mb-2 mt-2
          ">
            VIEW OUR FULL MENU
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PlatesCarousel;
