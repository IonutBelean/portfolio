import { Container } from "react-bootstrap";
import Header from "../components/Header";
import About from "../components/About";
import HomeCSS from "./Home.module.css";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className={`${HomeCSS.main}`}>
      <div className={`${HomeCSS.home}`}>
        <Header />
        <Container className={`${HomeCSS.hero} `}>
          <h1 className={`${HomeCSS.main_heading} mb-4`}>
            <span>B</span>elean <span>I</span>oan
          </h1>
          <h3>Junior Front-end Developer</h3>
        </Container>
      </div>
      <div className={`${HomeCSS.about}`}>
        <Container>
          <h2 className={`${HomeCSS.secondary_heading}`}>
            <span>A</span>bout <span>M</span>e
          </h2>
          <About />
        </Container>
      </div>
      <div>
        <Container>
          <h2 className={`${HomeCSS.secondary_heading}`}>
            {" "}
            <span>S</span>kills
          </h2>
          <Skills />
        </Container>
      </div>
    </div>
  );
};

export default Home;
