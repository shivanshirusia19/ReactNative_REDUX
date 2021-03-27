import {GET_DATA} from './types';

const initialState = {
  data: '',
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
