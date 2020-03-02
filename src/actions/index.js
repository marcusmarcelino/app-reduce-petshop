import { GET_CLIENTES, ADD_CLIENTE, UPDATE_CLIENTE, REMOVE_CLIENTE, SET_ORDENACAO, SET_PESQUISA, GET_TRANSACTIONS} from './types';
import db from '../data/json_desafio.json';
const data = db.customers;
const transactions = db.transactions;

const generateId = () => Math.floor(Math.random() * 1000 + 1000);

const prepararCliente = (cliente) => {
  let id= generateId();
  return {...cliente, id}
}

export const getClientes = () => ({ type: GET_CLIENTES, data });

export const getTransactions = () => ({ type: GET_TRANSACTIONS, transactions });

export const addCliente = (cliente) => ({ type: ADD_CLIENTE, cliente: prepararCliente(cliente)});

export const updateCliente = (id, cliente) => ({ type: UPDATE_CLIENTE, cliente: {id, ...cliente} });

export const removeCliente = (id) => ({ type: REMOVE_CLIENTE, id});

export const setOrdenacao = (ev) => ({ type: SET_ORDENACAO, ordenacao: ev.target.value});

export const setPesquisa = (ev) => ({ type: SET_PESQUISA, pesquisa: ev.target.value});