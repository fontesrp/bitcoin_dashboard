const PROTOCOL = "http";
const DOMAIN = "localhost:3000";

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
}

export default Api;
