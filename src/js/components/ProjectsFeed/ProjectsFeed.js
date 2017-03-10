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
        this.state = {
            projects: ''
        };

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

            // Push result of search in a new array
            //-------------------------------------
            var filteredProjects = [];
            this.state.projects.forEach((project) => {
                if (project.title.toLowerCase().includes(this.props.searchTerms.toLowerCase())) {
                    filteredProjects.push(project);
                }
            });

            if(filteredProjects.length == 0) {
                filteredProjects = this.state.projects;
            }
            ////////////////////////////////////////

            return (
                <Columns masonry={false}
                         size='medium'
                         justify='center'>

                    {filteredProjects.map((project) => {
                            return (
                                <Box key={project.title} align='center'
                                     pad='medium'
                                     margin='small'
                                     colorIndex='light-2'>
                                    <Card
                                        heading={project.title}
                                        description={project.description}
                                        link={<Anchor href='#' label='Détails'/>}
                                    />

                                    <Columns masonry={true}
                                             size='medium'>
                                        <Box align='left'
                                             pad='small'
                                             margin='small'
                                             colorIndex='light-2'>
                                            <div className="align-left">
                                                <DeliverIcon /> <Timestamp value={project.deadline} fields='date'/>
                                                <br/>
                                                <UserManagerIcon /> {project.projectManager.firstname} {project.projectManager.lastname}
                                                <br/>
                                                <UserIcon /> {project.nbWorker}
                                            </div>
                                        </Box>
                                        <Box align='left'
                                             pad='small'
                                             margin='small'
                                             colorIndex='light-2'>
                                            {project.tags.map((tag) => {
                                                return <div className="label label-success">{tag}</div>;
                                            })}
                                        </Box>
                                    </Columns>
                                </Box>
                            );
                        })
                    }

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
