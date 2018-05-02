import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer text-center">
        <div className="row">
          <p>&copy; Copyright <a href="https://github.com/cjrabe17" rel="noopener noreferrer" target="_blank">Cassie Rabe</a></p>
        </div>
      </footer>
    );
  }
}

export default Footer;