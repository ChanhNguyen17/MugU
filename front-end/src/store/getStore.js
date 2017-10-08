import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';
import Api from '../api/Api';

const api = new Api();

const getStore = () => {
  const composeEnhancers =
    typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk.withExtraArgument(api)),
  );

  let store;

  if (process.env.NODE_ENV !== 'production') {
    store = createStore(reducer, enhancer);
  } else {
    const middleware = applyMiddleware(thunk.withExtraArgument(api));
    store = createStore(reducer, middleware);
  }

  api.dispatch = store.dispatch;

  return store;
};

export default getStore;
