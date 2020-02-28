import React, { Component } from 'react';
import './styles.css';

import FilterNav from '../../components/Result/FilterNav';
import ContentValueTotal from '../../components/Result/ContentValueTotal';
import GraphicCircle from '../../components/Result/GraphicCircle/index';

import { connect } from 'react-redux';
import * as actions from '../../actions/index';

import { Button, ButtonToolbar } from 'react-bootstrap';
import Chart from "react-google-charts";

class Result extends Component {
  state = {
    transactions:{}
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
    this.setState({transactions:dados});
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

    const diaAtual = dia + '0' + (mes+1) + '' + ano;
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
    //const dataTransaction = this.findSemana("2020-02-27 10:00:40.000000");
    //console.log(dataTransaction.getDay()+"==transaction=="+dataTransaction.getMonth());
    //console.log(dataAtual.getDay()+"==local=="+dataAtual.getMonth());

    const data = this.props.getTransactions().transactions;
    const transactionsDoDia = [];
    //console.log(dataAtual.getDay());
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
  }

  filterOutros(){
    this.componentDidMount();
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
    const total2 = this.total(transactions);

    const format = this.totalLiquido(transactions).toLocaleString('pt-BR', {minimumFractionDigits: 2, currency: 'BRL' });
    
    

    const despesas2 = this.despesas(transactions,"Despesas");
    const despesas = this.despesas(transactions,"Despesas").toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    const perBanTosaGraphic = this.totalPorTipo(transactions,"Banho & Tosa");
    
    const perConsGraphic = this.totalPorTipo(transactions,"Consultas");

    const percMedGraphic = this.totalPorTipo(transactions,"Medicamentos");



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
      ["Banho & Tosa", perBanTosaGraphic],
      ["Consultas", perConsGraphic],
      ["Medicamentos", percMedGraphic]
    ];
    const banhoEtosa = this.format(transactions,"Banho & Tosa");
    const perBanTosa = this.porcentagem(transactions,"Banho & Tosa");
    const consultas = this.format(transactions,"Consultas");
    const perCons = this.porcentagem(transactions,"Consultas");
    const medicamentos = this.format(transactions,"Medicamentos");
    const percMed = this.porcentagem(transactions,"Medicamentos");
    const total = this.total(transactions).toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL' });



    const data2 = [
      ["Task", "Valor Total",'Valor Total'],
      ["Receitas", 0,total2],
      ["Despesas", despesas2,0]
    ];

    const options2 = {
      pieHole: 0.8,
      is3D: false,
      legend: { position: 'none' },
      height:300,
      colors: ['rgb(254, 79, 100)','#22D7AD'],
      vAxis: {format: "R$#,###"},
      
    };
    const rootProps={
      'data-testid': '3'
    }

    return (
      <div className="Result">
        <div className="FilterNav">
          <ButtonToolbar className="btn-list-filter">
            <Button onClick={this.filterHoje}>Hoje</Button>
            <Button onClick={this.filterSemana}>Última Semana</Button>
            <Button onClick={this.filterMes}>Último Mês</Button>
            <Button onClick={this.filterOutros}>Outro Período</Button>
          </ButtonToolbar>
        </div>
        <div className="result-content">
          <ContentValueTotal format={format} />
          <div className="content-graphics">
            <GraphicCircle 
              data={data} 
              options={options} 
              banhoEtosa={banhoEtosa} 
              perBanTosa={perBanTosa} 
              consultas={consultas}
              perCons={perCons}
              medicamentos={medicamentos}
              percMed={percMed}
              total={total}
            />
            
            <div className="GraphicBar">
              <h4 className="result-content-title">Despesas X Receitas</h4>
              <div>
                <Chart
                  chartType="ColumnChart"
                  legendToggle="none"
                  subtitle="none"
                  width="100%"
                  data={data2}
                  options={options2}
                  rootProps={rootProps}
                />
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