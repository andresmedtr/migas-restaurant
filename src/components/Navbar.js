"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import OrdersModal from "./OrdersModal";
import { trackPhoneClick, trackAddressClick } from "@/lib/gtmEvents";

const PHONE = "(954) 438-4242";
const PHONE_TEL = "tel:+19544384242";

export default function CustomNavbar() {
  const [showModal, setShowModal] = useState(false);

  const handleShowOrder = () => setShowModal((s) => !s);

  return (
    <div
      className="navbarContainer w-100 sticky-top "
      style={{ background: "rgba(0, 0, 0, 0.9)" }}>
      {/* expand={false} forces burger at all widths */}
      <Navbar expand={false} className="px-3 py-2 navBar" variant="dark">
        {/* Logo / Home */}
        <Navbar.Brand as={Link} href="/" className="navbarLogo">
          <Image
            width={80}
            height={30}
            className="logo-home"
            src="/assets/Logo-Home.png"
            alt="Miga's Steakhouse"
            priority
          />
        </Navbar.Brand>
        {/* Right side: phone + burger */}
        <div className="ms-auto d-flex align-items-center gap-3">
          <a
            href={PHONE_TEL}
            className="text-decoration-none text-light fw-semibold"
            onClick={() => {
              trackPhoneClick("navbar", PHONE);
            }}>
            {PHONE}
          </a>

          {/* Toggle controls the Offcanvas by id */}
          <Navbar.Toggle aria-controls="migas-offcanvas" />
        </div>
        <Navbar.Offcanvas
          id="migas-offcanvas"
          aria-labelledby="migas-offcanvas-label"
          placement="end"
          className="text-light "
          style={{ background: "#333" }}>
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title
              id="migas-offcanvas-label"
              className="d-flex align-items-center gap-2">
              <Image
                width={80}
                height={30}
                src="/assets/Logo-Home.png"
                alt="Miga's"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="flex-column fs-5">
              <Nav.Link as={Link} href="/" className="text-light py-2">
                Home
              </Nav.Link>
              <Nav.Link as={Link} href="/menu" className="text-light py-2">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} href="/contact" className="text-light py-2">
                Contact
              </Nav.Link>

              {/* Order button */}
              <div className="mt-3">
                <Button
                  variant="light"
                  style={{ background: "#b48303", border: "none" }}
                  className="text-dark w-100 py-2 fw-semibold"
                  onClick={handleShowOrder}>
                  Order Now
                </Button>
              </div>

              {/* Phone (again) inside drawer for convenience */}
              <div className="mt-4 border-top pt-3">
                <div className="text-uppercase text-secondary small">
                  Call us
                </div>
                <a
                  href={PHONE_TEL}
                  className="text-decoration-none text-light fs-6"
                  onClick={() => {
                    trackPhoneClick("navbar_drawer", PHONE);
                  }}>
                  {PHONE}
                </a>
                <div className="text-secondary small">
                  <a
                    href="https://www.google.com/maps/place/Miga's+Florida/@25.9793519,-80.3644991,17z/data=!3m1!4b1!4m6!3m5!1s0x88d9a475305c9a3d:0xc3fbeda0da46d66c!8m2!3d25.9793471!4d-80.3619242!16s%2Fg%2F12m8_5tgn?entry=ttu"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-secondary"
                    onClick={() => {
                      trackAddressClick("navbar_drawer");
                    }}>
                    16311 Miramar Pkwy, Miramar, FL 33027
                  </a>
                </div>
              </div>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>

      <OrdersModal show={showModal} handleShow={handleShowOrder} />
    </div>
  );
}
