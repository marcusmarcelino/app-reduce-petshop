import React, { Component } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';

const Cliente = ({cliente}) => (
  <tr className="row">
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

  ordenacao = (a, b) => {
    const { ordenacao } = this.props;
    if( ordenacao === 'a-z') return a.name.localeCompare(b.nome)
    else if( ordenacao === 'z-a') return -1 * a.name.localeCompare(b.nome)
    else if( ordenacao === 'criacao') return new Date(a.criadoEm) - new Date(b.criadoEm)
  }

  pesquisa = ({id, name, document, birthdate, customer_since, last_purchase}) => {
    const { pesquisa } = this.props;
    if (!pesquisa) return true;
    const item = [id, name, document, birthdate, customer_since, last_purchase].join(';');
    return item.includes(pesquisa);
  }

  render() {
    const {clientes: data} = this.props;
    return (
      <table className="ClientTable">
        <thead>
          <tr>
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
          (data || [])
          .filter(this.pesquisa)
          .sort(this.ordenacao)
          .map((cliente, index) => (
            <Cliente cliente={cliente} key={index} />
          ))
        }
        </tbody>
      </table> 
    )
  }
}

const mapStateToProps = state => ({
  clientes: state.clientes.clientes,
  ordenacao:state.clientes.ordenacao,
  pesquisa: state.clientes.pesquisa
});

export default connect(mapStateToProps, actions)(ClientTable);