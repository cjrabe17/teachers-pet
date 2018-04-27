import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Hero.css";

export default class Hero extends Component {
  render() {
    return (
      <Jumbotron className="text-center">
        <h1>Teacher's Pet</h1>
        <h3>A centralized K-12 classroom management solution.</h3>
        <Button
          bsSize="large"
        >
          <Link to="/signup">
            Register Now!
          </Link>
        </Button>
      </Jumbotron>
    );
  }
}