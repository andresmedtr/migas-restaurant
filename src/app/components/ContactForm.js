"use client";

import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  // SENDING EMAIL LOGIC W/EMAILJS
  const sendEmail = (e) => {
    e.preventDefault();
    // CREATING VALIDATIONS FOR THE INPUTS WHEN EMPTY
    const validations = () => {
      const formData = new FormData(form.current);
      const email = formData.get("from_email");
      const name = formData.get("from_name");
      const message = formData.get("message");

      if (name.length < 3 || !email.includes("@") || message.length <= 5) {
        return false;
      }

      return true;
    };

    const isValid = validations();

    if (isValid) {
      emailjs.sendForm(serviceId, templateId, form.current, key).then(
        (result) => {
          console.log(result);
          toast.success("Successfully sent", {
            position: "top-center", // Position of the notification
            autoClose: 3000, // Duration to auto-close in milliseconds (3 seconds in this case)
            hideProgressBar: true, // Show or hide the progress bar
            closeOnClick: true, // Close the notification when clicked
            pauseOnHover: true, // Pause the timer when hovered
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending email", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
          });
        }
      );
    } else {
      toast.error("Make sure to fill all fields and meet the criteria", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
    e.target.reset();
  };

  return (
    <div className="pt-5 row container mx-auto">
      <div className="col-md mt-5">
        <h2
          className="pt-3
         text-center bordersBottom w-25-md mx-auto">
          Contact Us
        </h2>
        <div className="text-center mt-5">
          <h4 className="mb-5">Give us a call: (954)-438-4242</h4>
          <h4>Operation Hours:</h4>
          <h5>Monday - Wednesday: 7:30 AM - 9:00 PM</h5>
          <h5>Thursday - Saturday: 7:30 AM - 10:00 PM</h5>
          <h5>Sunday: 8:00 AM - 9:00 PM</h5>
        </div>
      </div>
      <div className="w-50-md col-md">
        <Form
          ref={form}
          onSubmit={sendEmail}
          className="pt-5 w-100 mx-auto m-0 col-7">
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
