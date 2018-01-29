import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';
import Root from './router';
// import { Provider } from 'react-redux';

function renderApp(Component) {
  ReactDOM.render(
    <AppContainer>
      {/* <Provider store={store}> */}
        <Component />
      {/* </Provider> */}
    </AppContainer>,
    document.getElementById('root')
  )
}

// if (module.hot) {
//   module.hot.accept("./router", () => {
//     renderApp(Root);
//   });
// } else {
  renderApp(Root)
// }

registerServiceWorker();
