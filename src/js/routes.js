import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './views/Home/';
import Login from './views/Login/';
import Disconnect from './components/Disconnect';
import Profile from './views/Profile/';
import AdminArea from './views/AdminArea';
import UserManagement from './views/UserManagement';
import UserArea from './views/UserArea';
import UnAuthorized from './views/UnAuthorized/';

const rootPath = '/';

const routes = (
  <Router history={browserHistory} >
    <Route path={rootPath} component={App}>
      <IndexRoute component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/disconnect" component={Disconnect} />
      <Route authorize={['user']} component={UserArea}>
        <Route path='/profile' component={Profile} />
      </Route>
      <Route authorize={['admin', 'Project manager', 'Administrator']} component={AdminArea}>
        <Route path='/userManagement' component={UserManagement} />
      </Route>
    </Route>
    <Route path="/unauthorized" component={UnAuthorized} />
  </Router>

);

export default routes;
