import React, { Component } from "react";
import Login from "../../components/Login";
import Logo from "../../components/Logo";
import TopNav from "../../components/TopNav";

class SignIn extends Component {
  render() {
    return (
      <div>
        <Logo />
        <TopNav />
        <Login />
      </div>
    );
  }
}

export default SignIn;