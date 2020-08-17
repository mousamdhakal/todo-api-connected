import axios from 'axios';

const BASE_URL = 'https://rest-api-todo-login.herokuapp.com/api';

export function registerUser(data, callBack) {
  axios
    .post(`${BASE_URL}/auth`, data, {
      headers: {
        'content-type': 'application/json',
      },
    })
    // .then((res) => res.json())
    .then((res) => callBack(res.data))
    .catch((error) => callBack(error.response.data));
}

export function loginUser(data, onSuccess, onFailure) {
  axios
    .post(`${BASE_URL}/auth/login`, data, {
      headers: {
        'content-type': 'application/json',
      },
    })
    // .then((res) => res.json())
    .then((res) => onSuccess(res.data))
    .catch((error) => onFailure(error.response.data));
}

export function getAllTodo(callBack) {
  axios
    .get(`${BASE_URL}/todo`)
    .then((res) => callBack(res.data.data))
    .catch((err) => console.log(err));
}

export function addTodo(data, callBack) {
  axios
    .post(`${BASE_URL}/todo`, data, {
      headers: {
        'content-type': 'application/json',
      },
    })
    // .then((res) => res.json())
    .then((res) => callBack(res.data.data))
    .catch((error) => console.log(error));
}

export function updateTodo(data, callBack) {
  axios
    .put(`${BASE_URL}/todo`, data, {
      headers: {
        'content-type': 'application/json',
      },
    })
    // .then((res) => res.json())
    .then((res) => callBack(res.data))
    .catch((error) => console.log(error));
}

export function deleteTodo(data, callBack) {
  axios
    .delete(`${BASE_URL}/todo`, {
      headers: {
        'content-type': 'application/json',
      },
      data,
    })
    // .then((res) => res.json())
    .then((res) => callBack(res.data))
    .catch((error) => console.log(error));
}
