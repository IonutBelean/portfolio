import { Col, Container, Row } from "react-bootstrap";
import AboutCSS from "./About.module.css";

const About = () => {
  return (
    <Container className={`${AboutCSS.container}`}>
      <Row className="g-3">
        <Col lg={6} md={6} sm={12}>
          <div className={`${AboutCSS.img_box}`}>
            <div className={`${AboutCSS.border}`}></div>
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
              Hi, I'm a <span>Junior Front-end Developer</span>, with a passion
              for making <span>beautiful</span>, <span>responsive</span>{" "}
              websites. I like the <span>creativity</span> and{" "}
              <span>visual</span> aspects of Front End. Attention to{" "}
              <span>details</span> is the best way to guarantee a beautiful
              modern website. I am now looking for my first{" "}
              <span>full time development</span> role with mentorship, room to
              grow and <span>positive</span> people. I am a fan of movies, video
              games, books and music.
            </div>
            <div>
              <a
                href="/resume/CV.pdf"
                download
                className={`${AboutCSS.resume}`}
              >
                {" "}
                <img
                  src="/images/download.png"
                  alt="download icon"
                  className={`${AboutCSS.download}`}
                />
                Resume
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
