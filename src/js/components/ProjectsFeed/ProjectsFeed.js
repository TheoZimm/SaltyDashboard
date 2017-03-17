import React from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Columns from 'grommet/components/Columns';
import UserManagerIcon from 'grommet/components/icons/base/UserManager';
import UserIcon from 'grommet/components/icons/base/User';
import Anchor from 'grommet/components/Anchor';
import DeliverIcon from 'grommet/components/icons/base/Deliver';
import Timestamp from 'grommet/components/Timestamp';
import Label from 'grommet/components/Label';


class ProjectsFeed extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let { projects, searchTerms, searchTags, searchDate } = this.props;

        if(searchTerms) {
            projects = projects.filter(project => {
                return project.title.toLowerCase().indexOf(searchTerms.toLowerCase()) >= 0 || project.description.toLowerCase().indexOf(searchTerms.toLowerCase()) >= 0;
            });
        }

        if(searchTags.length) {
            projects = projects.filter(project => {
                return project.tags.filter(tag => {
                   return searchTags.indexOf(tag) >= 0;
                }).length;
            });
        }

        if(searchDate) {

            let projectSearchDate = new Date(searchDate);

            projects = projects.filter(project => {

                let projectDeadline = new Date(project.deadline);

                return projectDeadline >= projectSearchDate;
            });
        }

        if (projects.length) {

            ////////////////////////////////////////

            return (

            <Box>
                <Box><Label>Projet(s) : {projects.length}</Label></Box>

                <Columns masonry={false}
                         size='medium'>



                    {projects.map((project) => {
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
            </Box>
            );
        } else {
            return (
                <h1>Aucun projet</h1>
            );
        }

    };

}

export default ProjectsFeed;
