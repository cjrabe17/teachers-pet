import React, { Component } from "react";
import { Table, Glyphicon } from "react-bootstrap";
import "./GradeDetail.css";
import AddAssignmentForm from "../AddAssignmentForm";
import DeleteBtn from "../DeleteBtn";
import API from "../../utils/API";

class GradeDetail extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      assignments: [],
      students: []
    };
  }

  componentDidMount() {
    this.loadGradebook();
    this.loadStudents();
  }

  loadGradebook = () => {
    API.getAssignments()
      .then(res =>
        this.setState({ assignments: res.data })
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

  handleDelete = (id) => {
    console.log("deleting" + id);
    API.deleteAssignment(id)
      .then(res => {
        this.setState({ assignments: res.data })
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
                  <th>{assignment.assignmentName} <DeleteBtn key={assignment.id} id={assignment.id} onClick={this.handleDelete} /></th>
                ))}
                {/* <th>Grade <Glyphicon glyph="apple" /></th> */}
              </tr>
            </thead>
            <tbody>
              {this.state.students.map(student => (
                <tr>
                  <td key={student.id}>{student.name}</td>
                  {student.Assignments.map(assignment => (
                    <td key={student.AssignmentStudent}>{assignment.AssignmentStudent.studentScore}</td>
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