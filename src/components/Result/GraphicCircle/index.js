import React, { Component } from "react";
import "./styles.css";

import Chart from "react-google-charts";

const GraphicCircle = ({data,options, banhoEtosa,perBanTosa, consultas, perCons, medicamentos, percMed, total}) => (

  <div className="GraphicCircle">
    <h4 className="result-content-title">Serviços</h4>
    <div>
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
        <p>({perBanTosa}%)</p>
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
        <p>({perCons}%)</p>
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
        <p>({percMed}%)</p>
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
);

export default GraphicCircle;