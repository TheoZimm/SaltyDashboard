import React from 'react';
import Box from 'grommet/components/Box';
import { RoleAwareComponent } from 'react-router-role-authorization';
import Cookies from 'js-cookie';
import List from 'grommet/components/List';
import Heading from 'grommet/components/Heading';
import ListItem from 'grommet/components/ListItem';
import axios from 'axios';

class UsersList extends RoleAwareComponent {

    constructor(props) {
        super(props);
        this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
        this.allowedRoles = ['admin', 'Project manager', 'Administrator'];
            this.state = {
            users: ''
        };

    }
  componentDidMount() {
        var self = this;

        axios.get('http://localhost:23000/api/users')
            .then(function (response) {
                self.setState({
                    users: response.data
                });
            })
            .catch(function (error) {
                // Make redirect to profile page for test
            });
    }


    render() {
        
        const jsx = (
            <Box direction='row'
                justify='start'
                align='center'
                wrap={true}
                reverse={false}
                pad='large'
                margin='large'
                colorIndex='light-2'>

                <List>
                    <Heading>
                        List of users
    </Heading>
                    <ListItem justify='between'
                        separator='horizontal'>
                        <span>
                            Alan
    </span>
                        <span className='secondary'>
                            happy
    </span>
                    </ListItem>
                    <ListItem justify='between'>
                        <span>
                            Chris
    </span>
                        <span className='secondary'>
                            cool
    </span>
                    </ListItem>
                    <ListItem justify='between'>
                        <span>
                            Eric
    </span>
                        <span className='secondary'>
                            odd
    </span>
                    </ListItem>
                </List>
            </Box>
        );
        return this.rolesMatched() ? jsx : null;
    }
};
export default UsersList;
