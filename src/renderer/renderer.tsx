import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './style.css';

import Home from '../pages/home/index';

render(
    <BrowserRouter>
        <Switch>
            <Route component={Home} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);
