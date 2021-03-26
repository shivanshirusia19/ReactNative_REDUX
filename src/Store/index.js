import {createStore} from 'redux';
import counterReducer from '../Modules/counter';

const store = createStore(counterReducer);

export default store;
