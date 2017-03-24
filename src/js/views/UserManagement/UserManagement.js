import React from 'react';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Header from '../../components/Header/';
import {RoleAwareComponent} from 'react-router-role-authorization';
import UsersList from '../../components/UsersList';
import UserCreate from '../../components/UserCreate';
import UsersListRender from '../../../utils/UsersListRender';

class UserManagement extends RoleAwareComponent {


    constructor(props) {
        super(props);

        // Get user role from localStorage(session) and define allowed roles
        this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
        this.allowedRoles = ['administrator', 'Administrator', 'Admin', 'admin'];

        // Observer, allows sync rendering between component in the admin area
        this.UsersListRender = new UsersListRender();
    }


    render() {

        const userManagementView = (
            <Box>
                <Header />
                <Columns justify='center' size='medium'>
                    <UserCreate syncRendering={this.UsersListRender}/>
                    <UsersList syncRendering={this.UsersListRender}/>
                </Columns>
            </Box>
        );

        // Return view if allowed
        return this.rolesMatched() ? userManagementView : null;
    }
}
;
export default UserManagement;
