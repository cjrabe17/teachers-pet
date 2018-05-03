import React, { Component } from "react";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

class Profile extends Component {
  render() {
    return (
      <div className="text-center">
        <TopNav {...this.props} />
        <h1>Profile</h1>
        <h4>Coming soon.</h4>
        <Footer />
      </div>
    );
  }
}

export default Profile;