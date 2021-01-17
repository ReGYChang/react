import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Root from './components/Root'
import reducer from './redux/reducer'
import mainSaga from './redux/saga'
import './css/style.css';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
)

// then run the saga
sagaMiddleware.run(mainSaga)

ReactDOM.render((
  <Provider store={store}>
  <Root />
  </Provider>
  ), document.getElementById("root"));

