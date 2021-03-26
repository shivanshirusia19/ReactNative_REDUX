import ActionTypes from './types';

export const increaseCount = () => {
  return {
    type: ActionTypes.INCREASE_COUNT,
  };
};

export const decreaseCount = () => {
  return {
    type: ActionTypes.DECREASE_COUNT,
  };
};

export const increaseByValue = (value) => {
  return {
    type: ActionTypes.INCREMENT_BY_VALUE,
    payload: value,
  };
};
