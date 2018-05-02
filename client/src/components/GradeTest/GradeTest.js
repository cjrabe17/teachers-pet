import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import API from "../../utils/API";

class GradeTest extends Component {
  constructor() {
    super();
    this.state = {
      assignments: [],
      students: [],
      assignmentName: "",
      assignmentType: "",
      possiblePts: "",
      extraCredit: "",
      dueDate: ""
    };
    this.renderEditable = this.renderEditable.bind(this);
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

  renderEditable(cellInfo) {
    return(
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          this.setState({ data });
        }}
        dangerouslySetInnerHTML={{
          __html: this.state.data[cellInfo.index][cellInfo.column.id]
        }}
      />
    );
  }

  render() {
    return (
      <div>
        {this.state.assignments.length ? (
          <ReactTable
            columns={[
              {
                Header: "First Name",
                accessor: "firstName",
                Cell: this.renderEditable
              },
              {
                Header: "Last Name",
                accessor: "lastName",
                Cell: this.renderEditable
              },
              {
                Header: "Full Name",
                id: "full",
                accessor: d =>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: d.firstName + " " + d.lastName
                    }}
                  />
              }
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        ) : (
          <h3>No results to display.</h3>
        )}
      </div>
    );
  }
}

export default GradeTest;