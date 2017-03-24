import React from 'react';
import Box from 'grommet/components/Box';
import {RoleAwareComponent} from 'react-router-role-authorization';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Heading from 'grommet/components/Heading';
import axios from 'axios';
class UsersList extends RoleAwareComponent {

    constructor(props) {
        super(props);

        // Get user role from localStorage(session) and define allowed roles
        this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
        this.allowedRoles = ['admin', 'Administrator'];

        // Define states
        this.state = {
            users: ''
        };

    }

    componentDidMount() {
        var self = this;

        // Get all users
        axios.get('http://localhost:23000/api/users')
            .then(function (response) {
                self.setState({
                    users: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        let users = this.state.users;

        // Did we have some project manager ?
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
                                Role
                            </th>
                        </tr>
                        </thead>
                        <tbody>

                        {/* Display list of project manager  */}
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
                            } else {
                                return "";
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
                    <h2>No users</h2>
                </Box>
            );
        }
    };
}
export default UsersList;
