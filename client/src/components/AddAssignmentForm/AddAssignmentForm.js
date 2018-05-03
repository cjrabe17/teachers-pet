import React, { Component } from "react";
import { FormControl, FormGroup, Modal, Button, ControlLabel, Glyphicon } from "react-bootstrap";

class AddAssignmentForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      show: false,
      value: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("Assignment name: " + this.state.value);
    this.handleClose();
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="info"
          onClick={this.handleShow}
        >
          <Glyphicon glyph="plus" />
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Add a New Assignment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Assignment Name</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <ControlLabel>Assignment Type</ControlLabel>
                <FormControl
                  componentClass="select"
                  value={this.state.assignmentType}
                  onChange={this.handleChange}
                >
                  <option value="Classwork">Classwork</option>
                  <option value="Homework">Homework</option>
                  <option value="Test">Test</option>
                  <option value="Project">Project</option>
                </FormControl>
                <ControlLabel>Points Possible</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.possiblePts}
                  onChange={this.handleChange}                  
                />
                <ControlLabel>Extra Credit</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.extraCredit}
                  onChange={this.handleChange}                  
                />
                <ControlLabel>Due Date</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.dueDate}
                  placeholder="2018-05-03"
                  onChange={this.handleChange}                  
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit}>Save</Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddAssignmentForm;