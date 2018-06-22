import React, { Component } from "react";
import $ from "jquery";

import ModalButtonComponent from "./ModalButtonComponent";
import ModalFormComponent from "./ModalFormComponent";

class ModalComponent extends Component {

  componentWillUnmount() {
    $(`#${this.props.id}`).modal("hide");
  }

  render() {

    const {
      id,
      title,
      fields,
      error,
      buttons,
      onSubmit
    } = this.props;

    return (
      <div className="modal" id={ id } tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{ title }</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ModalFormComponent
                fields={ fields }
                error={ error }
                onSubmit={ onSubmit }
              />
            </div>
            <div className="modal-footer">
              { buttons
                .map((btn, idx) => (
                  <ModalButtonComponent key={ idx } { ...btn } />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalComponent;
