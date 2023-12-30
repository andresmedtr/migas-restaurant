import menuData from "@/menus/menuData.json";
import { Carousel } from "react-bootstrap";
import "@/styles/popularplates.css";
import Link from "next/link";
import Image from "next/image";

const PlatesCarousel = () => {
  return (
    <div className="row container-fluid mx-auto">
      <div className="col-lg-4 mt-5 mb-lg-5">
        <div className="text-center">
          <h2 className="bordersBottom mx-auto w-50">BREAKFAST</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          data-aos="fade-up">
          <Carousel className="bg-dark rounded-3 w-75">
            {menuData.breakfast.map((item, index) => (
              <Carousel.Item key={index}>
                <Image
                  width={100}
                  height={100}
                  className="fixedImage rounded-3"
                  src={`/assets/${item.image}`}
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
          <h2 className="bordersBottom mx-auto w-50">APPETIZER</h2>
        </div>
        <div
          className="d-flex justify-content-center align-items-center"
          data-aos="fade-down">
          <Carousel className="bg-dark rounded-3 w-75">
            {menuData.appetizer.map((item, index) => (
              <Carousel.Item key={index}>
                <Image
                  width={100}
                  height={100}
                  className="fixedImage rounded-3"
                  src={`/assets/${item.image}`}
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
          className="d-flex justify-content-center align-items-center"
          data-aos="fade-up">
          <Carousel className="rounded-3 bg-dark w-75">
            {menuData.entrees.map((item, index) => (
              <Carousel.Item key={index}>
                <Image
                  width={100}
                  height={100}
                  className="fixedImage rounded-3"
                  src={`/assets/${item.image}`}
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
      <div className="mx-auto mb-5 mt-2" data-aos="fade-down">
        <div className="col-lg-12">
          <h2 className="text-center bordersBottom mx-auto w-50">DESSERTS</h2>
        </div>
        <div className="mx-auto lowerCarousels" data-aos="fade-up">
          <Carousel className="bg-dark rounded-3 ">
            {menuData.bakery.map((item, index) => (
              <Carousel.Item key={index}>
                <Image
                  width={100}
                  height={100}
                  className="fixedImage rounded-3"
                  src={`/assets/${item.image}`}
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

      <div className="mx-auto mt-3" data-aos="fade-down">
        <div className="col-lg-12">
          <h2 className="text-center bordersBottom mx-auto w-50">BUTCHERY</h2>
        </div>
        <Link href="/butchery">
          <div className="mx-auto lowerCarousels" data-aos="fade-down">
            <Carousel className=" bg-dark rounded-3">
              {menuData.butchery.steaks.map((item, index) => (
                <Carousel.Item key={index}>
                  <Image
                    width={100}
                    height={100}
                    className="fixedImage rounded-3"
                    src={`/assets/butchery/${item.image}`}
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
        </Link>
      </div>

      <div className="d-flex justify-content-center pt-5">
        <Link href="/menu">
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
