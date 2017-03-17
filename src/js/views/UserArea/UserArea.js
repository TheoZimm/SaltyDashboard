import React from 'react';
import { AuthorizedComponent } from 'react-router-role-authorization';
import routes from '../../routes';
class UserArea extends AuthorizedComponent {

  constructor(props) {
    super(props);
    this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
    this.notAuthorizedPath = '/unauthorized';
  }

  render() {
    return (
      <div>
        <routes {...this.props}/>
      </div>
    );
  };
};
export default UserArea;
