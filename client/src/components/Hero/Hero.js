import React, { Component } from "react";
import { Jumbotron, Button, Image } from "react-bootstrap";
import "./Hero.css";

export default class Hero extends Component {
  login = () => {
    this.props.auth.login();
  }
  
  render() {
    return (
      <Jumbotron className="text-center jumbotron-fluid">
        <div className="container">
          <h1>Teacher's Pet</h1>
          <h3>A centralized K-12 classroom management solution.</h3>
          <Image src="/assets/img/logo.png" alt="Teacher's Pet Logo" className="logoImg" />
          <br />
          <br />
          <Button
            bsSize="large"
            onClick={this.login}
          >
            Register Now!
          </Button>
        </div>
      </Jumbotron>
    );
  }
}