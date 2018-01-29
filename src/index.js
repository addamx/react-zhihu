import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';
import Routes from './router';
import { Provider } from 'react-redux';

function renderApp(component) {
  <AppContainer>
    <Provider store={store}>
      <Component />
    </Provider>
  </AppContainer>,
  document.getElementById('#root')
}

if (module.hot) {
  module.hot.accept("./router", () => {
    renderApp(Routes);
  });
} else {
  renderApp(Routes)
}

registerServiceWorker();
