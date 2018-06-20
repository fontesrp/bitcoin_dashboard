import React, { Component } from "react";

import TextInputComponent from "../textInput/TextInputComponent";

class ModalFormComponent extends Component {

  handleSubmit(evt) {

    evt.preventDefault();

    const { onSubmit } = this.props;

    const form = evt.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    if (typeof onSubmit === "function") {
      onSubmit(new FormData(form));
    }
  }

  render() {

    const { fields, error } = this.props;

    return (
      <form id="modal-form" onSubmit={ this.handleSubmit.bind(this) }>
        <div className="form-errors">
          <ul>
            { error
              .filter(err => err !== "not found")
              .map((err, idx) => (
                <li key={ idx }>{ err }</li>
              ))
            }
          </ul>
        </div>
        { fields
          .map(fld => (
            <TextInputComponent key={ fld.name } { ...fld } />
          ))
        }
      </form>
    );
  }
};

export default ModalFormComponent;
