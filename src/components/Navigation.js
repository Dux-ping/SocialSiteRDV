import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand className="Title" href="/#/home">
          HI5
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="Navbar-text" href="/#/home">
              Feed
            </Nav.Link>
            <Nav.Link className="Navbar-text" href="/#/newpost">
              Post
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
