import React, { Component } from "react";
import API from "../../utils/API";
import { Table } from "react-bootstrap";
import "./GradeDetail.css";

class GradeDetail extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      assignments: [],
      students: [],
      assignmentName: "",
      assignmentType: "",
      possiblePts: "",
      extraCredit: "",
      dueDate: ""
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
      .then(res =>
        this.setState({ students: res.data, name: "", dateOfBirth: ""})
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container column">
        {this.state.assignments.length ? (
          <Table bordered condensed hover>
            {this.state.assignments.map(assignment => (
              <thead>
                <tr>
                  <th>{assignment.assignmentName}</th>
                </tr>
              </thead>
            ))}
          </Table>
        ) : (
          <h3>No Results to Display</h3>
        )}
        {this.state.students.length ? (
          <Table bordered condensed hover>
            {this.state.students.map(student => (
              <thead>
                <tr>
                  <th>{student.name}</th>
                  <th>{student.dateOfBirth}</th>
                </tr>
              </thead>
            ))}
          </Table>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    );
  }
}

export default GradeDetail;