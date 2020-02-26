import React, { Component } from "react";
import { connect } from 'react-redux';

import "./styles.css";
import * as actions from '../../../actions/index';

import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

class Pesquisa extends Component {
  render() {
    const { pesquisa: valor, setPesquisa: onChange } = this.props;
    return (
      <div className="root">
        <IconButton 
          type="submit" 
          className="iconButton" 
          aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          value={valor || ""}
          onChange={onChange}
          placeholder="Digite o valor da pesquisa" 
          className="input"
        />
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  pesquisa: state.clientes.pesquisa
});

export default connect(mapStateToProps, actions)(Pesquisa);