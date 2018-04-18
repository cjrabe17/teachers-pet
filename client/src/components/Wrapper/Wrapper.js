import React from "react";
import "./Wrapper.css";

const Wrapper = props => {
  return (
    <div class="container-fluid">
      <div class="row">
        {props.children}
      </div>
    </div>
  );
}

export default Wrapper;