import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import { RoleAwareComponent } from 'react-router-role-authorization';
import Cookies from 'js-cookie';
class UserManagement extends RoleAwareComponent {

  constructor(props) {
    super(props);
    this.userRoles = [Cookies.get('role')];
    this.allowedRoles = ['admin', 'Project manager', 'Administrator'];

  }

  render() {

    const jsx = (
      <Box>
        <Header />
        <h1>MANAGE YOUR USERS</h1>
      </Box>
    );  
  return this.rolesMatched() ? jsx : null;
  }
};
export default UserManagement;
