import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/Header.css";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="../app-logo.png"
              alt="Logo"
              style={{ width: "100px", height: "auto" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link className="nav-link" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" as={Link} to="/cart">
                Cart <span className="badge">{cartCount}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
