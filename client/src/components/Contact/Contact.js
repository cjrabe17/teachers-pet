import React, { Component } from "react";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

class Contact extends Component {
  render() {
    return (
      <div className="text-center">
        <TopNav {...this.props} />
        <h1>Contact Us</h1>
        <h4>Well, you can't just yet.</h4>
        <Footer />
      </div>
    );
  }
}

export default Contact;