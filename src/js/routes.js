import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './views/Home/';
import Login from './views/Login/';
import Profile from './views/Profile/';

const rootPath = '/';

const routes = (
  <Router history={browserHistory} >
    <Route path={rootPath} component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/login" component={Login}/>
    <Route path="/profile" component={Profile}/>
  </Router>
);

export default routes;
