import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ContactCSS from "./Contact.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MessageSent from "./MessageSent";

const Contact = () => {
  const [show, setShow] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    setShow(!show);

    emailjs
      .sendForm(
        "service_xlh46hk",
        "template_g0d86yf",
        form.current,
        "sn7Aa4O9i3pHxlV7F"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container
      className={`${ContactCSS.container} d-flex justify-content-center align-items-center`}
    >
      {!show && (
        <Form
          className={`${ContactCSS.form}`}
          onSubmit={handleSubmit}
          ref={form}
        >
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              name="name"
              className={`${ContactCSS.name}`}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              className={`${ContactCSS.email}`}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Form.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              className={`${ContactCSS.message}`}
              placeholder="Write your message"
            />
          </Form.Group>

          <Button type="submit" className={`${ContactCSS.btn}`}>
            Send
          </Button>
        </Form>
      )}
      {show && <MessageSent />}
    </Container>
  );
};

export default Contact;
