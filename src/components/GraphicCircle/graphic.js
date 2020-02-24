import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Banho & Tosa", 9],
  ["Consultas", 2],
  ["Medicamentos", 7] // CSS-style declaration
];
const options = {
  pieHole: 0.8,
  is3D: false,
  legend: "none",
  colors: ['#BE2FBC', '#6333B6','#4C7ABF']
};
class Graphic extends React.Component {
  render() {
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

export default Graphic;