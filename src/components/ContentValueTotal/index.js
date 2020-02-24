import React, {Component} from 'react';
import './styles.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class ContentValueTotal extends Component{

  componentDidMount(){
    this.props.getTransactions();
  }
  
  totalLiquido = (data) => {
    /**const { transactions } = this.props;
    transactions.reduce((sum, data) => {
      return sum + data.amount;
    }, 0);
    console.log(data)
    for (var d in data) {
      const amount = data[d].amount;
      console.log(amount);
    }
    (data || []).map((data, index) => (
      console.log("amount")
    ))

    console.log(receitas);
    console.log(despesas);

    return (data || []).reduce((sum, data) => {
      return sum + data.amount;
    }, 0);

    toFixed(2)
    */
    let receitas=0;
    let despesas=0;
    for (var d in data) {
      if(data[d].type === 'Receitas'){
        receitas += data[d].amount;
      }
      if(data[d].type === 'Despesas'){
        despesas += data[d].amount;
      }
    }
    return(receitas-despesas)
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
      <header className="ContentValueTotal">
        <h4 className="result-content-title">
          Valor Total
        </h4>
        <ul>
          <li className="label-money">
            R$
          </li>
          <li className="content-money">
            {this.totalLiquido(transactions).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </li>
        </ul>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.clientes.transactions,
});

export default connect(mapStateToProps, actions)(ContentValueTotal);