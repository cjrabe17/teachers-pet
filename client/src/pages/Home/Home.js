import React, { Component } from "react";
import Hero from "../../components/Hero";
import Logo from "../../components/Logo";
import TopNav from "../../components/TopNav";

class Home extends Component {
  render() {
    return (
      <div>
        <Logo />
        <TopNav />
        <Hero />
      </div>
    );
  }
}

export default Home;