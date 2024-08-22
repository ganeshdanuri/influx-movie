import { useState } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import { navItems } from "../Utils/constants";

const FixedNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BootstrapNavbar
      data-bs-theme="dark"
      expand="sm"
      expanded={expanded}
      fixed="top"
      className="nav-bar-container"
    >
      <Container fluid className="justify-content-end">
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        >
          <img src="./Assets/Home.svg" alt="Home" />
        </BootstrapNavbar.Toggle>
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map(({ label }, i) => {
              return (
                <Nav.Link href="#home" key={label + i}>
                  <a
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {label}
                  </a>
                </Nav.Link>
              );
            })}
          </Nav>
          <button className="sign-in-button">SIGN IN</button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default FixedNavbar;
