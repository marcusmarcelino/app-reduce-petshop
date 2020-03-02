import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/index';
import thunk from 'redux-thunk';

import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from '../Routes/history';

const middlewares = [
  thunk,
  routerMiddleware(history),
]

const store = createStore(connectRouter(history)(reducers), applyMiddleware(...middlewares));

export default store;