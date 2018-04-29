import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./Logo.css";

export default class Logo extends Component {
  render() {
    return (
      <Image src="/assets/img/logo.png" alt="Teacher's Pet Logo" className="logoImg" />
    );
  }
}