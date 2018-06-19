import React from "react";

import ModalButtonComponent from "./ModalButtonComponent";
import TextInputComponent from "../common/textInput/TextInputComponent";

const onSignIn = function (signIn) {
  return function () {};
};

const onSignUp = function (signUp) {
  return function () {};
};

const ModalComponent = function (props) {

  const {
    emailSearched,
    userFullName,
    searchEmail,
    signIn,
    signUp,
    resetSearch
  } = props;

  const emailFound = (!!userFullName);

  let title;
  let buttons;
  let fields = [
    {
      label: "Email",
      name: "email",
      placeholder: "js@winterfell.gov",
      required: true
    }
  ];

  if (!emailSearched) {

    title = "Welcome to Bitcoin Dashboard";

    buttons = [
      {
        label: "Continue",
        onClick: searchEmail,
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
        onClick: onSignIn(signIn),
        primary: true
      }
    ];

    fields[0].enabled = false;
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
        onClick: onSignUp(signUp),
        primary: true
      }
    ];

    fields[0].enabled = false;
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
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{ title }</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form id="modal-form">
              { fields
                .map(fld => (
                  <TextInputComponent key={ fld.name } { ...fld } />
                ))
              }
            </form>
          </div>
          <div class="modal-footer">
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
};

export default ModalComponent;
