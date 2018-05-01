import React, { Component } from "react";
import API from "../../utils/API";
import { Table, Image } from "react-bootstrap";
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
      <div className="container grade-detail">
        {this.state.assignments.length ? (
          <Table bordered condensed hover>
            {this.state.assignments.map(assignment => (
              <thead>
                  <th>{assignment.assignmentName}</th>
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