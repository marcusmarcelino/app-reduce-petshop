import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './styles.css';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import WidgetsIcon from '@material-ui/icons/Widgets';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { Link} from 'react-router-dom';


export default function MenuExpansive() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-expansivo">
      <IconButton
        aria-controls="menu" 
        aria-haspopup="true" 
        onClick={handleClick}
        id="IconButton" 
        type="submit" 
      >
        <MenuIcon />
      </IconButton>
      <Menu
        className="content-menu-expansivo"
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
        <MenuItem onClick={handleClose}>
          <Link to='/'><WidgetsIcon />Meu Faturamento</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to='/cadastro'><FolderOpenIcon />Cadastro</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}