import React from "react";

import TextInputComponent from "../common/textInput/TextInputComponent";

const onSubmit = function (evt) {
  evt.preventDefault();
};

const ModalFormComponent = function (props) {

  const { fields, error } = props;

  return (
    <form id="modal-form" onSubmit={ onSubmit }>
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
};

export default ModalFormComponent;
