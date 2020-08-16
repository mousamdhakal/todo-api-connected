import axios from 'axios';

const BASE_URL = 'https://rest-api-todo-login.herokuapp.com/api';

export function registerUser(data) {
  data = JSON.parse(data);
  fetch(`${BASE_URL}/auth`, {
    headers: { 'Content-Type': 'text/json; charset=utf-8' },
    method: 'POST',
    body: data,
  })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
  //   axios
  //     .post(`${BASE_URL}/auth`, data, {
  //       headers: {
  //         'content-type': 'text/json',
  //       },
  //     })
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
}
