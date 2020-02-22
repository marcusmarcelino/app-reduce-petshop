import React, { Component } from "react";
import "./styles.css";

class FilterNav extends Component {
  render() {
    return (
      <ul className="FilterNav">
        <li className="nav-item">
          <button>Hoje</button>
        </li>
        <li className="nav-item">
          <button>Última Semana</button>
        </li>
        <li className="nav-item">
          <button>Último Mês</button>
        </li>
        <li className="nav-item">
          <button>Outro Período</button>
        </li>
      </ul>
    )
  }
} 

export default FilterNav;