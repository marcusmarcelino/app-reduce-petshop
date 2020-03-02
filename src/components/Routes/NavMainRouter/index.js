import React, {Component} from 'react';
import './styles.css';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { NavLink} from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import history from '../../../Routes/history';

class NavMainRouter extends Component{
  state = {
    rota: "home"
  };
  componentDidMount(){
    const unlisten = history.listen((location, action) => {
      //console.log(action, location.pathname, location.state);
      if(location.pathname === "/clientes"){
        this.setState({rota:'clientes'});
      }else{
        this.setState({rota:'home'});
      }
    });
  }
  render() {
    return (
      <div className="Nav-NavMainRouter">
        <Nav className="btn-nav-list">
          <NavLink className={((this.state.rota ==='home') ?'active':'default')} activeClassName='is-active' to='/'><MonetizationOnIcon /> <span>Totais</span> </NavLink>
          <NavLink className={((this.state.rota ==='clientes') ?'active':'default')} activeClassName='is-active' to='/clientes'><PeopleAltIcon /><span>Clientes</span></NavLink>
        </Nav>
      </div>
    );
  }
}

export default NavMainRouter;