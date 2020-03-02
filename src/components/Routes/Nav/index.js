import React, {Component} from 'react';
import './styles.css';
import PetsIcon from '@material-ui/icons/Pets';
import WidgetsIcon from '@material-ui/icons/Widgets';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';

import history from '../../../Routes/history';

class Nav extends Component{
  state = {
    rota: "home"
  };

  componentDidMount(){
    const unlisten = history.listen((location, action) => {
      if(location.pathname === "/cadastro"){
        this.setState({rota:'cadastro'});
      }else{
        this.setState({rota:'home'});
      }
    });
  }
  render() {
    return (
      <nav id="nav-lateral" className="nav-lateral">
        <ul className="nav">
          <li className="logo">
            <PetsIcon/>
          </li>
          <li className="nav-item">
            <a className={((this.state.rota ==='home') ?'active':'default')} href="">
              <WidgetsIcon /><br/>
              Meu <br/> Faturamento
            </a>
          </li>
          <li className="nav-item">
            <a className={((this.state.rota ==='cadastro') ?'active':'default')} href="">
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