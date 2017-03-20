import React from 'react';
import Box from 'grommet/components/Box';
import { RoleAwareComponent } from 'react-router-role-authorization';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

import Heading from 'grommet/components/Heading';

import Button from 'grommet/components/Button';
import axios from 'axios';
import EditIcon from 'grommet/components/icons/base/Edit';
import FormCloseIcon from 'grommet/components/icons/base/FormClose';
class UsersList extends RoleAwareComponent {

    constructor(props) {
        super(props);
        this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
        this.allowedRoles = ['admin', 'Administrator'];
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
        let users = this.state.users;
        if (users.length) {
            return (
                <Box direction='row'
                    justify='start'
                    align='center'
                    wrap={true}
                    reverse={false}
                    pad='small'
                    margin='small'
                    colorIndex='light-2'>
                       <Heading>List of project managers</Heading>
                    <Table>
 
                        <thead>
                            <tr>
                                <th>
                                    Name
      </th>
                                <th>
                                    role
      </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => {
                                if (user.role == 'Project Manager' || user.role == 'Project manager') {
                                    return (
                                        <TableRow>
                                            <td key={user.username}>
                                                {user.username}
                                            </td>
                                            <td className='secondary'>
                                                {user.role}
                                            </td>
                                        </TableRow>
                                    );
                                }
                            })}
                        </tbody>
                    </Table>
                </Box>
            );
        } else {
            return (
                <Box direction='row'
                    justify='start'
                    align='center'
                    wrap={true}
                    reverse={false}
                    pad='large'
                    margin='large'
                    colorIndex='light-2'>
                    <h2>Aucun user</h2>
                </Box>
            );
        }
    };
}
export default UsersList;
