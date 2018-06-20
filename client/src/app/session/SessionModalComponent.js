import React, { Component } from "react";

import ModalComponent from "../common/modal/ModalComponent";

class SessionModalComponent extends Component {

  getFormData() {

    const form = document.getElementById("modal-form");

    if (!form.reportValidity()) {
      form.dispatchEvent(new Event("submit"));
      return;
    }

    return new FormData(form);
  }

  onSignIn(data) {

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

  onSignUp(data) {
    return function () {};
  }

  onSearch(data) {

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
    let onSubmit;
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
          submit: true,
          primary: true
        }
      ];

      onSubmit = this.onSearch.bind(this);
    } else if (emailFound) {

      title = "Sign in";

      buttons = [
        {
          label: "Back",
          onClick: resetSearch
        }, {
          label: "Sign in",
          submit: true,
          primary: true
        }
      ];

      onSubmit = this.onSignIn.bind(this);

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
          submit: true,
          primary: true
        }
      ];

      onSubmit = this.onSignUp.bind(this);

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
      <ModalComponent
        id="sessionModal"
        title={ title }
        fields={ fields }
        error={ error }
        buttons={ buttons }
        onSubmit={ onSubmit }
      />
    );
  }
}

export default SessionModalComponent;
