import React from "react";
import "./styles.css";
import { Button, ButtonToolbar } from 'react-bootstrap';


const FilterNav = ({filterHoje, filterSemana, filterMes, filterOutros}) => (
  <div className="FilterNav">
    <ButtonToolbar className="btn-list-filter">
      <Button onClick={filterHoje}>Hoje</Button>
      <Button onClick={filterSemana}>Última Semana</Button>
      <Button onClick={filterMes}>Último Mês</Button>
      <Button onClick={filterOutros}>Outro Período</Button>
    </ButtonToolbar>
  </div>
);

export default FilterNav;