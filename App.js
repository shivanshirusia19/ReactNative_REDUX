import React from 'react';
import {Provider} from 'react-redux';
import Counter from './src/Screens/Counter';
import store from './src/Store';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
