import React, { Component } from "react";
import "./styles.css";
import NavMainRouter from '../../components/NavMainRouter';
import ClientTable from '../../components/ClientTable';
import Formulario from '../../components/Formulario';
import Ordenacao from  '../../components/ClientTable/ordenação';
import Pesquisa from  '../../components/ClientTable/pesquisa';

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
        <div className="result-grid-left">
          <NavMainRouter />
        </div>
        <div className="result-grid-right">
          <Opcoes />
          <div className="cliente-table">
            <ClientTable />
          </div>
        </div>
      </div>
    )
  }
} 

export default Clientes;