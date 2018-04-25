import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

export default class Hero extends Component {
  render() {
    return (
      <Jumbotron className="text-center">
        <h1>Teacher's Pet</h1>
      </Jumbotron>
    );
  }
}