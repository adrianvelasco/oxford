
import React from 'react';
import ReactDOM from 'react-dom';
import Navegation from './Components/Navegation'
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker.js';
ReactDOM.render(
  <BrowserRouter>
   <Navegation />
  </BrowserRouter>,
document.getElementById("root"));
serviceWorker.unregister();
