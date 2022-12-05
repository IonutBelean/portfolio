import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Contacts from "../components/Contacts";
import About from "../components/About";
import HomeCSS from "./Home.module.css";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useState, useEffect } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "../components/Head";
import { motion } from "framer-motion";
import FadeLoader from "react-spinners/FadeLoader";

const Home = () => {
  const [position, setPosition] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const changePosition = () => {
    if (window.scrollY <= 250) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  };
  window.addEventListener("scroll", changePosition);

  return (
    <div>
      {loading ? (
        <div className={`${HomeCSS.loader_container}`}>
          <FadeLoader
            color={"#66fcf1"}
            loading={loading}
            className={`${HomeCSS.loader}`}
          />
        </div>
      ) : (
        <div className={`${HomeCSS.main}`}>
          <div className={`${HomeCSS.home}`}>
            <div className={`${HomeCSS.clip}`}></div>
            <div className={`${HomeCSS.clip2}`}></div>
            {/* <div className={`${HomeCSS.clip3}`}></div> */}
            <Header />
            <Container className={`${HomeCSS.hero} `}>
              {/* <VideoBg /> */}
              <motion.h1
                className={`${HomeCSS.main_heading} mb-4`}
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Ioan{" "}
                <motion.span
                  initial={{ color: "#c5c6c7" }}
                  animate={{ color: "#66fcf1" }}
                  transition={{ delay: 0.7, duration: 1 }}
                >
                  Belean
                </motion.span>
              </motion.h1>
              <h3>Junior Front-end Developer</h3>
              <a
                href="#contact"
                className={
                  position
                    ? `${HomeCSS.initial_state}`
                    : `${HomeCSS.secondary_state}`
                }
                id="first_contact"
              >
                Contact
              </a>
              <div className={`${HomeCSS.head}`}>
                <Head />
              </div>
            </Container>
          </div>
          <div className={`${HomeCSS.about}`} id="about">
            <Container>
              <motion.h2
                className={`${HomeCSS.secondary_heading}`}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, rotate: [0, 45, -30, 0] }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 110, duration: 0.5 }}
              >
                About{" "}
                <motion.span
                  initial={{ color: "#c5c6c7" }}
                  whileInView={{ color: "#66fcf1" }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Me
                </motion.span>
              </motion.h2>
              <About />
            </Container>
          </div>
          <div className={`${HomeCSS.skills}`} id="skills">
            <Container>
              <motion.h2
                className={`${HomeCSS.secondary_heading}`}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, rotate: [0, 45, -30, 0] }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 110, duration: 0.5 }}
              >
                {" "}
                Ski
                <motion.span
                  initial={{ color: "#c5c6c7" }}
                  whileInView={{ color: "#66fcf1" }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  lls
                </motion.span>
              </motion.h2>
              <Skills />
            </Container>
          </div>
          <div className={`${HomeCSS.projects}`} id="projects">
            <Container>
              <motion.h2
                className={`${HomeCSS.secondary_heading}`}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, rotate: [0, 45, -30, 0] }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 110, duration: 0.5 }}
              >
                Proj
                <motion.span
                  initial={{ color: "#c5c6c7" }}
                  whileInView={{ color: "#66fcf1" }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  ects
                </motion.span>
              </motion.h2>
              <Projects />
            </Container>
          </div>
          <div className={`${HomeCSS.contact}`} id="contact">
            <Container className={`${HomeCSS.contact_container}`}>
              <motion.h2
                className={`${HomeCSS.secondary_heading}`}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1, rotate: [0, 45, -30, 0] }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 110, duration: 0.5 }}
              >
                Con
                <motion.span
                  initial={{ color: "#c5c6c7" }}
                  whileInView={{ color: "#66fcf1" }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  tact
                </motion.span>
              </motion.h2>
              <Contact />
            </Container>
          </div>
          <div>
            <Footer />
          </div>
          <Contacts />
        </div>
      )}
    </div>
  );
};

export default Home;
