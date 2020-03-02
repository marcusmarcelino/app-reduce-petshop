import React, {Component} from 'react';
import './styles.css';
import PetsIcon from '@material-ui/icons/Pets';
import WidgetsIcon from '@material-ui/icons/Widgets';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

class Nav extends Component{
  render() {
    return (
      <nav id="nav-lateral" className="nav-lateral">
        <ul className="nav">
          <li className="logo">
            <PetsIcon/>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <WidgetsIcon /><br/>
              Meu <br/> Faturamento
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <FolderOpenIcon /><br/>
              Cadastro
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;