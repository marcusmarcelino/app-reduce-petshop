import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const data = [
  ["Task", "Valor Total"],
  ["Receitas", 12],
  ["Despesas", 2]
];
const options = {
  pieHole: 0.8,
  is3D: false,
  legend: "none",
 
  height:300,
  colors: ['#b0120a', '#666']
};

const rootProps={'data-testid': '3'}

class Graphic extends React.Component {
  render() {
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

export default Graphic;