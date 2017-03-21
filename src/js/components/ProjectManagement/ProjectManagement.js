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
import newProject from '../newProject';

class ProjectManagement extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            layer: true
        };

        this.handleLayer = this.handleLayer.bind(this);
    }


    handleChangeDate(e) {
        console.log(e);
    }

    handleLayer() {
        this.setState({ layer: false });
    }

    render() {
        if (this.props.projects.length > 0) {

            return (

                <Box pad="medium">

                    <Layer closer={true}
                           flush={false}
                           hidden={this.state.layer}>
                        <newProject />
                    </Layer>

                    <Heading>
                        Projects list
                    </Heading>

                    <Button icon={<AddIcon />}
                            label='New project'
                            onClick={this.handleLayer}
                            />

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
                        {this.props.projects.map((project) => {

                            return (
                                <TableRow>
                                    <td>
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
                                        <Button icon={<EditIcon />}
                                                onClick={this.handleChangeDate}
                                                href='#'
                                                primary={false}
                                                secondary={false} />
                                        <Button icon={<TrashIcon />}
                                                onClick={this.handleChangeDate}
                                                href='#'
                                                primary={false}
                                                secondary={false} />
                                    </td>
                                </TableRow>
                            );
                        })}

                        </tbody>
                    </Table> </Box>);
        } else {
            return (
                <Box>
                    <h1>Vous ne disposez pas de projet</h1>
                </Box>
            );
        }

        return ("");


    }
}

export default ProjectManagement;

