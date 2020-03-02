import React, { Component } from 'react';
import Routes from './Routes/routes';
import { Provider } from 'react-redux';
import store from './store/index';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}

export default App;
