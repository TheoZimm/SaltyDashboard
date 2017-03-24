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
import AddIcon from 'grommet/components/icons/base/Add';
import Button from 'grommet/components/Button';


class ProjectsFeed extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        let {projects, searchTerms, searchTags, searchDate} = this.props;

        if (searchTerms) {
            projects = projects.filter(project => {
                return project.title.toLowerCase().indexOf(searchTerms.toLowerCase()) >= 0 || project.description.toLowerCase().indexOf(searchTerms.toLowerCase()) >= 0;
            });
        }

        if (searchTags.length) {
            projects = projects.filter(project => {
                return project.tags.filter(tag => {
                    return searchTags.indexOf(tag) >= 0;
                }).length;
            });
        }

        if (searchDate) {

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
                    <Box><Label>Nombre de projet(s) : {projects.length}</Label></Box>

                    <Columns masonry={false}
                             size='small'>


                        {projects.map((project) => {
                            return (
                                <Box key={project.title}
                                     pad='small'
                                     margin='small'
                                     colorIndex='light-2'
                                     className="max-height">
                                    <Card
                                        heading={project.title}
                                        description={project.description}
                                        link={<Anchor href={'/details/' + project.id} label='More info'/>}
                                    />

                                    <Columns masonry={true}
                                             size='medium'>
                                        <Box
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
                                        <Box
                                            pad='none'
                                            size='xsmall'
                                            wrap={true}
                                            margin='none'
                                            colorIndex='light-2'>
                                            {project.tags.map((tag) => {
                                                return <div key={project.tags.id}
                                                            className="label label-success">{tag}</div>;
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
                <Box>
                    <h1>Aucun projet</h1>
                    <Button icon={<AddIcon />}
                            label='Create a new one'

                            href='#'/>
                </Box>
            );
        }

    };

}

export default ProjectsFeed;
