import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../../styles/order.css";

const OrdersModal = ({ show, handleShow }) => {
  const handleClose = () => {
    handleShow();
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
          <div className="mt-5 m-5">
            <h2 className="text-center">Take-Out</h2>
            <div className="text-center">
              <a
                href="https://fndn.mn/rbh0p5eRg"
                target="_blank"
                rel="noreferrer">
                <Button className="btn btn-warning">Order Now</Button>
              </a>
            </div>
          </div>
          <div className="m-5 row w-100 mx-auto">
            <h2
              className="text-center p-2 col-12"
              style={{ borderTop: "2px solid #b48303" }}>
              Delivery
            </h2>
            <div className="text-center w-100">
              <a
                style={{
                  width: "100px",
                  height: "100px",
                  position: "relative",
                }}
                href="https://www.doordash.com/store/miga's-bread-deli-meat-&-wine-miramar-105895/?event_type=autocomplete&pickup=false"
                target="_blank"
                className="m-1 col"
                rel="noreferrer">
                <img
                  className="w-25 rounded col"
                  src="/assets/doordash.jpg"
                  alt="Doordash"
                />
              </a>
              <a
                href="https://www.ubereats.com/store/migas/rMaZBuaLRfG7_Oq0-yUklg/c7cd2aeb-d461-4693-b7c1-be48838b547e?diningMode=DELIVERY"
                target="_blank"
                className="m-1"
                rel="noreferrer">
                <img
                  src="/assets/ubereats.jpg"
                  className="w-25 rounded col"
                  alt="Uber"
                />
              </a>
              <a
                href="https://postmates.com/store/migas/rMaZBuaLRfG7_Oq0-yUklg?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjg5MTQlMjBOVyUyMDE2OHRoJTIwU3QlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjI0OGNlYmMzMi04NmZkLTViNjQtZjZjYS0wMTI0NDE5Y2QyZjUlMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTI1LjkyNTY5MiUyQyUyMmxvbmdpdHVkZSUyMiUzQS04MC4zNDU5MTklN0Q%3D"
                target="_blank"
                className="m-1"
                rel="noreferrer">
                <img
                  src="/assets/postmates-logo.jpg"
                  className="w-25 rounded col"
                  alt="Postmates"
                />
              </a>
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
};

export default OrdersModal;
