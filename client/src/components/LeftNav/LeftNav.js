import React, { Component } from "react";
import { Nav, NavItem } from "react-bootstrap";
import "./LeftNav.css";

class LeftNav extends Component {
  render() {
    return (
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
      </Nav>
    );
  }
}

export default LeftNav;