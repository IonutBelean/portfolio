import { Col, Container, Row } from "react-bootstrap";
import AboutCSS from "./About.module.css";
import { motion } from "framer-motion";

const imageAnimation = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120, duration: 0.5 },
  },
};
const borderAnimation = {
  offscreen: { opacity: 0 },
  onscreen: {
    scale: [1, 1.1, 1],
    opacity: 1,
    transition: { delay: 0.5, bounce: 0.5, duration: 1 },
  },
};
const textAnimation = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.5, duration: 2 },
  },
};

const resumeAnimation = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: { x: 0, opacity: 1, transition: { type: "spring", delay: 0.5 } },
};

const About = () => {
  return (
    <Container className={`${AboutCSS.container}`}>
      <Row className="g-3">
        <Col lg={6} md={6} sm={12}>
          <motion.div
            className={`${AboutCSS.img_box}`}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div
              className={`${AboutCSS.border}`}
              variants={borderAnimation}
            ></motion.div>
            <motion.img
              src="./images/img.JPG"
              alt="This is me."
              className={`${AboutCSS.img}`}
              variants={imageAnimation}
            />
          </motion.div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <motion.div
            className={`${AboutCSS.text_box}`}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
          >
            <motion.div variants={textAnimation}>
              Hi, I'm a <span>Junior Front-end Developer</span>, with a passion
              for making <span>beautiful</span>, <span>responsive</span>{" "}
              websites. I like the <span>creativity</span> and{" "}
              <span>visual</span> aspects of Front End. Attention to{" "}
              <span>details</span> is the best way to guarantee a beautiful
              modern website. I am now looking for my first{" "}
              <span>full time development</span> role with mentorship, room to
              grow and <span>positive</span> people. I am a fan of movies, video
              games, books and music.
            </motion.div>
            <motion.div variants={resumeAnimation}>
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
            </motion.div>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
