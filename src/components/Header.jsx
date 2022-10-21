import HeaderCSS from "./Header.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className={`${HeaderCSS.navbar}`}>
      <Container className={`${HeaderCSS.container} d-flex justify-between`}>
        <div>
          <Navbar.Brand href="#home" className={`${HeaderCSS.link}`}>
            Belean Ioan
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto text-uppercase`}>
              <Nav.Link href="#" className={`${HeaderCSS.link}`}>
                <span>H</span>ome
              </Nav.Link>
              <Nav.Link href="#" className={`${HeaderCSS.link}`}>
                <span>A</span>bout Me
              </Nav.Link>
              <Nav.Link href="#" className={`${HeaderCSS.link}`}>
                <span>S</span>kills
              </Nav.Link>
              <Nav.Link href="#" className={`${HeaderCSS.link}`}>
                <span>P</span>rojects
              </Nav.Link>
              <Nav.Link href="#" className={`${HeaderCSS.link}`}>
                <span>C</span>ontacts
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link
                href="/resume/CV.pdf"
                download
                className={`${HeaderCSS.resume}`}
              >
                Download CV
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
