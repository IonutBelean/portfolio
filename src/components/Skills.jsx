import { Container } from "react-bootstrap";
import SkillsCSS from "./Skills.module.css";
import { motion } from "framer-motion";

const leftImageAnimation = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: { x: 0, opacity: 1 },
  // rotate: [0, 45, 0],
  transition: { type: "spring", bounce: 0.4, duration: 1 },
};
const leftImageAnimation2 = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: { x: 0, opacity: 1 },
  // rotate: [0, 45, 0],
  transition: { type: "spring", bounce: 0.4, duration: 1 },
};

const Skills = () => {
  return (
    <Container className={`${SkillsCSS.container}`}>
      <motion.ul
        className={`${SkillsCSS.wrapper}`}
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.5 }}
      >
        <motion.li variants={leftImageAnimation}>
          <img src="/images/html.PNG" alt="HTML icon language" />
          <p>HTML</p>
        </motion.li>
        <motion.li variants={leftImageAnimation2}>
          <img src="/images/css.PNG" alt="CSS icon language" />
          <p>CSS</p>
        </motion.li>
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
      </motion.ul>
    </Container>
  );
};

export default Skills;
