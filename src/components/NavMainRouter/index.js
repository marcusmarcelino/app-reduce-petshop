import React, {Component} from 'react';
import './styles.css';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Link } from 'react-router-dom';

class NavMainRouter extends Component{
  render() {
    return (
      <ul className="NavMainRouter">
        <li className="nav-item">
          <Link to="/"><span><MonetizationOnIcon /></span><span>totais</span> </Link>
        </li>
        <li className="nav-item">
          <Link to="/clientes"><span><PeopleAltIcon /></span><span>Clientes</span> </Link>
        </li>
      </ul>
    );
  }
}

export default NavMainRouter;