import React from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Cookies from 'js-cookie';

export default function AppHeader(props) {
  let CurrentRole = '';
  if (Cookies.get('role') !== undefined) {
    CurrentRole = Cookies.get('role');
  } else {
    CurrentRole = 'Visitor';
  }
  console.log(CurrentRole);
  return (
    <Header justify="center" colorIndex="neutral-4">
      <Box size={{ width: { max: 'xxlarge' } }} direction="row"
        responsive={false} justify="start" align="center"
        pad={{ horizontal: 'medium' }} flex="grow">

        <Box pad="small" />
        <Menu label="Label" inline={true} direction="row" flex="grow">
          <Anchor href="/">Welcome to SaltyApp</Anchor>
        </Menu>
        {CurrentRole == ['user'] ? (
        <Box flex="grow" align="end">
          <Anchor href="/login">disconnect & login </Anchor>
          <Anchor href="/profile">Logged as {CurrentRole}</Anchor>
        </Box>
        ) : CurrentRole == ['admin'] || CurrentRole == ['Project manager'] || CurrentRole == ['Administrator'] ? (
        <Box flex="grow" align="end">
          <Anchor href="/login">disconnect & login </Anchor>
          <Anchor href="/userManagement">Logged as {CurrentRole}</Anchor>
        </Box>
        ) : ( 
        <Box flex="grow" align="end">
          <Anchor href="/login">Login</Anchor>
        </Box>
        )}
      </Box>
    </Header>
  );
};

