import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './views/Home/';
import Login from './views/Login/';
import Profile from './views/Profile/';
// import AdminArea from './components/AdminArea';
// import UserArea from './components/UserArea';
import NotAuthorized from './views/NotAuthorized/';

const rootPath = '/';

const routes = (
  <Router history={browserHistory} >
    <Route path={rootPath} component={App}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/login" component={Login} />
     <Route path="/not-authorized" component={NotAuthorized} />
    <Route authorize={['user']} component={UserArea}>
      <Route path='/profile' component={Profile}/>
    </Route>
    <Route authorize={['admin']} component={AdminArea}>
      <Route path='/userManagement' component={UserManagement}/>
    </Route>

  </Router>

);

export default routes;
