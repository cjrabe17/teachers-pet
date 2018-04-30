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
    console.log(this.props);
    return (
      <div>
        {
          !isAuthenticated() &&
          <Navbar inverse>
            <Navbar.Brand>
              <Link to="/">Teacher's Pet</Link>
            </Navbar.Brand>
            <Nav pullLeft>
              <NavItem eventKey={1} href="/about">Why Teacher's Pet?</NavItem>
              <NavItem eventKey={2} href="/pricing">Pricing</NavItem>
              <NavItem eventKey={3} href="/contact">Contact Us</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={2} onClick={this.login}>
                Log In
              </NavItem>
              <NavItem eventKey={3} onClick={this.login}>
                Sign Up
              </NavItem>
            </Nav>
          </Navbar>
        }
        {
          isAuthenticated() &&
          <Navbar inverse>
            <Navbar.Brand>
              <Link to="/">Teacher's Pet</Link>
            </Navbar.Brand>
            <Nav pullLeft>
              <MenuItem>Period 1</MenuItem>
            </Nav>
            <Nav pullRight>
              <NavDropdown
                eventKey={1}
                title={
                  <span><i className="fa fa-cog fa-lg"></i></span>
                }
                id="nav-dropdown"
              >
                <MenuItem eventKey={1.2} onClick={this.logout}>Log Out</MenuItem>
              </NavDropdown>
          </Nav>
        </Navbar>
        }
      </div>
    );
  }
}

export default TopNav;