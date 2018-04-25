import React, { Component } from "react";
import Logo from "../../components/Logo";
import TopNav from "../../components/TopNav";
import SignupForm from "../../components/SignupForm";

class SignUp extends Component {
  render() {
    return (
      <div>
        <Logo />
        <TopNav />
        <SignupForm />
      </div>
    );
  }
}

export default SignUp;