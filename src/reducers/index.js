import { combineReducers } from 'redux';
import clientesReducer from './clientesReducer';
import { connectRouter} from 'connected-react-router';
import history from '../Routes/history';
const rootReducer = combineReducers ({
  clientes: clientesReducer,
  router: connectRouter(history),
});

export default rootReducer;