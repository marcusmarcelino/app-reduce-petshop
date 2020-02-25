import React, {Component} from 'react';
import './styles.css';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

class BarraHorizontal extends Component{

  sayHello() {
    alert('Hello!');
    console.log("aeeeeeeee");
  }

  render() {
    return (
      <header className="BarraHorizontal">
        <div className="iconButton-horizontal">
          <IconButton
            id="IconButton" 
            type="submit"  
            aria-label="Manu"
            onClick={this.sayHello}
          >
          <MenuIcon />
          </IconButton>
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