import { combineReducers } from 'redux';
import { ADICIONAR_UM } from '../actions/types'; ;

const valoresReducer = (state = {valor: 0}, action) => {
  switch(action.type){
    case ADICIONAR_UM:
      return { ...state, valor: state.valor +1 }
    default:
      return state;
  }
}

const rootReducer = combineReducers ({
  valores: valoresReducer
});

export default rootReducer;