import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAI from 'react-appinsights';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
ReactAI.init({ instrumentationKey: 'a450a2bc-72cd-45a6-8e75-f3afed3b2382' });

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl} history={history}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();
