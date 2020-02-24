import React, { Component } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import * as actions from '../../actions/index';


class GraphicCircle extends Component {

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
      if(data[d].product_name === tipo){
        total += data[d].amount;
      }
    }
    return total;
  }

  render() {
    const transactions = this.props.transactions;

    return (
      <div className="GraphicCircle">
        <h4 className="result-content-title">Serviços</h4>
        <div>
          grafico aqui
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <div className="rounded banho-tosa"></div><p>Banho e Tosa</p>
          </div>
          <div>
            <p>{this.totalPorTipo(transactions,"Banho & Tosa").toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <div className="rounded consultas"></div><p>Consultas</p>
          </div>
          <div>
            <p>{this.totalPorTipo(transactions,"Consultas").toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <div className="rounded medicamentos"></div><p>Medicamentos</p>
          </div>
          <div>
            <p>{this.totalPorTipo(transactions,"Medicamentos").toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </div>
        </div>
        <div className="d-flex">
          <div>
            <p>Total</p>
          </div>
          <div>
            <p>
              {
                this.total(transactions)
              }
            </p>
          </div>
        </div>
      </div>
    )
  }
} 

const mapStateToProps = state => ({
  transactions: state.clientes.transactions,
});

export default connect(mapStateToProps, actions)(GraphicCircle);