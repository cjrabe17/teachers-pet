import React, { Component } from "react";
import { FormControl, FormGroup, Modal, Button } from "react-bootstrap";

class AddAssignmentForm extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return "success";
    else if (length > 5) return "warning";
    else if (length > 0) return "error";
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Add Assignment</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <form>
              <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}  
              >
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Enter text here"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button>Cancel</Button>
            <Button bsStyle="primary">Save</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default AddAssignmentForm;