import React, { Component } from 'react';
import './styles.css';
import NavMainRouter from '../../components/NavMainRouter';

class Result extends Component {
  render() {
    return (
      <div className="Result">
        <div className="result-grid-left">
          <NavMainRouter />
        </div>
        <div className="result-grid-right">
          <ul className="nav">
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
          <div className="result-content">
            <header className="content-value-total">
              <h4 className="result-content-title">
                Valor Total
              </h4>
              <ul>
                <li className="label-money">
                  R$
                </li>
                <li className="content-money">
                  10.178,60
                </li>
              </ul>
            </header>
            <div className="content-graphics">
              <div className="graphic-circle">
                <h4 className="result-content-title">Serviços</h4>
              </div>
              <div className="graphic-bar">
                <h4 className="result-content-title">Despesas X Receitas</h4>
              </div>
            </div>
          </div>
        </div>
      </div>  
    );
  }
}

export default Result;