import React, { Component } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class GraphicBar extends Component {

  componentDidMount(){
    this.props.getTransactions();
  }

  total = (transactions) => {
    return (this.totalPorTipo(transactions,"Banho & Tosa")
    +this.totalPorTipo(transactions,"Consultas")
    +this.totalPorTipo(transactions,"Medicamentos"))
    .toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
    ;
  }
  
  totalPorTipo = (data,tipo) => {
    let total=0;
    for (var d in data) {
      if(data[d].type === tipo){
        total += data[d].amount;
      }
    }
    return total;
  }

  render() {
    const transactions = this.props.transactions;
    return (
      <div className="GraphicBar">
        <h4 className="result-content-title">Despesas X Receitas</h4>
        <div className="d-flex">
          <div className="d-flex">
            <div className="rounded receitas"></div><p>Receitas</p>
          </div>
          <div>
            <p>{this.total(transactions)}</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <div className="rounded despesas"></div><p>Despesas</p>
          </div>
          <div>
            <p>{this.totalPorTipo(transactions,"Despesas").toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  transactions: state.clientes.transactions,
});

export default connect(mapStateToProps, actions)(GraphicBar);