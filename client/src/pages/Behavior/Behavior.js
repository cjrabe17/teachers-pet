import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import Nav from "../../components/Nav";
import Sidebar from "../../components/Sidebar";
import BehaviorDetail from "../../components/BehaviorDetail";

class Behavior extends Component {
// stateful stuff

  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <Sidebar />
          <BehaviorDetail />
        </Wrapper>
      </div>
    );
  }
}

export default Behavior;