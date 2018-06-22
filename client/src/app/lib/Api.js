import ActionCable from "action-cable-react-jwt";

const PROTOCOL = "http";
const DOMAIN = "localhost:3000";
const CABLE_PROTOCOL = "ws";
const CABLE_PATH = "cable";
const CABLE_RATES_CHANNEL = "RatesChannel";
const FAKE_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

class Api {

  static headers(jwt) {

    const headers = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    };

    if (jwt) {
      headers["AUTHORIZATION"] = jwt;
    }

    return headers;
  }

  static get(path, jwt) {
    return this.xhr(path, null, "GET", jwt);
  }

  static patch(path, params, jwt) {
    return this.xhr(path, params, "PATCH", jwt);
  }

  static post(path, params, jwt) {
    return this.xhr(path, params, "POST", jwt);
  }

  static delete(path, params, jwt) {
    return this.xhr(path, params, "DELETE", jwt);
  }

  static normalizeError(json) {

    if (json.error == null || Array.isArray(json.error)) {
      return;
    }

    if (typeof json.error === "object") {

      json.error = Object
        .keys(json.error)
        .map(errKey => `${errKey}: ${json.error[errKey]}`);
    } else {
      json.error = [json.error];
    }
  }

  static async xhr(path, params, verb, jwt) {

    const url = `${PROTOCOL}://${DOMAIN}/${path}`;

    const options = {
      headers: this.headers(jwt),
      method: verb
    };

    if (params) {
      options.body = JSON.stringify(params);
    }

    let json;

    try {
      const response = await fetch(url, options);
      json = await response.json();
    } catch (e) {
      console.error("Api xhr", e);
      json = { error: ["Api error"] };
    }

    this.normalizeError(json);

    return json;
  }

  static createCable(jwt) {

    const apiJwt = (!!jwt) ? jwt : FAKE_JWT;

    return ActionCable.createConsumer(`${CABLE_PROTOCOL}://${DOMAIN}/${CABLE_PATH}`, apiJwt);
  }

  static subscribe(cable, callbacks) {

    const rates = cable.subscriptions.create(CABLE_RATES_CHANNEL, {
      received: callbacks.onRatesReceived
    });

    return {
      rates
    };
  }
}

export default Api;
