import React, { Component } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./Hero.css";

export default class Hero extends Component {
  login = () => {
    console.log("Logging in");
    this.props.auth.login();
  }
  
  render() {
    return (
      <Jumbotron className="text-center">
        <h1>Teacher's Pet</h1>
        <h3>A centralized K-12 classroom management solution.</h3>
        <Button
          bsSize="large"
          onClick={this.login}
        >
          Register Now!
        </Button>
      </Jumbotron>
    );
  }
}