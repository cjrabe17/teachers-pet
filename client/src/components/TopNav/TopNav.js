import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./TopNav.css";

class TopNav extends Component {
  login = () => {
    console.log("Logging in");
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    console.log("Logging out");
    this.props.auth.logout();
  }
  
  render() {
    const { isAuthenticated } = this.props.auth;
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
            <NavDropdown eventKey={1} title="About" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Why Teacher's Pet?</MenuItem>
              <MenuItem eventKey={1.2}>Pricing</MenuItem>
              <MenuItem eventKey={1.3}>Contact Us</MenuItem>
            </NavDropdown>
          </Nav>
          {
            !isAuthenticated() &&
            <Nav pullRight>
              <NavItem eventKey={2} onClick={this.login}>
                Log In
              </NavItem>
              <NavItem eventKey={3} onClick={this.login}>
                Sign Up
              </NavItem>
            </Nav>
          }
          {
            isAuthenticated() &&
            <Nav pullRight>
              <NavItem eventKey={2} onClick={this.logout}>
                Log Out
              </NavItem>
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNav;