import React from 'react';
import './styles.css';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import Result from '../pages/Result/index';
import Clientes from '../pages/Clientes/index';
import BarraHorizontal from '../components/Routes/BarraHorizontal/index';
import Nav from '../components/Routes/Nav/index';
import NavMainRouter from '../components/Routes/NavMainRouter';
import history from './history';

const Routes = () => (
  <div className="Routes">
      <ConnectedRouter history={history}>
        <div className="main-router">
          <Nav />
          <div className="main">
            <BarraHorizontal />
            <div className="main-router-grid">
              <div className="main-router-grid-left">
                <NavMainRouter />
              </div>
              <div className="main-router-grid-right">
                <Switch>
                  <Route exact path="/" component={Result} />
                  <Route path="/clientes" component={Clientes} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </ConnectedRouter>
  </div>
);
export default Routes;