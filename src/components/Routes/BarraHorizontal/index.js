import React, {Component} from 'react';
import './styles.css';
import MenuExpansive from './BntOpen'

class BarraHorizontal extends Component{
  render() {
    return (
      <header className="BarraHorizontal">
        <div className="iconButton-horizontal">
          <MenuExpansive />
        </div>        
        <ul>
          <li>Petshop</li>
          <li>Meu Faturamento</li>
        </ul>
      </header>
    );
  }
}

export default BarraHorizontal;