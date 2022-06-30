import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AuthorizationHelper, setDebug, debug } from './helpers';
import store from './store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';


console.info("version", process.env.REACT_APP_VERSION);
setDebug();
debug.log("public_url", process.env.PUBLIC_URL);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
  () => {
    AuthorizationHelper.init();
  }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
