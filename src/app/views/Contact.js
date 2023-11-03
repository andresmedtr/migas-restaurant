import React from "react";
import Layout from "../layout";
import ContactForm from "../components/ContactForm";
import "../styles/contact.css";

const Contact = () => {
  return (
    <Layout>
      <div className="contact pt-5">
        <ContactForm />
      </div>
    </Layout>
  );
};

export default Contact;
