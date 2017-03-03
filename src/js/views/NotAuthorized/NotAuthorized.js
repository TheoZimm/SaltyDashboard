import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
class NotAuthorized extends React.Component {

  render() {

    return (
      <Box>
        <Header />
        <h1>YOU ARE NOT ALLOWED TO GO THERE </h1>
      </Box>
    );
  };
};
export default NotAuthorized;
