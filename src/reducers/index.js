import { combineReducers } from 'redux';
import clientesReducer from './clientesReducer';

const rootReducer = combineReducers ({
  clientes: clientesReducer
});

export default rootReducer;