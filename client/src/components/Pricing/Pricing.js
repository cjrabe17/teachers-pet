import React, { Component } from "react";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

class Pricing extends Component {
  render() {
    return (
      <div className="text-center">
      <TopNav {...this.props} />
        <h1>Pricing</h1>
        <h4>Teacher's Pet is free!</h4>
        <br/>
        <br/>
        <br/>
        <h5>For now...</h5>
        <Footer />
      </div>
    );
  }
}

export default Pricing;