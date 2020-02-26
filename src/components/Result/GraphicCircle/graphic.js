import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';


class Graphic extends React.Component {

  componentDidMount(){
    this.props.getTransactions();
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
    
    const perBanTosa = this.totalPorTipo(transactions,"Banho & Tosa");
    
    const perCons = this.totalPorTipo(transactions,"Consultas");

    const percMed = this.totalPorTipo(transactions,"Medicamentos");

    const options = {
      tooltip: { trigger: 'selection' },
      pieHole: 0.7,
      is3D: false,
      colors: ['#BE2FBC', '#6333B6','#4C7ABF'],
      tooltips: false,
      legend: 'none',
      pieSliceText: 'none'

    };

    const data = [
      ["Task", ""],
      ["Banho & Tosa", perBanTosa],
      ["Consultas", perCons],
      ["Medicamentos", percMed]
    ];
    
    return (
      <div className="Graphic">
        <Chart
          
          chartType="PieChart"
          legend="none"
          legendToggle="none"
          subtitle="none"
          pieSliceText="none"
          width="100%"
          height="200px"
          data={data}
          options={options}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.clientes.transactions,
});

export default connect(mapStateToProps, actions)(Graphic);