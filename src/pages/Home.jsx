import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Contacts from "../components/Contacts";
import About from "../components/About";
import HomeCSS from "./Home.module.css";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useState } from "react";
import Contact from "../components/Contact";

const Home = () => {
  const [position, setPosition] = useState(true);

  const changePosition = () => {
    if (window.scrollY <= 250) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  };
  window.addEventListener("scroll", changePosition);

  // window.addEventListener("scroll", () => {
  //   const scrollPosition = window.scrollY;
  //   const contact = document.getElementById("contact");

  //   if (scrollPosition > 250) {
  //     contact.style.position = "fixed";
  //     contact.style.right = "20px";
  //     contact.style.bottom = "20px";
  //   } else {
  //     contact.style.position = "relative";
  //   }
  // });

  return (
    <div className={`${HomeCSS.main}`}>
      <div className={`${HomeCSS.home}`}>
        {/* <div className={`${HomeCSS.clip}`}></div> */}
        <Header />
        <Container className={`${HomeCSS.hero} `}>
          <h1 className={`${HomeCSS.main_heading} mb-4`}>
            Ioan <span>Belean</span>
          </h1>
          <h3>Junior Front-end Developer</h3>
          <a
            href="#contact"
            className={
              position
                ? `${HomeCSS.initial_state}`
                : `${HomeCSS.secondary_state}`
            }
          >
            Contact
          </a>
        </Container>
        <Contacts />
      </div>
      <div className={`${HomeCSS.about}`} id="about">
        <Container>
          <h2 className={`${HomeCSS.secondary_heading}`}>
            About <span>Me</span>
          </h2>
          <About />
        </Container>
      </div>
      <div id="skills">
        <Container>
          <h2 className={`${HomeCSS.secondary_heading}`}>
            {" "}
            Ski<span>lls</span>
          </h2>
          <Skills />
        </Container>
      </div>
      <div className={`${HomeCSS.projects}`} id="projects">
        <Container>
          <h2 className={`${HomeCSS.secondary_heading}`}>
            Proj<span>ects</span>
          </h2>
          <Projects />
        </Container>
      </div>
      <div className={`${HomeCSS.contact}`} id="contact">
        <Container className={`${HomeCSS.contact_container}`}>
          <h2 className={`${HomeCSS.secondary_heading}`}>
            Con<span>tact</span>
          </h2>
          <Contact />
        </Container>
      </div>
    </div>
  );
};

export default Home;
