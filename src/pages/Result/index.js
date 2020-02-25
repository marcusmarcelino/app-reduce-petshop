import React, { Component } from 'react';
import './styles.css';
//import NavMainRouter from '../../components/NavMainRouter';<NavMainRouter />
import FilterNav from '../../components/FilterNav';
import ContentValueTotal from '../../components/ContentValueTotal';
import GraphicCircle from '../../components/GraphicCircle';
import GraphicBar from '../../components/GraphicBar';

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