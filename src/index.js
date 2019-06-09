import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Router } from 'react-router';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import history from '../src/history';
import './index.css';
import App from './app/App';

import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(( 
  <Provider store={store}>
    <HashRouter basename='/booking_test/' history={history}>
    {/* <Router history={history} > */}
      <App /> 
    {/* </Router>  */}
    </HashRouter>
  </Provider>
), document.getElementById('root'))

serviceWorker.unregister();
