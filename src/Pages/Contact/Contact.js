import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/Contact.css";
import { IconMail } from "@tabler/icons-react";
import { IconPhone } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import { Button, TextInput, Textarea } from "@mantine/core";
<script src="https://smtpjs.com/v3/smtp.js"></script>;
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wmmk56w", "template_l5wbexb", form.current, {
        publicKey: "zg0F5obFw__KyBm9P",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <div className="contact-page">
        <div className="contact-page-banner-container">
          <h2>Contact us</h2>
          <h5 className="automatic-phase-changeover-page-container-next-title">
            <a href="index.html" class="home">
              {" "}
              home
            </a>{" "}
            ~ contact us
          </h5>
        </div>
        <div className="contact-page-container">
          <div className="leftside-contact-details-container">
            <h2>Get in touch!</h2>
            <div className="div">
              <p className="email">
                <IconMail className="mailicon" size={60} color="red" />{" "}
                www.mashtechengineers@gmail.com
              </p>
            </div>
            <div>
              <p className="phone">
                <IconPhone className="phoneicon" size={60} color="red" /> +91
                98424 33153
              </p>
            </div>
            <div>
              <p className="map">
                <IconMapPin className="mapicon" size={90} color="red" /> Room
                No.5, 488 - C, Navaladi Plaza, Vaiyapuri Nagar 2nd Cross, Karur
                - 639 002.
              </p>
            </div>
          </div>
          <div className="rightside-contact-details-container">
            <div className="post">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form">
                  <p className="para">Name</p>
                </div>
                <TextInput placeholder="Input placeholder" /> <br/>
                <p className="para">Email</p>
                <TextInput placeholder="Input placeholder" /> <br/>
                <p className="para">Message</p> 
                <Textarea placeholder="Message" autosize minRows={6} />
                <button className="btn">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
