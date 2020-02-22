import React, {Component} from 'react';
import './styles.css';

class BarraHorizontal extends Component{
  render() {
    return (
      <header className="BarraHorizontal">
        <ul>
          <li>Petshop</li>
          <li>Meu Faturamento</li>
        </ul>
      </header>
    );
  }
}

export default BarraHorizontal;