import React, { Component } from "react";
import "./styles.css";
import ClientTable from '../../components/Clientes/ClientTable';
import Ordenacao from  '../../components/Clientes/ClientTable/ordenação';
import Pesquisa from  '../../components/Clientes/ClientTable/pesquisa';

const Opcoes = () => (
  <div className="Opcoes">
    <Pesquisa />
    <Ordenacao />
  </div>
);

class Clientes extends Component {
  render() {
    return (
      <div className="client-list">
        <Opcoes />
        <div className="cliente-table">
          <ClientTable />
        </div>
      </div>
    )
  }
} 

export default Clientes;