import Immutable from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { Platform } from 'react-native'
import reducer from './reducers'
import * as actionCreators from './scences/Counter/CounterActions'
import { createLogger } from  'redux-logger';

let composeEnhancers = compose;
var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

var logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});

if (__DEV__) {
  const installDevTools = require('immutable-devtools');

  installDevTools(Immutable);
  composeEnhancers = (
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    require('remote-redux-devtools').composeWithDevTools
  )({
    name: Platform.OS,
    ...require('../package.json').remotedev,
    actionCreators,
  });
}

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger),
);
export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, enhancer)
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./reducers').default)
    })
  }
  return store
}