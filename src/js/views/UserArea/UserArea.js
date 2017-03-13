import React from 'react';
import { AuthorizedComponent } from 'react-router-role-authorization';
import routes from '../../routes';
import Cookies from 'js-cookie';
class UserArea extends AuthorizedComponent {

  constructor(props) {
    super(props);
    this.userRoles = [Cookies.get('role')];
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
