import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';
import Root from './router';
import { Provider } from 'react-redux';
import configureStore from './store'

const store = configureStore();

console.log(store.getState())

function renderApp(Component) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

renderApp(Root);

if (module.hot) {
  module.hot.accept("./router", () => {
    const NextApp = require("./router").default;
    renderApp(NextApp);
  })
}
  

registerServiceWorker();
