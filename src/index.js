import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login'
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker.js';
ReactDOM.render(
  <BrowserRouter>
 	 <Login />
  </BrowserRouter>,
document.getElementById("root"));
serviceWorker.unregister();
