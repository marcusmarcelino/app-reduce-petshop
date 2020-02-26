import React, { Component } from 'react';
import './styles.css';
//import NavMainRouter from '../../components/NavMainRouter';<NavMainRouter />
import FilterNav from '../../components/Result/FilterNav';
import ContentValueTotal from '../../components/Result/ContentValueTotal';
import GraphicCircle from '../../components/Result/GraphicCircle';
import GraphicBar from '../../components/Result/GraphicBar';

class Result extends Component {
  render() {
    return (
      <div className="Result">
        <FilterNav />
        <div className="result-content">
          <ContentValueTotal />
          <div className="content-graphics">
            <GraphicCircle />
            <GraphicBar />
          </div>
        </div>
      </div>  
    );
  }
}

export default Result;