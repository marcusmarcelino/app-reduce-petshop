import { GET_CLIENTES, ADD_CLIENTE, UPDATE_CLIENTE, REMOVE_CLIENTE } from './types';
import db from '../data/json_desafio.json';
const data = db.customers;

const generateId = () => Math.floor(Math.random() * 1000 + 1000);

const prepararCliente = (cliente) => {
  const id= generateId();
  return {...cliente, id}
}

export const getClientes = () => ({ type: GET_CLIENTES, data });

export const addCliente = (cliente) => ({ type: ADD_CLIENTE, cliente: prepararCliente(cliente)});

export const updateCliente = (id, cliente) => ({ type: UPDATE_CLIENTE, cliente: {id, ...cliente} });

export const removeCliente = (id) => ({ type: REMOVE_CLIENTE, id});