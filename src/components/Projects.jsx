import { Container, Card, Carousel } from "react-bootstrap";
import ProjectsCSS from "./Projects.module.css";

const Projects = () => {
  return (
    <Container
      className={`${ProjectsCSS.container} d-flex justify-content-center `}
    >
      {" "}
      <Card style={{ width: "18rem" }} className={`${ProjectsCSS.card}`}>
        <div className={`${ProjectsCSS.face} ${ProjectsCSS.face1}`}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="" alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={`${ProjectsCSS.face} ${ProjectsCSS.face2}`}>
          <Card.Title className={`${ProjectsCSS.title}`}>
            Gym Brochure
          </Card.Title>
          <Card.Text className={`${ProjectsCSS.text}`}>
            <img src="/images/html.PNG" alt="Html icon language" />
            <img src="/images/css.PNG" alt="CSS icon language" />
            <img src="/images/javascript.PNG" alt="JavaScript icon language" />
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
            API's Movies
          </Card.Title>
          <Card.Text className={`${ProjectsCSS.text}`}>
            {" "}
            <img src="/images/react.PNG" alt="React icon framework" />
          </Card.Text>
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
        </div>
      </Card>
    </Container>
  );
};

export default Projects;
