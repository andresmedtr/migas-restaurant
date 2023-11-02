import React, { useState } from "react";
import Logo from "../assets/Logo-Home.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import OrdersModal from "./OrdersModal";

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(!showModal);
  };

  const handleToggle = () => {
    document.querySelector(".navbarItems").classList.remove("show");
  };

  return (
    <div className="navbarContainer w-100">
      <Navbar expand="lg" variant="dark" className="navBar">
        <Navbar.Brand as={Link} to="/" className="navbarLogo">
          <img className="logo-home" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent" className="navbarItems">
          <Nav className="nav-items ms-auto" style={{ zIndex: "200" }}>
            <Nav.Link
              as={Link}
              to="/"
              className="nav-link"
              onClick={handleToggle}>
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/menu"
              className="nav-link"
              onClick={handleToggle}>
              Menu
            </Nav.Link>
            <Nav.Item
              className="nav-link"
              onClick={() => {
                handleShow();
                handleToggle();
              }}>
              Order
            </Nav.Item>
            <Nav.Link
              as={Link}
              to="/butchery"
              className="nav-link"
              onClick={handleToggle}>
              Butchery
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-link"
              onClick={handleToggle}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <OrdersModal show={showModal} handleShow={handleShow} />
    </div>
  );
};
export default CustomNavbar;
