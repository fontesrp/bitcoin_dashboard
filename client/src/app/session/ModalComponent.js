import React, { Component } from "react";
import $ from "jquery";

import ModalButtonComponent from "./ModalButtonComponent";
import ModalFormComponent from "./ModalFormComponent";

class ModalComponent extends Component {

  componentWillUnmount() {
    $("#sessionModal").modal("hide");
  }

  getFormData() {

    const form = document.getElementById("modal-form");

    if (!form.reportValidity()) {
      form.dispatchEvent(new Event("submit"));
      return;
    }

    return new FormData(form);
  }

  onSignIn() {

    const data = this.getFormData();

    if (data === undefined) {
      return;
    }

    const email = data.get("email");
    const password = data.get("password");

    this.props.signIn({
      email,
      password
    });
  }

  onSignUp() {
    return function () {};
  }

  onSearch(searchEmail) {

    const data = this.getFormData();

    if (data === undefined) {
      return;
    }

    const email = data.get("email");

    this.props.searchEmail(email);
  }

  render() {

    const {
      emailSearched,
      userFullName,
      userEmail,
      resetSearch,
      error
    } = this.props;

    const emailFound = (!!userFullName);

    let title;
    let buttons;
    let fields = [
      {
        label: "Email",
        name: "email",
        type: "email",
        placeholder: "js@winterfell.gov",
        required: true
      }
    ];

    if (!emailSearched) {

      title = "Welcome to Bitcoin Dashboard";

      buttons = [
        {
          label: "Continue",
          onClick: this.onSearch.bind(this),
          primary: true
        }
      ];
    } else if (emailFound) {

      title = "Sign in";

      buttons = [
        {
          label: "Back",
          onClick: resetSearch
        }, {
          label: "Sign in",
          onClick: this.onSignIn.bind(this),
          primary: true
        }
      ];

      fields[0].readonly = true;
      fields[0].value = userEmail;
      fields.push({
        label: "Password",
        name: "password",
        type: "password",
        required: true
      });
    } else {

      title = "Sign up";

      buttons = [
        {
          label: "Back",
          onClick: resetSearch
        }, {
          label: "Sign up",
          onClick: this.onSignUp.bind(this),
          primary: true
        }
      ];

      fields[0].readonly = true;
      fields[0].value = userEmail;
      fields = fields.concat([
        {
          label: "First name",
          name: "first_name",
          placeholder: "Jon",
          required: true,
          halfWidth: true
        }, {
          label: "Last name",
          name: "last_name",
          placeholder: "Snow",
          required: true,
          halfWidth: true
        }, {
          label: "Password",
          name: "password",
          type: "password",
          required: true
        }, {
          label: "Confirm password",
          name: "password_confirmation",
          type: "password",
          required: true
        }
      ]);
    }

    return (
      <div className="modal" id="sessionModal" tabIndex="-1" role="dialog">
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
