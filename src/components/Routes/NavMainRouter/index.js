import React, {Component} from 'react';
import './styles.css';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { Link,NavLink} from 'react-router-dom';
import { Button, ButtonToolbar, Nav } from 'react-bootstrap';

import Results from  '../../../pages/Result/index';

class NavMainRouter extends Component{
  render() {
    return (
      <div className="Nav-NavMainRouter">
        <Nav className="btn-nav-list">
          <NavLink activeClassName='is-active' to='/'><MonetizationOnIcon /> <span>Totais</span> </NavLink>
          <NavLink activeClassName='is-active' to='/clientes'><PeopleAltIcon /><span>Clientes</span></NavLink>
        </Nav>
      </div>
    );
  }
}

export default NavMainRouter;