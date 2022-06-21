import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components/App';
import { Provider } from 'react-redux'
import { modeReducer } from './reducers/modeReducer';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { getAllTrips } from './thunks/getAllTrips.js';


let store = createStore(modeReducer, applyMiddleware(thunk));
store.dispatch(getAllTrips());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
