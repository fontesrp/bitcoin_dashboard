import React, { Component } from "react";

import "./TextInput.css";
import TextInputLabelComponent from "./TextInputLabelComponent";

class TextInputComponent extends Component {

  constructor(props) {

    super(props);

    if (props.value !== undefined) {
      this.state = {
        value: props.value
      };
    }
  }

  handleInput(evt) {

    const { onInput = () => {} } = this.props;
    const input = evt.currentTarget;

    let newVal = onInput(input.value);

    if (newVal !== undefined) {
      input.value = newVal;
    } else {
      newVal = input.value;
    }

    if (this.state && this.state.value !== undefined) {
      this.setState({
        value: newVal
      });
    }
  }

  render() {

    const {
      label = "",
      type = "text",
      maxLength = null,
      name = null,
      placeholder = null,
      required = false,
      style = {},
      pattern = null,
      readonly = false
    } = this.props;

    let value = undefined;

    if (this.state && this.state.value !== "") {
      value = this.state.value;
    }

    return (
      <div className="form-group" >
        <TextInputLabelComponent
          text={ label }
          inputId={ name }
        />
        <input
          className="form-control"
          type={ type }
          id={ name }
          name={ name }
          placeholder={ placeholder }
          maxLength={ maxLength }
          required={ required }
          style={ style }
          onInput={ this.handleInput.bind(this) }
          pattern={ pattern }
          value={ value }
          readOnly={ readonly }
        />
      </div>
    );
  }
}

export default TextInputComponent;
