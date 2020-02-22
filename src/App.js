import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/index';
import Routes from './Routes/routes';
import { Provider } from 'react-redux';
import store from './store/index';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Provider store={store}>
          <Nav />
          <Routes />
        </Provider>
      </div>
    );
  }
}

export default App;
