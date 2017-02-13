import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './views/Home/';
import Login from './views/Login/';

const rootPath = '/';

const routes = (
  <Router history={browserHistory} >
    <Route path={rootPath} component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/connect" component={Login}/>
  </Router>
);

export default routes;
