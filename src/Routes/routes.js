import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './styles.css';
import Result from '../pages/Result/index';
import Clientes from '../pages/Clientes/index';
import BarraHorizontal from '../components/BarraHorizontal/index';

const Routes = () => (
  <div className="Routes">
    <BarraHorizontal />
    <div className="main-router">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Result} />
          <Route path="/clientes" component={Clientes} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
);

export default Routes;