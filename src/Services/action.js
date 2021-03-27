import {GET_DATA, ADD_DATA, UPDATE_DATA, DELETE_DATA} from './types';

export const get_data = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
  const res_json = await response.json();

  dispatch({
    type: GET_DATA,
    data: res_json,
  });
};

export const add_data = (title, body) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

export const update_data = (id, title, body) => (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id,
      title,
      body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
};

export const delete_data = (id) => async (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  })
    .then(() => console.log('Deleted Successfully'))
    .catch((err) => console.log(err));
};
