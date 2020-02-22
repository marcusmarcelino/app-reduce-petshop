import React, {Component} from 'react';
import './styles.css';

class ContentValueTotal extends Component{
  render() {
    return (
      <header className="ContentValueTotal">
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
    );
  }
}

export default ContentValueTotal;