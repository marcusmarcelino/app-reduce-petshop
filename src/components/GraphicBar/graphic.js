import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Graphic extends React.Component {

  componentDidMount(){
    this.props.getTransactions();
  }

  total = (transactions) => {
    const total = (this.totalPorTipo(transactions,"Banho & Tosa")
    +this.totalPorTipo(transactions,"Consultas")
    +this.totalPorTipo(transactions,"Medicamentos"));
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
    return total;
  }

  render() {    
    const transactions = this.props.transactions;
    const total=this.total(transactions);
    const despesas = this.despesas(transactions,"Despesas");

    const data = [
      ["Task", "Valor Total",'Valor Total'],
      ["Receitas", total,0],
      ["Despesas", 0,despesas]
    ];
    const options = {
      pieHole: 0.8,
      is3D: false,
      legend: { position: 'none' },
      height:300,
      colors: ['#22D7AD', 'rgb(254, 79, 100)']
    };
    const rootProps={'data-testid': '3'}
    return (
      <div className="Graphic">
        <Chart
          chartType="ColumnChart"
          legendToggle="none"
          subtitle="none"
          width="100%"
          data={data}
          options={options}
          rootProps={rootProps}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.clientes.transactions,
});

export default connect(mapStateToProps, actions)(Graphic);