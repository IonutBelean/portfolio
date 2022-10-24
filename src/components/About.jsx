import { Container } from "react-bootstrap";
import AboutCSS from "./About.module.css";

const About = () => {
  return (
    <Container className={`${AboutCSS.container}`}>
      <div className={`${AboutCSS.img_box}`}>
        <img
          src="./images/img.JPG"
          alt="This is me."
          className={`${AboutCSS.img}`}
        />
      </div>
      <div className={`${AboutCSS.text_box}`}>
        <div>
          Hardworker, organised person, motivated to learn new things. Great in
          communication, teamplayer, fast learner, problem-solving, adapting to
          work conditions.
        </div>
        <div>
          <a href="/resume/CV.pdf" download className={`${AboutCSS.resume}`}>
            {" "}
            Download CV
          </a>
        </div>
      </div>
    </Container>
  );
};

export default About;
