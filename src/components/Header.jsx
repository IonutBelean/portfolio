import HeaderCSS from "./Header.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={`${HeaderCSS.navbar} `}>
      <Container className={`${HeaderCSS.container} `}>
        <Navbar.Brand href="#home" className={`${HeaderCSS.logo} `}>
          <img src="/images/logo.png" alt="My logo." />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`${HeaderCSS.show} `}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${HeaderCSS.collapse} `}
        >
          <Nav className={`${HeaderCSS.collapse}`}>
            <Nav.Link href="#" className={`${HeaderCSS.link}`} eventKey="1">
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={`${HeaderCSS.link}`}
              eventKey="2"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`${HeaderCSS.link}`}
              eventKey="3"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`${HeaderCSS.link}`}
              eventKey="4"
            >
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
