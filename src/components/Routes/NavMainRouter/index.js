import React, {Component} from 'react';
import './styles.css';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { NavLink} from 'react-router-dom';
import { Nav } from 'react-bootstrap';

class NavMainRouter extends Component{
  componentDidMount(){
    console.log(window.location.href);
  }
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