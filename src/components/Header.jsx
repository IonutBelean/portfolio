import HeaderCSS from "./Header.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className={`${HeaderCSS.navbar} `}>
      <Container className={`${HeaderCSS.container} `}>
        <Navbar.Brand href="#home" className={`${HeaderCSS.logo} `}>
          <img src="/images/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={`${HeaderCSS.show} `}
        />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${HeaderCSS.collapse} ${HeaderCSS.show}`}
        >
          <Nav className={`${HeaderCSS.collapse}`}>
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
      </Container>
    </Navbar>
  );
};

export default Header;
