import React, { Component } from "react";
import Logo from "../../components/Logo";
import TopNav from "../../components/TopNav";
import GradeDetail from "../../components/GradeDetail";

class GradebookView extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <GradeDetail />
        <Logo />
      </div>
    );
  }
}

export default GradebookView;