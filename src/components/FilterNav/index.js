import React, { Component } from "react";
import "./styles.css";
import { Button, ButtonToolbar } from 'react-bootstrap';


class FilterNav extends Component {

  constructor(props) {
    super(props);
    this.sayHello = this.sayHello.bind(this);
  }

  sayHello() {
    alert('Hello!');;
  }
  //<Button >Warning</Button>//variant="warning"
  render() {
    return (
      <div>
        <ButtonToolbar className="btn-list-filter">
          <Button onClick={this.sayHello}>Hoje</Button>
          <Button >Última Semana</Button>
          <Button >Último Mês</Button>
          <Button >Outro Período</Button>
        </ButtonToolbar>
      </div>
    )
  }
} 

export default FilterNav;