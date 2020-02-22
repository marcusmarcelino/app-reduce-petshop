import React, { Component } from "react";
import "./styles.css";
import NavMainRouter from '../../components/NavMainRouter';
import ClientTable from '../../components/ClientTable';
import Formulario from '../../components/Formulario';
import Ordenacao from  '../../components/ClientTable';
import Pesquisa from  '../../components/ClientTable';

const Opcoes = () => (
  <div className="Opcoes">
    <div>
      <Ordenacao />
    </div>
    <div>
      <Pesquisa />
    </div>
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
          <ClientTable />
          <Formulario />
        </div>
      </div>
    )
  }
} 

export default Clientes;