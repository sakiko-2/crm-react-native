import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/PeopleReducer';
import Navigator from '../navigation/Navigator';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default () => (
  <Provider store={store} >
    <Navigator />
  </Provider>
);
