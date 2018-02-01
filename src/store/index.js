import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rootReducers from './reducer';



export default () => {
  const store = createStore(
    rootReducers,
    compose(
      applyMiddleware(thunkMiddleWare),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if(module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}