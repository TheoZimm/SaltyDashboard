/*
import React from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import AddIcon from 'grommet/components/icons/base/Add';

export default function AppHeader(props) {

    var CurrentRole = '';
    // Set roles if localStorage (session) isn't empty
    if (localStorage.getItem('user') !== null) {
        CurrentRole = JSON.parse(localStorage.getItem('user')).role;
    } else {
        CurrentRole = 'Visitor';
    }

    return (
        <Header justify="center" colorIndex="neutral-4">

            <Box size={{width: {max: 'xxlarge'}}} direction="row"
                 responsive={false} justify="start" align="center"
                 pad={{horizontal: 'medium'}} flex="grow">
                <Box pad="small"/>
                <Menu label="Label" inline={true} direction="row" flex="grow">
                    <Anchor href="/">Welcome to SaltyApp</Anchor>
                </Menu>
                {CurrentRole == 'user' || CurrentRole == 'Project manager' || CurrentRole == 'Project Manager' ? (
                    <Box flex="grow" align="end">
                        <Anchor href="/disconnect">disconnect & login </Anchor>
                        <Anchor href="/profile">Logged as {CurrentRole}</Anchor>
                    </Box>
                ) : CurrentRole == 'admin' || CurrentRole == 'Administrator' || CurrentRole == 'administrator' || CurrentRole == 'Admin' ? (
                    <Box flex="grow" align="end">
                        <Box>
                            <Anchor href="/userManagement">Logged as {CurrentRole}</Anchor>
                        </Box>
                        <Menu icon={<AddIcon />}
                              dropAlign={{"right": "right", "top": "top"}}>
                            <Anchor href="/disconnect">disconnect & login </Anchor>

                            <Anchor href='/ProjectsManagement'>
                                Display projects List
                            </Anchor>
                        </Menu>

                    </Box>

<<<<<<< HEAD
                ) : (
                    <Box flex="grow" align="end">
                        <Anchor href="/login">Login</Anchor>
                    </Box>
                )}
            </Box>
        </Header>
    );
};
=======
*/

