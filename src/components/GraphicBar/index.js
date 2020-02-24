import React, { Component } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Graphic from './graphic';

class GraphicBar extends Component {

  componentDidMount(){
    this.props.getTransactions();
  }

  total = (transactions) => {
    const total = (this.totalPorTipo(transactions,"Banho & Tosa")
    +this.totalPorTipo(transactions,"Consultas")
    +this.totalPorTipo(transactions,"Medicamentos"))
    .toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
    return total;
  }

  totalPorTipo = (data,tipo) => {
    let total=0;
    for (var d in data) {
      if(data[d].product_name === tipo){
        total += data[d].amount;
      }
    }
    return total;
  }

  despesas = (data,tipo) => {
    let total=0;
    for (var d in data) {
      if(data[d].type === tipo){
        total += data[d].amount;
      }
    }
    return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  render() {
    const transactions = this.props.transactions;
    const total=this.total(transactions);
    const despesas = this.despesas(transactions,"Despesas");
    return (
      <div className="GraphicBar">
        <h4 className="result-content-title">Despesas X Receitas</h4>
        <div>
          <Graphic />
        </div>
        <div className="d-flex">
          <div className="d-flex legend-graphic">
            <div className="rounded receitas"></div><p>Receitas</p>
          </div>
          <div className="d-flex value-graphic">
            <p>{total}</p><p>(50%)</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex legend-graphic">
            <div className="rounded despesas"></div>
            <p>Despesas</p>
          </div>
          <div className="d-flex value-graphic">
            <p>{despesas}</p><p>(30%)</p>
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