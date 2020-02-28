import React from 'react';
import './styles.css';

const ContentValueTotal  = ({ format }) => (

  <header className="ContentValueTotal">
    <h4 className="result-content-title">
      Valor Total
    </h4>
    <ul>
      <li className="label-money">
        R$
      </li>
      <li className="content-money">
        {format}
      </li>
    </ul>
  </header>

);

export default ContentValueTotal;