import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import AppView from './views/App/';
import Login from './views/Login/';
import Disconnect from './components/Disconnect';
import Profile from './views/Profile/';
import AdminArea from './views/AdminArea';
import UserManagement from './views/UserManagement';
import UserArea from './views/UserArea';
import UnAuthorized from './views/UnAuthorized/';
// import AdminArea from './components/AdminArea';
// import UserArea from './components/UserArea';
// import NotAuthorized from './views/NotAuthorized/';

const rootPath = '/';

const routes = (
  <Router history={browserHistory} >
    <Route path={rootPath} component={App}>
      <IndexRoute component={AppView} />
      <Route path="/login" component={Login} />
      <Route path="/disconnect" component={Disconnect} />
      <Route authorize={['user']} component={UserArea}>
        <Route path='/profile' component={Profile} />
      </Route>
      <Route authorize={['admin', 'Project manager', 'Administrator', 'administrator']} component={AdminArea}>
        <Route path='/userManagement' component={UserManagement} />
      </Route>

    </Route>
    <Route path="/unauthorized" component={UnAuthorized} />
  </Router>

);

export default routes;
