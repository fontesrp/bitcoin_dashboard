import React from "react";

const ModalButtonComponent = function (props) {

  const {
    primary,
    label,
    onClick
  } = props;

  let className = "btn";

  if (primary) {
    className += " btn-primary";
  } else {
    className += " btn-secondary";
  }

  return (
    <button
      type="button"
      class={ className }
      onClick={ onClick }
    >
      { label }
    </button>
  );
};

export default ModalButtonComponent;
