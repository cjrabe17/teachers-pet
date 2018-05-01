import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import "./TopNav.css";

class TopNav extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      isOpen: false
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }
  login = () => {
    this.props.auth.login();
  }
  // calls the logout method in authentication service
  logout = () => {
    this.props.auth.logout();
  }
  
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        {
          !isAuthenticated() &&
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/home">Teacher's Pet</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
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
            </Navbar.Collapse>
          </Navbar>
        }
        {
          isAuthenticated() &&
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/home">Teacher's Pet</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullLeft>
                <NavDropdown
                  eventKey={1}
                  title="Period 1"
                  onMouseEnter = { this.handleOpen }
                  onMouseLeave = { this.handleClose }
                  open={ this.state.isOpen }
                  noCaret
                  id="language-switcher-container"
                >
                  <MenuItem eventKey={1.1}>Gradebook</MenuItem>
                  <MenuItem eventKey={1.2}>Attendance</MenuItem>
                  <MenuItem eventKey={1.3}>Behavior</MenuItem>
                  <MenuItem eventKey={1.4}>Students</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavDropdown
                  eventKey={1}
                  title={
                    <span><i className="fa fa-cog fa-lg"></i></span>
                  }
                  noCaret
                  id="nav-dropdown"
                >
                  <MenuItem eventKey={1.1} href="/profile">Profile</MenuItem>
                  <MenuItem eventKey={1.2} onClick={this.logout}>Log Out</MenuItem>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        }
      </div>
    );
  }
}

export default TopNav;