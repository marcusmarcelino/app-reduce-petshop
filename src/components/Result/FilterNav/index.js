import React from "react";
import "./styles.css";
import { Button, ButtonToolbar } from 'react-bootstrap';


const FilterNav = ({filterHoje, filterSemana, filterMes, filterOutros,classNameBtn}) => (
  <div className="FilterNav">
    <ButtonToolbar className="btn-list-filter">
      <Button className={((classNameBtn ==='hoje') ?'active':'default')} onClick={filterHoje}>Hoje</Button>
      <Button className={((classNameBtn ==='semana') ?'active':'default')} onClick={filterSemana}>Última Semana</Button>
      <Button className={((classNameBtn ==='mes') ?'active':'default')} onClick={filterMes}>Último Mês</Button>
      <Button className={((classNameBtn ==='outros') ?'active':'default')} onClick={filterOutros}>Outro Período</Button>
    </ButtonToolbar>
  </div>
);

export default FilterNav;