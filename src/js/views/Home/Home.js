import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import ProjectsFeed from '../../components/ProjectsFeed/';
class Home extends React.Component {
  render() {
    return (

      <Box>
        <Header />
        <ProjectsFeed />
      </Box>
    );
  };
};
export default Home;
