import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/vendors/iconic-fonts/font-awesome/css/all.min.css';
import './assets/vendors/iconic-fonts/flat-icons/flaticon.css';
import './assets/vendors/iconic-fonts/cryptocoins/cryptocoins.css';
import './assets/vendors/iconic-fonts/cryptocoins/cryptocoins-colors.css';
import './assets/css/animate.min.css';
import './assets/css/style.css';
import { Provider } from "react-redux";
import {store} from "./redux/store"
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter basename={'/themes/themeforest/react/costic'}>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('costic')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
