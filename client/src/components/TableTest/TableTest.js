import React, { Component } from "react";
import { render } from "react-dom";
import { makeData} from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import API from "../../utils/API";

class TableTest extends Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
      show: false,
      assignments: [],
      students: []
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

  renderEditable(cellInfo) {
    return (
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
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Full Name",
              id: "full",
              accessor: d =>
                <div
                  dangerouslySetInnerHTML={{
                    __html: d.firstName + " " + d.lastName
                  }}
                />
            },
            {
              Header: "Grade",
              id: "grade",
              accessor: "grade",
              Cell: this.renderEditable
            }
          ]}
          defaultPageSize={100}
          style={{
            height: "600px"
          }}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default TableTest;