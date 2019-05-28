import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import './index.css';
import App from './app/App';

import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(( 
  <Provider store={store}>
    {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))

serviceWorker.unregister();
