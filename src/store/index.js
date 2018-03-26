import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rootReducers from './reducer';

const win = window;

const middlewares = [thunkMiddleWare];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  win && win.devToolsExtension ? win.devToolsExtension() : f => f
)

export default () => {
  const store = createStore(
    rootReducers,
    storeEnhancers
  )

  if(module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}