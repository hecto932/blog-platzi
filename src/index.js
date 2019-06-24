import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import './css/icons.css'
import App from './components/App';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'

const store = createStore(
  reducers, // ALL THE REDUCERS
  {}, // INITIAL STATE
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

