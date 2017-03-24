import React from 'react';
import Box from 'grommet/components/Box';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Timestamp from 'grommet/components/Timestamp';
import TrashIcon from 'grommet/components/icons/base/Trash';
import EditIcon from 'grommet/components/icons/base/Edit';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import AddIcon from 'grommet/components/icons/base/Add';
import Layer from 'grommet/components/Layer';
import NewProject from '../NewProject';
import axios from 'axios';

class ProjectManagement extends React.Component {

    constructor(props) {
        super(props);

        // Define states
        this.state = {
            layer: true,
            projects: [],
            tags: []
        };

        // Bind event when user want to display the layer (modal)
        this.handleLayer = this.handleLayer.bind(this);

    }

    // Get projects
    componentWillReceiveProps(nextProps) {
        this.setState({
            projects: nextProps.projects
        });
    }

    // Get tags
    componentDidMount() {
        self = this;

        axios.get('http://localhost:23000/api/tags')
            .then(function (response) {
                self.setState({
                    tags: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Delete project by id
    deleteProject(id) {
        axios.delete('http://localhost:23000/api/projects/', {
            data: {id: id}
        })
            .then((response) => {
                alert('The project has been deleted');

                this.setState(s => ({
                    projects: this.state.projects.filter(p => p.id !== id)
                }));

            });
    }

    // Display the layer (modal)
    handleLayer() {
        this.setState({layer: false});
    }

    render() {

        // Did we have projects and tags ?
        if (this.state.projects.length > 0 && this.state.tags.length > 0) {
            return (

                <Box pad="medium">

                    {/* Layer (modal) */}
                    <Layer closer={true}
                           flush={false}
                           hidden={this.state.layer}>
                        <NewProject tags={this.state.tags}/>
                    </Layer>


                    <Heading>
                        Projects list
                    </Heading>

                    {/* Action for display layer */}
                    <Button icon={<AddIcon />}
                            label='New project'
                            onClick={this.handleLayer}
                    />


                    {/* Display project of current project manager */}
                    <Table>
                        <thead>
                        <tr>
                            <th>
                                Title
                            </th>
                            <th>
                                Deadline
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Status
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.projects.map((project) => {

                            return (
                                <TableRow>
                                    <td key={project.id}>
                                        {project.title}
                                    </td>
                                    <td>
                                        <Timestamp value={project.deadline} fields='date'/>
                                    </td>
                                    <td >
                                        {project.description}
                                    </td>
                                    <td>
                                        {project.status}
                                    </td>
                                    <td>
                                        {/* Action for edit and delete project */}
                                        <Button icon={<EditIcon />}
                                                primary={false}
                                                secondary={false}/>
                                        <Button icon={<TrashIcon />}
                                                onClick={() => this.deleteProject(project.id)}
                                                primary={false}
                                                secondary={false}/>
                                    </td>
                                </TableRow>
                            );
                        })}

                        </tbody>
                    </Table> </Box>);
        } else {
            return (
                <Box pad="medium">

                    <Layer closer={true}
                           flush={false}
                           hidden={this.state.layer}>
                        <NewProject tags={this.state.tags}/>
                    </Layer>

                    <h1>No project</h1>
                    <Button icon={<AddIcon />}
                            label='New project'
                            onClick={this.handleLayer}
                    />
                </Box>
            );
        }

        return ("");

    }
}

export default ProjectManagement;

