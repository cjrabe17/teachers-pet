import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import GradebookDetail from "../../components/GradebookDetail";
import { Link } from "react-router-dom";

class Grades extends Component {
// stateful stuff

  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <Sidebar />
          <GradebookDetail />
        </Wrapper>
      </div>
    );
  }
}

export default Grades;