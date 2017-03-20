import React from 'react';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Header from '../../components/Header/';
import { RoleAwareComponent } from 'react-router-role-authorization';
import UsersList from '../../components/UsersList';
import UserCreate from '../../components/UserCreate';

class UserManagement extends RoleAwareComponent {

  constructor(props) {
    super(props);
    this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
    this.allowedRoles = ['administrator', 'Administrator', 'Admin', 'admin'];

  }

  render() {

    const jsx = (
      <Box>
        <Header />
        <Columns justify='center' size='large'>
          <UserCreate />
          <UsersList />
        </Columns>
      </Box>
        );
    return this.rolesMatched() ? jsx : null;
  }
};
export default UserManagement;
