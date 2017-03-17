import React, {Component} from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
class UnAuthorized extends Component {

  render() {
      var CurrentRole = '';
  
  if (localStorage.getItem('user') !== null) {
    CurrentRole = JSON.parse(localStorage.getItem('user')).role;
  } else {
    CurrentRole = 'Visitor';
  }

    return (
      <Box>
        <Header />
        <h1>YOU ARE CONNECTED AS {CurrentRole} AND ARE NOT ALLOWED TO GO THERE </h1>
        <a href="/"> go back to home </a>
          <a href="/login"> login page </a>
      </Box>
    );
  };
};
export default UnAuthorized;
