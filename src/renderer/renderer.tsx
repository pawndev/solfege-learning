import * as React from 'react';
import { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './style.css';

import Home from '../pages/home/index';
import Menu from '../pages/menu/index';

render(
  <BrowserRouter>
    <Fragment>
      {window.location.pathname.includes('index.html') && <Redirect to="/" />}
      <Switch>
        <Route component={Home} exact={true} path="/home"/>
        <Route component={Menu} exact={true} path="/" />
        <Route component={Home} />
      </Switch>
    </Fragment>
  </BrowserRouter>,
  document.getElementById('app')
);
