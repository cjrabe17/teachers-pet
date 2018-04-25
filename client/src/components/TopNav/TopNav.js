import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export default class TopNav extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Teacher's Pet</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/signin">
              Log In
            </NavItem>
            <NavItem eventKey={2} href="/signup">
              Sign Up
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/contact">
              Contact Us
            </NavItem>
            <NavDropdown eventKey={3} title="About" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>About Us</MenuItem>
              <MenuItem eventKey={3.2}>Pricing</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}