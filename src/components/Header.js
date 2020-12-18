import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import React from 'react';

import { LinkContainer } from "react-router-bootstrap";
import '../styles/App.css';

import Routes from "../Routes";
function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand >COVID-Board
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={window.location.pathname} className="mr-auto">


            {/* <NavDropdown title="Charts" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Chart 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Chart 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Chart 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
            <LinkContainer to="/chart1">
              <Nav.Link >Chart 1</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chart2">
              <Nav.Link >Chart 2</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/chart3">
              <Nav.Link >Chart 3</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link >About</Nav.Link>
            </LinkContainer>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>

  );
}

export default Header; 