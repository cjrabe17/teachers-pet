import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import AttendanceDetail from "../../components/AttendanceDetail";
import { Link } from "react-router-dom";

class Attendance extends Component {
// stateful stuff

  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <Sidebar />
          <AttendanceDetail />
        </Wrapper>
      </div>
    );
  }
}

export default Attendance;