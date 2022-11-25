import { Container } from "react-bootstrap";
import SkillsCSS from "./Skills.module.css";
import { motion } from "framer-motion";

const leftImageAnimation = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};
const rightImageAnimation = {
  offscreen: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const Skills = () => {
  return (
    <Container className={`${SkillsCSS.container}`}>
      <motion.ul
        className={`${SkillsCSS.wrapper}`}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.li variants={leftImageAnimation}>
          <img src="/images/html.PNG" alt="HTML icon language" />
          <p>HTML</p>
        </motion.li>
        <motion.li variants={leftImageAnimation}>
          <img src="/images/css.PNG" alt="CSS icon language" />
          <p>CSS</p>
        </motion.li>
        <motion.li variants={leftImageAnimation}>
          <img src="/images/javascript.PNG" alt="JavaScript icon language" />
          <p>JavaScript</p>
        </motion.li>
        <motion.li variants={rightImageAnimation}>
          <img src="/images/react.PNG" alt="React icon framework" />
          <p>React</p>
        </motion.li>
        <motion.li variants={rightImageAnimation}>
          <img src="/images/bootstrap.PNG" alt="BootsTrap icon framework" />
          <p>Bootstrap</p>
        </motion.li>
        <motion.li variants={rightImageAnimation}>
          <img src="/images/github.PNG" alt="GitHub icon tool" />
          <p>GitHub</p>
        </motion.li>
      </motion.ul>
    </Container>
  );
};

export default Skills;
