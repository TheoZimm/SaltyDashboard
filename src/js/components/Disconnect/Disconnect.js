import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Disconnect extends Component {

  componentWillMount() {
      this.logout()
      browserHistory.push('/login');
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  isLoggedIn() {
    return this.getUser() != null;
  }

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
};

export default Disconnect;
