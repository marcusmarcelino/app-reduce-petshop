import React from "react";
import "./styles.css";
import Chart from "react-google-charts";

const GraphicBar = ({data, options, rootProps, total, despesas}) => (

  <div className="GraphicBar">
    <h4 className="result-content-title">Despesas X Receitas</h4>
    <div>
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
    </div>
    <div className="d-flex">
      <div className="d-flex legend-graphic">
        <div className="rounded receitas"></div><p>Receitas</p>
      </div>
      <div className="d-flex value-graphic">
        <p>{total.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p><p>(50%)</p>
      </div>
    </div>
    <div className="d-flex">
      <div className="d-flex legend-graphic">
        <div className="rounded despesas"></div>
        <p>Despesas</p>
      </div>
      <div className="d-flex value-graphic">
        <p>{despesas.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p><p>(30%)</p>
      </div>
    </div>
  </div>
);

export default GraphicBar;