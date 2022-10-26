import { Container } from "react-bootstrap";
import SkillsCSS from "./Skills.module.css";

const Skills = () => {
  return (
    <Container className={`${SkillsCSS.container}`}>
      <ul className={`${SkillsCSS.wrapper}`}>
        <li>
          <img src="/images/html.PNG" />
        </li>
        <li>
          <img src="/images/css.PNG" />
        </li>
        <li>
          <img src="/images/javascript.PNG" />
        </li>
        <li>
          <img src="/images/react.PNG" />
        </li>
        <li>
          <img src="/images/bootstrap.PNG" />
        </li>
        <li className={`${SkillsCSS.github}`}>
          <img src="/images/github.PNG" />
        </li>
      </ul>
    </Container>
  );
};

export default Skills;
