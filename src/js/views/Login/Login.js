import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import DashboardLogin from '../../components/DashboardLogin';
class Login extends React.Component {

  render() {

    return (
      <Box>
        <Header />
        <DashboardLogin />
      </Box>
    );
  };
};
export default Login;
