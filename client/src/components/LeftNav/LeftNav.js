import React, { Component } from "react";
import { Nav, NavItem, Image } from "react-bootstrap";
import "./LeftNav.css";

class LeftNav extends Component {
  render() {
    return (
      <div className="leftNavContainer">
        <Nav stacked pullLeft activeKey={1} className="text-center">
          <NavItem eventKey={1}>
            Gradebook
          </NavItem>
          <NavItem eventKey={2}>
            Attendance
          </NavItem>
          <NavItem eventKey={3}>
            Behavior
          </NavItem>
          <Image src="/assets/img/logo2.png" alt="Teacher's Pet Logo" className="sidebarLogo" />
        </Nav>
      </div>
    );
  }
}

export default LeftNav;