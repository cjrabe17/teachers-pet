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
      .then(res => {
        this.setState({ students: res.data, name: ""})
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container grade-detail">
        {this.state.assignments.length ? (
          <Table bordered condensed hover>
            <thead>
              <th></th>
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