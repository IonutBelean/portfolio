import { Container } from "react-bootstrap";
import MessageSentCSS from "./MessageSent.module.css";

const MessageSent = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center flex-column">
      <h2 className={`${MessageSentCSS.secondary}`}>
        Message <span>Received</span>{" "}
      </h2>
      <img
        src="/images/success.PNG"
        alt="Success."
        className={`${MessageSentCSS.image}`}
      />
    </Container>
  );
};

export default MessageSent;
