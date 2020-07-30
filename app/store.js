import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const loggerMiddleware = createLogger();

const storeCreator = (initialState = {}) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    )),
  );

  return store;
};

export default storeCreator;
