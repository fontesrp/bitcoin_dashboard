import React from "react";

const TextInputLabelComponent = function (props) {

  const { text, inputId } = props;

  return (
    <label htmlFor={ inputId }>
      { text }
    </label>
  );
};

export default TextInputLabelComponent;
