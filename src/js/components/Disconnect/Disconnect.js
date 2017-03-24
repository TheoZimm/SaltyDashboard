import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class Disconnect extends Component {

    // Disconnect user when component is call
    componentWillMount() {
        this.logout();
        browserHistory.push('/login');
    }

    // Get user in localStorage (session)
    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    isLoggedIn() {
        return this.getUser() != null;
    }

    // Remove info from localStorage (session destroy)
    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    render() {
        return (
            <div>
                {console.log('userRemoved from localStorage')}
            </div>
        );
    };
}
;
export default Disconnect;
