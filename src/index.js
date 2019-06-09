import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import history from '../src/history';
import './index.css';
import App from './app/App';

import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(( 
  <Provider store={store}>
    <HashRouter basename='/' history={history}>
      <App /> 
    </HashRouter>
  </Provider>
), document.getElementById('root'))

serviceWorker.unregister();
