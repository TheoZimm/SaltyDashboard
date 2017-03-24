import React from 'react';
import {AuthorizedComponent} from 'react-router-role-authorization';
import routes from '../../routes';
class UserArea extends AuthorizedComponent {

    constructor(props) {
        super(props);

        // Get user role from localStorage(session) and define allowed roles
        this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
        this.notAuthorizedPath = '/unauthorized';
    }

    // Send props to routes
    // This define where to routes redirect depending user roles
    render() {
        return (
            <div>
                <routes {...this.props}/>
            </div>
        );
    };
}
;
export default UserArea;
