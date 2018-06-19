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

  static async xhr(path, params, verb, jwt) {

    const url = `${PROTOCOL}://${DOMAIN}/${path}`;

    const options = {
      headers: this.headers(jwt),
      method: verb
    };

    if (params) {
      options.body = JSON.stringify(params);
    }

    const response = await fetch(url, options);
    const json = await response.json();

    return json;
  }
}

export default Api;
