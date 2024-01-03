import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default class ApiCaller {
  static Get = (url = '', headers = {}, params = {}) =>
    axios
      .get(BASE_URL + url, {
        params: params,
        headers: {'Content-Type': 'application/json', ...headers},
      })
      .then(res => res)
      .catch(err => err.response);

  static Post = async (url = '', body = {}, headers = {}) => {
    console.log(BASE_URL + url, body);
    return axios
      .post(BASE_URL + url, body, {
        headers: {...headers},
      })
      .then(res => res)
      .catch(err => err);
  };

  static Put = (url = '', body = {}, headers = {}) =>
    axios
      .put(BASE_URL + url, body, {
        headers: {'Content-Type': 'application/json', ...headers},
      })
      .then(res => res)
      .catch(err => err.response);

  static Patch = (url = '', body = {}, headers = {}) =>
    axios
      .patch(BASE_URL + url, body, {
        headers: {'Content-Type': 'application/json', ...headers},
      })
      .then(res => res)
      .catch(err => err.response);

  static Delete = (url = '', body = {}, headers = {}) =>
    axios
      .delete(BASE_URL + url, {
        headers: {...headers},
        data: body,
      })
      .then(res => res)
      .catch(err => err.response);
}
