import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './index.scss';

ReactGA.initialize('UA-153389169-1');
ReactGA.set({ anonymizeIp: true });

if(window.location.hostname !== 'style.kpn.com') {
  ReactGA.set({ sendHitTask: null });
}

ReactDOM.render((
  <Router basename={'/'}>
    <App />
  </Router>
), document.getElementById('kpn-style-portal'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
