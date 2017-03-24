import React from 'react';
import Box from 'grommet/components/Box';
import {RoleAwareComponent} from 'react-router-role-authorization';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Heading from 'grommet/components/Heading';
import axios from 'axios';
import FormTrashIcon from 'grommet/components/icons/base/FormTrash';
import Button from 'grommet/components/Button';
class ProjectsList extends RoleAwareComponent {

    constructor(props) {
        super(props);

        // Get user role from localStorage(session) and define allowed roles
        this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
        this.allowedRoles = ['admin', 'Administrator'];

        // Define states
        this.state = {
            projects: []
        };

    }

    // Get all projects
    componentDidMount() {

        axios.get('http://localhost:23000/api/projects')
            .then((response) => {
                this.setState({
                    projects: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    // Delete project by id
    deleteProject(id) {

        axios.delete('http://localhost:23000/api/projects/', {
            data: {id: id}
        }).then((response) => {
            alert('The project has been deleted');

            return this.setState(s => ({
                projects: s.projects.filter(p => p.id !== id)
            }));
        });
    }


    // Delete all projects
    deleteProjects() {
        axios.delete('http://localhost:23000/api/projects/')
            .then((response) => {
                alert('All projects are deleted');
                return this.setState({
                    projects: []
                });
            });
    }

    render() {
        let projects = this.state.projects;

        // Did we have projects ?
        if (projects.length) {
            return (
                <Box direction='row'
                     justify='start'
                     align='center'
                     wrap={true}
                     margin='large'
                     pad='large'
                     reverse={false}
                     colorIndex='light-2'>
                    <Heading>Projects List</Heading>
                    <TableRow>
                        <td>
                            <Button icon={<FormTrashIcon size="medium"/>}
                                    label='Delete everything'
                                    onClick={() => this.deleteProjects()}
                                    size="large"
                                    primary={true}/>
                        </td>
                    </TableRow>
                    <Table>

                        <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Made by
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {projects.map((project) => {
                            return (
                                <TableRow>
                                    <td key={project.id}>
                                        {project.title}
                                    </td>
                                    <td className='secondary'>
                                        {project.projectManager.username}
                                    </td>
                                    <td>
                                        <Button icon={<FormTrashIcon size="large"/>}
                                                onClick={() => this.deleteProject(project.id)}
                                                accent={false}
                                                plain={true}
                                                secondary={true}
                                                primary={false}/>
                                    </td>
                                </TableRow>
                            );
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
                     pad='small'
                     margin='small'
                     colorIndex='light-2'>
                    <h1>No project</h1>
                </Box>
            );
        }
    };
}
export default ProjectsList;
