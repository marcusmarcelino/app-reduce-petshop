import React, { Component } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

const Cliente = ({cliente}) => (
  <tr>
    <td>{cliente.id}</td>
    <td>{cliente.name}</td>
    <td>{cliente.document}</td>
    <td>{cliente.birthdate}</td>
    <td>{cliente.customer_since}</td>
    <td>{cliente.last_purchase}</td>
  </tr>
);

class ClientTable extends Component {

  componentDidMount(){
    this.props.getClientes();
  }

  render() {
    const {clientes: data} = this.props;
    return (
      <table className="ClientTable">
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
        {
          (data || []).map((cliente, index) => (
            <Cliente cliente={cliente} key={index} />
          ))
        }
        </tbody>
      </table> 
    )
  }
}

const mapStateToProps = state => ({
  clientes: state.clientes.clientes
});

export default connect(mapStateToProps, actions)(ClientTable);