import React, { Component } from 'react';
import './styles.css';
import FilterNav from '../../components/Result/FilterNav';
import ContentValueTotal from '../../components/Result/ContentValueTotal';
import GraphicCircle from '../../components/Result/GraphicCircle/index';
import GraphicBar from '../../components/Result/GraphicBar/index';

import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Result extends Component {
  state = {
    transactions:{},
    classNameGroup: "hoje"
  };
  constructor(props) {
    super(props);
    this.filterHoje = this.filterHoje.bind(this);
    this.filterMes = this.filterMes.bind(this);
    this.filterOutros = this.filterOutros.bind(this);
    this.filterSemana = this.filterSemana.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount(){
    const dados = await this.props.getTransactions().transactions;
    await this.setState({transactions:dados});
  }

   todos () {
    
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

  despesas = (data,tipo) => {
    let total=0;
    for (var d in data) {
      if(data[d].type === tipo){
        total += data[d].amount;
      }
    }
    return total;
  }

  findMes(date){
    const dateSplit=date.split(' ');
    const dateSemTime=dateSplit[0].split('-')
    const novadata = (dateSemTime[1])+""+dateSemTime[0];
    
    return novadata;
  }

  mesAtualFunc(){
    const dataAtual = new Date();
    const mes = dataAtual.getMonth();
    const ano = dataAtual.getFullYear();

    const mesAtual ='0' + (mes+1) + '' + ano;
    return mesAtual;
  }

  findDia(date){
    const dateSplit=date.split(' ');
    const dateSemTime=dateSplit[0].split('-')
    const novadata = dateSemTime[2] + "" +(dateSemTime[1])+""+dateSemTime[0];
    return novadata;
  }

  diaAtualFunc(){
    const dataAtual = new Date();   
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth();
    const ano = dataAtual.getFullYear();

    const diaAtual ='0' + dia + '0' + (mes+1) + '' + ano;
    return diaAtual;
  }

  findSemana(date){
    const dateSplit=date.split(' ');
    const dateSemTime=dateSplit[0].split('-')
    const novadataNew = new Date(dateSemTime[1]+"/"+dateSemTime[2]+"/"+dateSemTime[0]);

    return novadataNew;
  }
  
  filterSemana(){
    const dataAtual = new Date();

    const data = this.props.getTransactions().transactions;
    const transactionsDoDia = [];

    for (var d in data) {
      const dataTransaction = this.findSemana(data[d].time);

      if(dataAtual.getFullYear() === dataTransaction.getFullYear() 
          && dataAtual.getMonth() === dataTransaction.getMonth()){
            if(dataAtual.getDay() >= 1 
              && dataAtual.getDay() <= 6 
              && dataTransaction.getDay() >= 1 
              && dataTransaction.getDay() <= 6){

                if(dataAtual.getDay()===1 && dataTransaction.getDay() === 1){
                  if(dataTransaction.getDate() === dataAtual.getDate()){
                    console.log("Sim funfou");
                    transactionsDoDia.push(data[d]);
                  }
                }

                if(dataAtual.getDay()===2 
                  && dataTransaction.getDay() >= (dataAtual.getDay() - 1)){
                  if(dataTransaction.getDate() <= dataAtual.getDate() 
                    && dataTransaction.getDate() >= (dataAtual.getDate() - 1)
                  ){
                    console.log("Hoje é quarta e essas as transações da semana");
                    transactionsDoDia.push(data[d]);
                  }
                }

                if(dataAtual.getDay()===3 
                && dataTransaction.getDay() >= (dataAtual.getDay() - 2)){
                  if(dataTransaction.getDate() <= dataAtual.getDate() 
                    && dataTransaction.getDate() >= (dataAtual.getDate() - 2)
                  ){
                    console.log("Hoje é quarta e essas as transações da semana");
                    transactionsDoDia.push(data[d]);
                  }
                }

                if(dataAtual.getDay() === 4 
                  && dataTransaction.getDay() >= (dataAtual.getDay() - 3) ){
                  if(dataTransaction.getDate() <= dataAtual.getDate() 
                    && dataTransaction.getDate() >= (dataAtual.getDate() - 3)
                  ){
                    console.log("Hoje é quinta e essas as transações da semana");
                    transactionsDoDia.push(data[d]);
                  }
                }

                if(dataAtual.getDay()===5
                  && dataTransaction.getDay() >= (dataAtual.getDay() - 4) ){
                  if(dataTransaction.getDate() <= dataAtual.getDate() 
                    && dataTransaction.getDate() >= (dataAtual.getDate() - 4)
                  ){
                    console.log("Hoje é sexta e essas as transações da semana");
                    transactionsDoDia.push(data[d]);
                  }
                }
            }
      }
    }
    this.setState({transactions:transactionsDoDia});
    this.setState({classNameGroup:'semana'});
  }

  filterHoje(){
    const data = this.props.getTransactions().transactions;
    const transactionsDoDia = [];
    for (var d in data) {
      if(this.findDia(data[d].time) === this.diaAtualFunc()){
        console.log(this.findDia(data[d].time) +"==="+ this.diaAtualFunc());
        transactionsDoDia.push(data[d]);
      }
    }
    this.setState({transactions:transactionsDoDia});
    this.setState({classNameGroup:'hoje'});
  }

  filterMes(){
    const data = this.props.getTransactions().transactions;
    const transactionsDoDia = [];
    for (var d in data) {
      if(this.findMes(data[d].time) === this.mesAtualFunc()){
        transactionsDoDia.push(data[d]);
      }
    }
    this.setState({transactions:transactionsDoDia});
    this.setState({classNameGroup:'mes'});
  }

  filterOutros(){
    this.componentDidMount();
    this.setState({classNameGroup:'outros'});
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
    
    const { transactions } = this.state;

    const format = this.totalLiquido(transactions).toLocaleString('pt-BR', {minimumFractionDigits: 2, currency: 'BRL' });    

    const ChartDonutOptions = {
      tooltip: { trigger: 'selection' },
      pieHole: 0.7,
      is3D: false,
      colors: ['#BE2FBC', '#6333B6','#4C7ABF'],
      tooltips: false,
      legend: 'none',
      pieSliceText: 'none'

    };
    const ChartDonutData = [
      ["Task", ""],
      ["Banho & Tosa", this.porcentagem(transactions,"Banho & Tosa")],
      ["Consultas", this.porcentagem(transactions,"Consultas")],
      ["Medicamentos", this.porcentagem(transactions,"Medicamentos")]
    ];
    const banhoEtosa = this.format(transactions,"Banho & Tosa");
    const perBanTosa = this.porcentagem(transactions,"Banho & Tosa");
    const consultas = this.format(transactions,"Consultas");
    const perCons = this.porcentagem(transactions,"Consultas");
    const medicamentos = this.format(transactions,"Medicamentos");
    const percMed = this.porcentagem(transactions,"Medicamentos");
    
    const total = this.total(transactions);

    const despesas = this.despesas(transactions,"Despesas");
    const ColumnChartData = [
      ["Task", "Valor Total",'Valor Total'],
      ["Receitas", 0,total],
      ["Despesas", despesas,0]
    ];
    const ColumnChartOptions = {
      pieHole: 0.8,
      is3D: false,
      legend: { position: 'none' },
      height:300,
      colors: ['rgb(254, 79, 100)','#22D7AD'],
      vAxis: {format: "R$#,###"},
      
    };
    const ColumnChartRootProps={
      'data-testid': '3'
    }

    return (
      <div className="Result">
        <FilterNav 
          filterHoje={this.filterHoje}
          filterSemana={this.filterSemana}
          filterMes={this.filterMes}
          filterOutros={this.filterOutros}
          classNameBtn={this.state.classNameGroup}
        />
        <div className="result-content">
          <ContentValueTotal format={format} />
          <div className="content-graphics">
            <GraphicCircle 
              data={ChartDonutData} 
              options={ChartDonutOptions} 
              banhoEtosa={banhoEtosa} 
              perBanTosa={perBanTosa} 
              consultas={consultas}
              perCons={perCons}
              medicamentos={medicamentos}
              percMed={percMed}
              total={total}
            />
            
            <GraphicBar
              data={ColumnChartData}
              options={ColumnChartOptions}
              rootProps={ColumnChartRootProps}
              total={total}
              despesas={despesas}
            />
          </div>
        </div>
      </div>  
    );
  }
}

const mapStateToProps = state => ({
  transactions: state.clientes.transactions,
});

export default connect(mapStateToProps, actions)(Result);