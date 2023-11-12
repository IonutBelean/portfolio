import { Container, Card } from "react-bootstrap";
import ProjectsCSS from "./Projects.module.css";
import { motion } from "framer-motion";

const projectAnimation = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const Projects = () => {
  return (
    <Container>
      <motion.div
        className={`${ProjectsCSS.container} d-flex justify-content-center `}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.6 }}
      >
        {" "}
        <motion.div variants={projectAnimation}>
          <Card style={{ width: "18rem" }} className={`${ProjectsCSS.card}`}>
            <div className={`${ProjectsCSS.face} ${ProjectsCSS.face1}`}>
              <Card.Img
                variant="top"
                src="/images/bestgym.PNG"
                className={`${ProjectsCSS.img} `}
              />
            </div>
            <div className={`${ProjectsCSS.face} ${ProjectsCSS.face2}`}>
              <Card.Title className={`${ProjectsCSS.title}`}>
                Gym Brochure
              </Card.Title>
              <Card.Text className={`${ProjectsCSS.text}`}>
                <img src="/images/html.PNG" alt="Html icon language" />
                <img src="/images/css.PNG" alt="CSS icon language" />
                <img
                  src="/images/javascript.PNG"
                  alt="JavaScript icon language"
                />
              </Card.Text>
              <div className="d-flex justify-content-around">
                <Card.Link
                  href="https://best-gym-brochure.netlify.app"
                  target="_blank"
                  className={`${ProjectsCSS.btn}`}
                >
                  Live
                </Card.Link>
                <Card.Link
                  href="https://github.com/IonutBelean/best-gym.git"
                  target="_blank"
                  className={`${ProjectsCSS.btn}`}
                >
                  Code
                </Card.Link>
              </div>
            </div>
          </Card>
        </motion.div>
        <motion.div variants={projectAnimation}>
          <Card style={{ width: "18rem" }} className={`${ProjectsCSS.card}`}>
            <div className={`${ProjectsCSS.face} ${ProjectsCSS.face1}`}>
              <Card.Img
                variant="top"
                src="/images/movieland.PNG"
                className={`${ProjectsCSS.img} `}
              />
            </div>
            <div className={`${ProjectsCSS.face} ${ProjectsCSS.face2}`}>
              <Card.Title className={`${ProjectsCSS.title}`}>
                API Movies
              </Card.Title>
              <Card.Text className={`${ProjectsCSS.text}`}>
                {" "}
                <img src="/images/react.PNG" alt="React icon framework" />
              </Card.Text>
              <div
                className={`${ProjectsCSS.btns} d-flex justify-content-around`}
              >
                <Card.Link
                  href="https://apimoviesproject.netlify.app"
                  target="_blank"
                  className={`${ProjectsCSS.btn}`}
                >
                  Live
                </Card.Link>
                <Card.Link
                  href="https://github.com/IonutBelean/api-movies-project.git"
                  target="_blank"
                  className={`${ProjectsCSS.btn}`}
                >
                  Code
                </Card.Link>
              </div>
            </div>
          </Card>
        </motion.div>
        <motion.div variants={projectAnimation}>
          <Card style={{ width: "18rem" }} className={`${ProjectsCSS.card}`}>
            <div className={`${ProjectsCSS.face} ${ProjectsCSS.face1}`}>
              <Card.Img
                variant="top"
                src="/images/underfive.PNG"
                className={`${ProjectsCSS.img} `}
              />
            </div>
            <div className={`${ProjectsCSS.face} ${ProjectsCSS.face2}`}>
              <Card.Title className={`${ProjectsCSS.title}`}>
                E-Commerce
              </Card.Title>
              <Card.Text className={`${ProjectsCSS.text}`}>
                {" "}
                <img src="/images/react.PNG" alt="React icon framework" />
              </Card.Text>
              <div
                className={`${ProjectsCSS.btns} d-flex justify-content-around`}
              >
                <Card.Link
                  href="https://underfive.netlify.app/"
                  target="_blank"
                  className={`${ProjectsCSS.btn}`}
                >
                  Live
                </Card.Link>
                <Card.Link
                  href="https://github.com/IonutBelean/e-commerce"
                  target="_blank"
                  className={`${ProjectsCSS.btn}`}
                >
                  Code
                </Card.Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Projects;
