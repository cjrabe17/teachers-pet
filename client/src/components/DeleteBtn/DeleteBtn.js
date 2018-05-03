import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";

class DeleteBtn extends Component {
  render() {
    return (
      <Button handleDelete={this.props.handleDelete}>
        <Glyphicon glyph="remove" />
      </Button>
    );
  }
}

export default DeleteBtn;