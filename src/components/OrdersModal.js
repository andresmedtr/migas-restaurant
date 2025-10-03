"use client";

import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import { deliveryServices } from "@/utils/constants";
import "./../styles/order.css";

export default function OrdersModal({ show, handleShow }) {
  const handleClose = () => handleShow();

  const handleClick = (tracker) => {
    if (tracker) tracker("orders_modal");
  };

  return (
    <div className="custom-modal">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          className="border-2 border-bottom border-warning">
          <Modal.Title className="w-100">
            <h3 className="text-center">Order Now From Our Apps</h3>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="modal-body justify-content-around">
          {/* Take-Out */}
          <div className="mt-5 m-5">
            <h2 className="text-center">Take-Out</h2>
            <div className="text-center">
              <a
                href={deliveryServices[0].href}
                target="_blank"
                rel="noreferrer"
                onClick={() => handleClick(deliveryServices[0].tracker)}>
                <Button className="btn btn-warning">Place your order!</Button>
              </a>
            </div>
          </div>

          {/* Delivery */}
          <div className="m-5 row w-100 mx-auto">
            <h2
              className="text-center p-2 col-12"
              style={{ borderTop: "2px solid #b48303" }}>
              Delivery
            </h2>
            <div className="text-center w-100 d-flex flex-wrap justify-content-center">
              {deliveryServices.slice(1).map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  target="_blank"
                  rel="noreferrer"
                  className="m-2"
                  onClick={() => handleClick(service.tracker)}>
                  <Image
                    src={service.img}
                    alt={service.alt}
                    height={90}
                    width={90}
                    className="rounded"
                  />
                </a>
              ))}
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="border-2 border-top border-warning">
          <Button className="btn btn-secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
