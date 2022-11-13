import { Container } from "react-bootstrap";
import SkillsCSS from "./Skills.module.css";

const Skills = () => {
  return (
    <Container className={`${SkillsCSS.container}`}>
      <ul className={`${SkillsCSS.wrapper}`}>
        <li>
          <img src="/images/html.PNG" alt="HTML icon language" />
          <p>HTML</p>
        </li>
        <li>
          <img src="/images/css.PNG" alt="CSS icon language" />
          <p>CSS</p>
        </li>
        <li>
          <img src="/images/javascript.PNG" alt="JavaScript icon language" />
          <p>JavaScript</p>
        </li>
        <li>
          <img src="/images/react.PNG" alt="React icon framework" />
          <p>React</p>
        </li>
        <li>
          <img src="/images/bootstrap.PNG" alt="BootsTrap icon framework" />
          <p>Bootstrap</p>
        </li>
        <li className={`${SkillsCSS.github}`}>
          <img src="/images/github.PNG" alt="GitHub icon tool" />
          <p>GitHub</p>
        </li>
      </ul>
    </Container>
  );
};

export default Skills;
