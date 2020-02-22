import React, { Component } from "react";
import "./styles.css";
import NavMainRouter from '../../components/NavMainRouter';
import ClientTable from '../../components/ClientTable';

class Clientes extends Component {
  render() {
    return (
      <div className="client-list">
        <div className="result-grid-left">
          <NavMainRouter />
        </div>
        <div className="result-grid-right">
          <ClientTable />
        </div>
      </div>
    )
  }
} 

export default Clientes;