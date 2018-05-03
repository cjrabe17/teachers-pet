import React, { Component } from "react";
import API from "../../utils/API";
import { Table } from "react-bootstrap";
import "./GradeDetail.css";
import AddAssignmentForm from "../AddAssignmentForm";
import DeleteBtn from "../DeleteBtn";

class GradeDetail extends Component {
  state = {
    assignments: [],
    students: [],
    assignmentName: "",
    assignmentType: "",
    possiblePts: "",
    extraCredit: "",
    dueDate: ""
    };

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
              <tr>
                <th><AddAssignmentForm /></th>
                {this.state.assignments.map(assignment => (  
                  <th key={assignment.id}>{assignment.assignmentName}  <DeleteBtn /></th>
                ))}
              </tr>
            </thead>
            <tbody>
              {this.state.students.map(student => (
                <tr>
                  <td key={student.id}>{student.name}</td>
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