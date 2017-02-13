import React from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';

export default function AppHeader (props) {
  return (
    <Header justify="center" colorIndex="neutral-4">
      <Box size={{width: {max: 'xxlarge'}}} direction="row"
        responsive={false} justify="start" align="center"
        pad={{horizontal: 'medium'}} flex="grow">
    
        <Box pad="small" />
        <Menu label="Label" inline={true} direction="row" flex="grow">
          <Anchor href="#">Welcome to SaltyApp</Anchor>
        </Menu>
        <Box flex="grow" align="end">
      <Anchor href="/connect">click here to connect</Anchor>
        </Box>
      </Box>
    </Header>
  );
};

