import { GET_CLIENTES, ADD_CLIENTE, UPDATE_CLIENTE, REMOVE_CLIENTE } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type){
    case GET_CLIENTES:
      return {
        ...state,
        clientes: action.data
      };
    case ADD_CLIENTE:
      return {
        ...state,
        clientes: state.clientes.concat([action.cliente])
      };
    case UPDATE_CLIENTE:
      return {
        ...state,
        clientes: state.clientes.map((_cliente) =>(_cliente.id === action.cliente.id) ? action.cliente: _cliente)
      };
    case REMOVE_CLIENTE:
      return {
        ...state,
        clientes: state.clientes.filter((_cliente) => _cliente.id !== action.id)
      };
    default:
      return state;
  }
}