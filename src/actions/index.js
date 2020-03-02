import { GET_CLIENTES, ADD_CLIENTE, UPDATE_CLIENTE, REMOVE_CLIENTE, SET_ORDENACAO, SET_PESQUISA, GET_TRANSACTIONS} from './types';
import db from '../data/json_desafio.json';
const data = db.customers;
const transactions = db.transactions;

const generateId = () => Math.floor(Math.random() * 1000 + 1000);

const prepararCliente = (cliente) => {
  let id= generateId();
  return {...cliente, id}
}
/*
const total = () => {
  return (this.totalPorTipo("Banho & Tosa")
  +this.totalPorTipo("Consultas")
  +this.totalPorTipo("Medicamentos")
  );
}

const totalPorTipo = (tipo) => {
  let data= transactions;
  let total=0;
  for (var d in data) {
    if(data[d].product_name === tipo){
      total += data[d].amount;
    }
  }
  return total;
}

const format = (tipo) => {
  return this.totalPorTipo(tipo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const porcentagem = (tipo) => {
  let data = transactions;
  let result = ((this.totalPorTipo(tipo))*100)/this.total();
  return Math.round(result);   
}

const despesas = (tipo) => {
  let data = transactions;
  let total=0;
  for (var d in data) {
    if(data[d].type === tipo){
      total += data[d].amount;
    }
  }
  return total;
}

const totalLiquido = () => {
  let data = transactions;
  let receitas=0;
  let despesas=0;
  for (var d in data) {
    if(data[d].type === 'Receitas'){
      receitas += data[d].amount;
    }
    if(data[d].type === 'Despesas'){
      despesas += data[d].amount;
    }
  }
  return(receitas-despesas)
}

export const getTotal = () => ({ type: GET_TOTAL, transactions: total()});

export const getTotalPorTipo = () => ({ type: GET_TOTAL_POR_TIPO, totalPorTipo: totalPorTipo(tipo)});

export const getFormat = () => ({ type: GET_FORMAT, transactions: format(tipo)});

export const getPorcentagem = () => ({ type: GET_PORCENTAGEM, porcentagem: porcentagem(tipo)});

export const getDespesas = () => ({ type: GET_DESPESAS, despesas: despesas(tipo)})

export const getTotalLiquido = () => ({ type: GET_TOTAL_LIQUIDO, totalLiquido: totalLiquido()})
*/

export const getClientes = () => ({ type: GET_CLIENTES, data });

export const getTransactions = () => ({ type: GET_TRANSACTIONS, transactions });

export const addCliente = (cliente) => ({ type: ADD_CLIENTE, cliente: prepararCliente(cliente)});

export const updateCliente = (id, cliente) => ({ type: UPDATE_CLIENTE, cliente: {id, ...cliente} });

export const removeCliente = (id) => ({ type: REMOVE_CLIENTE, id});

export const setOrdenacao = (ev) => ({ type: SET_ORDENACAO, ordenacao: ev.target.value});

export const setPesquisa = (ev) => ({ type: SET_PESQUISA, pesquisa: ev.target.value});