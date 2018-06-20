import React, { Component } from "react";

import ModalComponent from "../common/ModalComponent";

class CurrenciesComponent extends Component {

  onSave() {

    const checkboxes = document.querySelectorAll("#currencies-modal modal-form input[type=checkbox]");

    const selection = Array
      .from(checkboxes)
      .map(chk => ({
        id: chk.id,
        checked: chk.checked
      }));

    // send PATCH to /users/:user_id/user_currencies
  }

  render() {

    const {
      availableCurrencies,
      userCurrencies
    } = this.props;

    const currencies = availableCurrencies
      .map(curr => ({
        label: curr.symbol,
        type: "checkbox",
        name: curr.id,
        checked: (userCurrencies.find(usrCurr => usrCurr.id === curr.id) !== undefined)
      }));

    const buttons = [
      {
        label: "Save",
        primary: true,
        submit: true
      }
    ];

    return (
      <ModalComponent
        id="currencies-modal"
        title="Select currencies"
        fields={ currencies }
        buttons={ buttons }
        onSubmit={ this.onSave.bind(this) }
      />
    );
  }
}

export default CurrenciesComponent;
