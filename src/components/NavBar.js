import React from "react";
import {Navbar, Container,Nav} from "react-bootstrap";
import {Link  } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
    {/* <Container fluid>  */}
      <Navbar
        // bg="dark"
        expand="lg"
        // variant="dark"
        className="shadow p-3 mb-4 rounded"
        id="navbarHead"
      >
        <Container fluid>
          <Navbar.Brand className="ml-1 navbarBrand">
            <Link to="/"> QUCOON PAYMENT </Link>   
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </Container> */}
    </React.Fragment>      
  );
};

export default NavBar;
