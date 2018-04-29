import React, { Component } from "react";
import API from "../../utils/API";
import { Table, Button } from "react-bootstrap";
import "./GradeDetail.css";

class GradeDetail extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      assignments: [],
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
  }

  loadGradebook = () => {
    API.getAssignments()
      .then(res =>
        this.setState({ assignments: res.data, assignmentName: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container column">
        {this.state.assignments.length ? (
          <Table bordered condensed hover>
            <thead>
              <tr>
                <th>Assignment Name</th>
                <th>Assignment Type</th>
                <th>Possible Points</th>
                <th>Extra Credit</th>
                <th>Due Date</th>
              </tr>
            </thead>
            {this.state.assignments.map(assignment => (
                <tbody>
                  <tr>
                    <td>{assignment.assignmentName}</td>
                    <td>{assignment.assignmentType}</td>
                    <td>{assignment.possiblePts}</td>
                    <td>{assignment.extraCredit}</td>
                    <td>{assignment.dueDate}</td>
                  </tr>
                </tbody>
            ))}
          </Table>
        ) : (
          <h4>No grades to display yet.</h4>
        )}
        <Button bsStyle="primary" bsSize="med" onClick={this.handleShow}>
          Add New Assignment
        </Button>
      </div>
    );
  }
}

export default GradeDetail;