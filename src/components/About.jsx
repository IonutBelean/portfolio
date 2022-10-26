import { Col, Container, Row } from "react-bootstrap";
import AboutCSS from "./About.module.css";

const About = () => {
  return (
    <Container className={`${AboutCSS.container}`}>
      <Row className="g-3">
        <Col lg={6} md={6} sm={12}>
          <div className={`${AboutCSS.img_box}`}>
            <img
              src="./images/img.JPG"
              alt="This is me."
              className={`${AboutCSS.img}`}
            />
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div className={`${AboutCSS.text_box}`}>
            <div>
              Hardworker, organised person, motivated to learn new things. Great
              in communication, teamplayer, fast learner, problem-solving,
              adapting to work conditions.
            </div>
            <div>
              <a
                href="/resume/CV.pdf"
                download
                className={`${AboutCSS.resume}`}
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
