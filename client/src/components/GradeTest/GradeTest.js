import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class GradeTest extends Components {
  constructor() {
    super();
    this.renderEditable = this.renderEditable.bind(this);
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
        <ReactTable />
      </div>
    );
  }
}