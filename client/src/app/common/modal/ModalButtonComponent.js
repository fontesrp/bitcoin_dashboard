import React, { Component } from "react";

class ModalButtonComponent extends Component {

  handleCkick() {

    const {
      onClick,
      submit
    } = this.props;

    if (typeof onClick === "function") {
      onClick();
    }

    if (submit) {
      document
        .getElementById("modal-form")
        .dispatchEvent(new Event("submit"));
    }
  }

  render() {

    const {
      primary,
      label
    } = this.props;

    let className = "btn";

    if (primary) {
      className += " btn-primary";
    } else {
      className += " btn-secondary";
    }

    return (
      <button
        type="button"
        className={ className }
        onClick={ this.handleCkick.bind(this) }
      >
        { label }
      </button>
    );
  }
}

export default ModalButtonComponent;
