import React, {Component} from 'react';
import './styles.css';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class ContentValueTotal extends Component{

  componentDidMount(){
    this.props.getTransactions();
  }
  
  totalLiquido = (data) => {
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

  render() {
    const transactions = this.props.transactions;
    const format = this.totalLiquido(transactions).toLocaleString('pt-BR', {minimumFractionDigits: 2, currency: 'BRL' });
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
            {format}
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