import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <p>&copy; Copyright <a href="https://github.com/cjrabe17" target="_blank">Cassie Rabe</a></p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;