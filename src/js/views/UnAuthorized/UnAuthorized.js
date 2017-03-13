import React, {Component} from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import Cookies from 'js-cookie';
class UnAuthorized extends Component {

  render() {
    const role = [Cookies.get('role')];
    return (
      <Box>
        <Header />
        <h1>YOU ARE CONNECTED AS {role} AND ARE NOT ALLOWED TO GO THERE </h1>
        <a href="/"> go back to home </a>
          <a href="/login"> login page </a>
      </Box>
    );
  };
};
export default UnAuthorized;
