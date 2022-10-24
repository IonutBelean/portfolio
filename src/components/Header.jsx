import HeaderCSS from "./Header.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className={`${HeaderCSS.navbar}`}>
      <Container className={`${HeaderCSS.container} d-flex justify-between`}>
        <div>
          <Navbar.Brand href="#home" className={`${HeaderCSS.link}`}>
            Ioan Belean
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto text-uppercase`}>
              <Nav.Link href="#" className={`${HeaderCSS.link}`}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" className={`${HeaderCSS.link}`}>
                About
              </Nav.Link>
              <Nav.Link href="#skills" className={`${HeaderCSS.link}`}>
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" className={`${HeaderCSS.link}`}>
                Projects
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
