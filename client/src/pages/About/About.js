import React, { Component } from "react";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

class About extends Component {
  render() {
    return (
      <div className="text-center">
        <TopNav {...this.props} />
        <h1>Why Teacher's Pet?</h1>
        <h4>Teacher's Pet is an all-in-one classroom management system built for teachers by a teacher.</h4>
        <Footer />
      </div>
    );
  }
}

export default About;