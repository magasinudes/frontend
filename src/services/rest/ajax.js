import axios from "axios";

class Ajax {
  buildRequest(method, url, params, data) {
    return {
      method,
      url,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      params,
      data,
    };
  }

  get(route, params) {
    return axios.request(this.buildRequest("GET", route, params));
  }

  post(route, params, data) {
    return axios.request(this.buildRequest("POST", route, params, data));
  }

  put(route, params, data) {
    return axios.request(this.buildRequest("PUT", route, params, data));
  }

  delete(route, params, data) {
    return axios.request(this.buildRequest("DELETE", route, params, data));
  }
}

export default new Ajax();
