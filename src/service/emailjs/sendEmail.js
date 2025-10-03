"use client";

import { trackContactSubmit } from "@/lib/gtmEvents";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function sendEmail(e) {
  e.preventDefault();

  const formEl = e.currentTarget; // the <for
  const formData = new FormData(formEl);
  const email = String(formData.get("from_email") || "");
  const name = String(formData.get("from_name") || "");
  const message = String(formData.get("message") || "");

  if (name.length < 3 || !email.includes("@") || message.length <= 5) {
    toast.error("Make sure to fill all fields and meet the criteria", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    return;
  }

  const key = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  emailjs.sendForm(serviceId, templateId, formEl, key).then(
    () => {
      toast.success("Successfully sent", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
      });
      formEl.reset();
      trackContactSubmit("success", "Contact");
    },
    (error) => {
      console.error(error);
      toast.error("Error sending email", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  );
}
