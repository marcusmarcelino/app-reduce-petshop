import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';

class Ordenacao extends Component {
  render() {
    const { ordenacao: valor} = this.props;
    return (
      <div className="Ordenacao">
        <select 
        value={valor || "a-z"}
        onChange={this.props.setOrdenacao}
        name="ops-ord" 
        id="ops-ord">
          <option value="a-z">Alfabetica de A-Z</option>
          <option value="z-a">Alfabetica de Z-A</option>
          <option value="criacao">Data de Criação</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ordenacao: state.clientes.ordenacao
});

export default connect(mapStateToProps, actions)(Ordenacao);