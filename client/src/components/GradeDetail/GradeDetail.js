import React, { Component } from "react";
import API from "../../utils/API";
import { Table, Button, Modal, FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import "./GradeDetail.css";
import AddAssignmentForm from "../AddAssignmentForm";

class GradeDetail extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      value: "",
      assignments: [],
      students: [],
      assignmentName: "",
      assignmentType: "",
      possiblePts: "",
      extraCredit: "",
      dueDate: "",
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    this.loadGradebook();
    this.loadStudents();
  }

  loadGradebook = () => {
    API.getAssignments()
      .then(res =>
        this.setState({ assignments: res.data, assignmentName: "", assignmentType: "", possiblePts: "", extraCredit: "", dueDate: ""})
      )
      .catch(err => console.log(err));
  };

  loadStudents = () => {
    API.getStudents()
      .then(res => {
        this.setState({ students: res.data, name: ""})
      })
      .catch(err => console.log(err));
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit() {
    
  }

  render() {
    return (
      <div className="container grade-detail">
        {this.state.assignments.length ? (
          <Table bordered condensed hover>
            <thead>
              <th>
                <Button
                  bsStyle="info"
                  onClick={this.handleShow}
                >
                  Add a New Assignment
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add a New Assignment</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form>
                      <FormGroup>
                        <ControlLabel>Assignment Name</ControlLabel>
                        <FormControl 
                          type="text"
                          value={this.state.value}
                          placeholder="Assignment Name"
                          onChange={this.handleChange}
                        />
                        <ControlLabel>Assignment Type</ControlLabel>
                        <FormControl componentClass="select">
                          <option value="Classwork">Classwork</option>
                          <option value="Homework">Homework</option>
                          <option value="Test">Test</option>
                          <option value="Project">Project</option>
                        </FormControl>
                      </FormGroup>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleSubmit}>Save</Button>
                    <Button onClick={this.handleClose}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </th>
              {this.state.assignments.map(assignment => (  
                <th>{assignment.assignmentName}</th>
              ))}
            </thead>
            <tbody>
              {this.state.students.map(student => (
                <tr>
                  <td>{student.name}</td>
                  {student.Assignments.map(assignment => (
                    <td>{assignment.AssignmentStudent.studentScore}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default GradeDetail;