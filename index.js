import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';
import bookReducer from './reducers'
import App from './components/App'

const store = createStore(bookReducer,applyMiddleware(promiseMiddleware));
//let store = createStore(bookReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)