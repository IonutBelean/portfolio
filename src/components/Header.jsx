import HeaderCSS from "./Header.module.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const handleHideNav = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", handleHideNav);

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      className={navbar ? `${HeaderCSS.navbar_hidden}` : `${HeaderCSS.navbar}`}
    >
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
          <Nav className={`${HeaderCSS.links}`}>
            <Nav.Link href="#home" className={`${HeaderCSS.link}`} eventKey="1">
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
