"use client";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { sendEmail } from "@/service/emailjs/sendEmail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  return (
    <div className="pt-5 row container mx-auto">
      <div className="col-md mt-5">
        <h2
          className="pt-3
         text-center bordersBottom w-25-md mx-auto">
          Contact Us
        </h2>
        <div className="text-center mt-5">
          <h3 className="mb-5">Give us a call: (954)-438-4242</h3>
          <h3>Operation Hours:</h3>
          <h5>Monday - Thursday: 9:00 AM - 9:00 PM</h5>
          <h5>Friday: 9:00 AM - 10:00 PM</h5>
          <h5>Saturday: 8:00 AM - 10:00 PM</h5>
          <h5>Sunday: 8:00 AM - 9:00 PM</h5>
        </div>
      </div>
      <div className="w-50-md col-md">
        <Form onSubmit={sendEmail} className="pt-5 w-100 mx-auto m-0 col-7">
          <h5 className="text-center mx-auto w-100">Suggestions</h5>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="bg bg-dark w-100 text-white border-top rounded-2 text-center">
              Email Address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="from_email"
            />
            <Form.Text className="text-muted">
              We will never share your info
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="bg bg-dark w-100 text-white border-top rounded-2 text-center">
              Name
            </Form.Label>
            <Form.Control type="text" placeholder="Name" name="from_name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label className="bg bg-dark w-100 text-white border-top rounded-2 text-center">
              Message
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              contentEditable="true"
              placeholder="Message"
              name="message"
            />
          </Form.Group>
          <Button
            variant="light"
            style={{ background: "#b48303" }}
            type="submit">
            Send
          </Button>
        </Form>
      </div>
      <div className="mt-2">
        <h2 className="text-center mt-5 bordersBottom w-25-md mx-auto pb-4-md mb-5">
          Reservations:
        </h2>
        <h3 className="text-center">(954)-438-4242</h3>
        <h5 className="text-center">16311 Miramar Pkway, Miramar Fl. 33027</h5>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
