import React, { Component } from "react";
import { FormControl, FormGroup, Modal, Button, ControlLabel, Glyphicon } from "react-bootstrap";
import API from "../../utils/API";

class AddAssignmentForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      show: false,
      assignment: {
        assignmentName: "",
        assignmentType: "",
        possiblePts: "",
        extraCredit: "",
        dueDate: ""
      }
    };
  }

  handleClose() {
    this.setState({ show: false });
    // re-render the GradeDetail component
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(propertyName, event) {
    const assignment = this.state.assignment;
    assignment[propertyName] = event.target.value;
    this.setState({ assignment: assignment });
  }

  handleSubmit(event) {
    event.preventDefault();
    API.saveAssignment(this.state.assignment);
    console.log(this.state.assignment);
    this.handleClose();
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="info"
          onClick={this.handleShow}
        >
          Add Assignment <Glyphicon glyph="plus" />
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Add a New Assignment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Assignment Name*</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange.bind(this, 'assignmentName')}
                />
                <ControlLabel>Assignment Type*</ControlLabel>
                <FormControl
                  componentClass="select"
                  value={this.state.assignmentType}
                  onChange={this.handleChange.bind(this, 'assignmentType')}
                >
                  <option value=""></option>
                  <option value="Classwork">Classwork</option>
                  <option value="Homework">Homework</option>
                  <option value="Test">Test</option>
                  <option value="Project">Project</option>
                </FormControl>
                <ControlLabel>Points Possible*</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.possiblePts}
                  onChange={this.handleChange.bind(this, 'possiblePts')}
                />
                <ControlLabel>Extra Credit</ControlLabel>
                <FormControl 
                  type="text"
                  value={this.state.extraCredit}
                  onChange={this.handleChange.bind(this, 'extraCredit')}
                />
                <ControlLabel>Due Date*</ControlLabel>
                <FormControl 
                  type="date"
                  placeholder="YYYY-MM-DD"
                  value={this.state.dueDate}
                  onChange={this.handleChange.bind(this, 'dueDate')}
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