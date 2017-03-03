import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import axios from 'axios';
import UserManagerIcon from 'grommet/components/icons/base/UserManager';
import UserIcon from 'grommet/components/icons/base/User';
import Anchor from 'grommet/components/Anchor';
import DeliverIcon from 'grommet/components/icons/base/Deliver';
import Timestamp from 'grommet/components/Timestamp';

class ProjectsFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {projects: ''};

    }

    componentDidMount() {
        var self = this;

        axios.get('http://localhost:23000/api/projects')
            .then(function (response) {
                self.setState({
                    projects: response.data
                });
            })
            .catch(function (error) {
                // Make redirect to profile page for test
            });
    }


    render() {

        if (this.state.projects.length != 0) {

            return (
                <Columns masonry={false}
                         size='medium'
                         justify='center'>
                    {this.state.projects.map((project) => {
                        return <Box key={project.id} align='center'
                                    pad='medium'
                                    margin='small'
                                    colorIndex='light-2'>
                            <Card
                                heading={project.title}
                                description={project.description}
                                link={<Anchor href='#' label='Détails'/>}
                            />
                            <DeliverIcon /> <Timestamp value={project.deadline} fields='date'/>
                            <UserManagerIcon /> {project.projectManager.firstname} {project.projectManager.lastname}
                            <UserIcon /> {project.nbWorker}

                        </Box>;
                    })}
                </Columns>
            );
        } else {
            return (
                <h1>Aucun projet</h1>
            );
        }

    };

}

export default ProjectsFeed;
