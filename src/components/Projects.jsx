import { Container, Card, Button } from "react-bootstrap";
import ProjectsCSS from "./Projects.module.css";

const Projects = () => {
  return (
    <Container
      className={`${ProjectsCSS.container} d-flex justify-content-center `}
    >
      {" "}
      <Card style={{ width: "18rem" }} className={`${ProjectsCSS.card}`}>
        <Card.Img variant="top" src="/images/bestgym.PNG" />
        <Card.Title className={`${ProjectsCSS.title}`}>Gym Brochure</Card.Title>
        <Card.Text className={`${ProjectsCSS.text}`}>
          Html CSS Javascript
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
      </Card>
      <Card style={{ width: "18rem" }} className={`${ProjectsCSS.card}`}>
        <Card.Img variant="top" src="/images/movieland.PNG" />
        <Card.Title className={`${ProjectsCSS.title}`}>API's Movies</Card.Title>
        <Card.Text className={`${ProjectsCSS.text}`}>React</Card.Text>
        <div className={`${ProjectsCSS.btns} d-flex justify-content-around`}>
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
      </Card>
    </Container>
  );
};

export default Projects;
