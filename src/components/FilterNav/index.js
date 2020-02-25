import React, { Component } from "react";
import "./styles.css";

class FilterNav extends Component {

  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    alert('Hello!');;
  }

  render() {
    return (
      <ul className="FilterNav">
        <li className="nav-item">
          <button onClick={this.sayHello}>Hoje</button>
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