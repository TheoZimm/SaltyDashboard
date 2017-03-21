import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import AppView from './views/App/';
import Login from './views/Login/';
import Details from './views/Details/';
import Disconnect from './components/Disconnect';
import Profile from './views/Profile/';
import AdminArea from './views/AdminArea';
import UserManagement from './views/UserManagement';
import ProjectsManagement from './views/ProjectsManagement';
import UserArea from './views/UserArea';
import UnAuthorized from './views/UnAuthorized/';

const rootPath = '/';

const routes = (
    <Router history={browserHistory} >
        <Route path={rootPath} component={App}>
            <IndexRoute component={AppView} />
            <Route path="/login" component={Login} />
            <Route path="/details/:id" component={Details} />
            <Route path="/disconnect" component={Disconnect} />
            <Route authorize={['user', 'utilisateur', 'Project Manager', 'Project manager']} component={UserArea}>
                <Route path='/profile' component={Profile} />
            </Route>
            <Route authorize={['admin', 'Administrator', 'administrator', 'Admin']} component={AdminArea}>
                <Route path='/userManagement' component={UserManagement} />
                <Route path='/ProjectsManagement' component={ProjectsManagement} />
            </Route>
        </Route>
        <Route path="/unauthorized" component={UnAuthorized} />
    </Router>

);

export default routes;
