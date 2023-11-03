import React from "react";
import { Link } from "next/link";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div
      id="footer"
      className="text-center text-white mt-5 container-fluid"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", marginTop: "auto" }}>
      {/* <div className="">
        <div className="row d-flex">
          <div className="col">
            <Link href="/#about-us-section">
              <a className="link w-25">
                <p className="text-uppercase font-weight-bold text-warning m-0 p-2">
                  About us
                </p>
              </a>
            </Link>
          </div>
          <div className="col p-2">
            <a href="https://www.instagram.com/migas_florida/">
              <FontAwesomeIcon
                className="text-warning fs-2"
                icon={faInstagram}
              />
            </a>
            <a href="https://m.facebook.com/people/Migas-Florida/100070057262272">
              <FontAwesomeIcon
                className="text-warning fs-2"
                icon={faFacebook}
              />
            </a>
          </div>
          <div className="col w-25">
            <Link
              href="/contact"
              className=""
              style={{ textDecoration: "none" }}>
              <p className="text-uppercase font-weight-bold text-warning m-0 p-2">
                Contact
              </p>
            </Link>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
              Here at Miga's, we take honor in our beliefs, that's why we tried
              to make our best to show you all of this Restaurant's quality.
            </p>
            <p>
              Reservations
              <FontAwesomeIcon icon={faPhoneVolume} className="text-warning" />:
              954-438-4242
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
