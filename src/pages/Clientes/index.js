import React, { Component } from "react";
import "./styles.css";
import NavMainRouter from '../../components/NavMainRouter';

class Clientes extends Component {
  render() {
    return (
      <div className="client-list">
        <div className="result-grid-left">
          <NavMainRouter />
        </div>
        <div className="result-grid-right">
          <table className="table-client">
            <thead>
              <tr className="row">
                <th>Id</th>
                <th>Nome</th>
                <th>Documento</th>
                <th>Data de Nascimento</th>
                <th>Cliente Desde</th>
                <th>Última Compra</th>
              </tr>
            </thead>
            <tbody>
              <tr className="row">
                <td>1</td>
                <td>Marcus</td>
                <td>059.675.71-40</td>
                <td>11/07/1997</td>
                <td>21/02/2020</td>
                <td>21/02/2020</td>
              </tr>
              <tr className="row">
                <td>1</td>
                <td>Marcus</td>
                <td>059.675.71-40</td>
                <td>11/07/1997</td>
                <td>21/02/2020</td>
                <td>21/02/2020</td>
              </tr>
            </tbody>
          </table>          
        </div>
      </div>
    )
  }
} 

export default Clientes;