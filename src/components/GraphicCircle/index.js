import React, { Component } from "react";
import "./styles.css";
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Graphic from './graphic';


class GraphicCircle extends Component {

  componentDidMount(){
    this.props.getTransactions();
  }

  total = (transactions) => {
    return (this.totalPorTipo(transactions,"Banho & Tosa")
    +this.totalPorTipo(transactions,"Consultas")
    +this.totalPorTipo(transactions,"Medicamentos"))
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

  format = (dados,tipo) => {
    return this.totalPorTipo(dados,tipo).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  porcentagem = (dados,tipo) => {
    const result = ((this.totalPorTipo(dados,tipo))*100)/this.total(dados);
    return Math.round(result);   
  }

  render() {
    const transactions = this.props.transactions;
    const total = this.total(transactions).toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });
    
    const banhoEtosa = this.format(transactions,"Banho & Tosa");
    const perBanTosa = this.porcentagem(transactions,"Banho & Tosa");
    
    const consultas = this.format(transactions,"Consultas");
    const perCons = this.porcentagem(transactions,"Consultas");

    const medicamentos = this.format(transactions,"Medicamentos");
    const percMed = this.porcentagem(transactions,"Medicamentos");
    return (
      <div className="GraphicCircle">
        <h4 className="result-content-title">Serviços</h4>
        <div>
          <Graphic />
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <div className="rounded banho-tosa"></div>
            <p className="legend-graphic">Banho e Tosa</p>
          </div>
          <div className="d-flex value-graphic">
            <p className="value-graphic">
              {banhoEtosa}
            </p>
            <p>{perBanTosa}%</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <div className="rounded consultas"></div>
            <p className="legend-graphic">Consultas</p>
          </div>
          <div className="d-flex value-graphic">
            <p className="value-graphic">
              {consultas}
            </p>
            <p>{perCons}%</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex">
            <div className="rounded medicamentos"></div>
            <p className="legend-graphic">Medicamentos</p>
          </div>
          <div className="d-flex value-graphic">
            <p className="value-graphic">
              {medicamentos}
            </p>
            <p>{percMed}%</p>
          </div>
        </div>
        <div className="d-flex">
          <div className="legend-graphic total">
            <p>Total</p>
          </div>
          <div className="d-flex value-graphic">
            <p>{total}</p><p>(100%)</p>
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