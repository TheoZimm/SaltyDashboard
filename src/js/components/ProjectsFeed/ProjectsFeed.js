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

        // Filter by terms
        if (searchTerms) {
            projects = projects.filter(project => {
                return project.title.toLowerCase().indexOf(searchTerms.toLowerCase()) >= 0 || project.description.toLowerCase().indexOf(searchTerms.toLowerCase()) >= 0;
            });
        }
        ////////////////////////////////////////////////////////////////////////////////////


        // Filter by tags
        if (searchTags.length) {
            projects = projects.filter(project => {
                return project.tags.filter(tag => {
                    return searchTags.indexOf(tag) >= 0;
                }).length;
            });
        }
        ////////////////////////////////////////////////////////////////////////////////////


        // Filter by date
        if (searchDate) {
            let projectSearchDate = new Date(searchDate);
            projects = projects.filter(project => {
                let projectDeadline = new Date(project.deadline);
                return projectDeadline >= projectSearchDate;
            });
        }
        ////////////////////////////////////////////////////////////////////////////////////


        // Did we have projects ?
        if (projects.length) {

            return (

                <Box>
                    <Box><Label>Number of project(s): {projects.length}</Label></Box>
                    <Columns masonry={false}
                             size='small'>

                        {projects.map((project) => {
                            return (

                                <Box key={project.title}
                                     pad='small'
                                     margin='small'
                                     colorIndex='light-2'
                                     className="max-height">

                                    {/* Go to the details of the project */}
                                    <Card
                                        heading={project.title}
                                        description={project.description}
                                        link={<Anchor href={'/details/' + project.id} label='More info'/>}
                                    />

                                    {/* Display deadline, project manager and number of workers */}
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

                                        {/* Display tags */}
                                        <Box
                                            pad='none'
                                            size='xsmall'
                                            wrap={true}
                                            margin='none'
                                            colorIndex='light-2'>
                                            <ul className="ui">
                                                {project.tags.map((tag) => {
                                                    return <li key={project.tags.id}
                                                               className="label label-success">{tag}</li>;
                                                })}
                                            </ul>
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
                    <h1>No project</h1>
                    <Button icon={<AddIcon />}
                            label='Create a new one'
                            href='#'/>
                </Box>
            );
        }
    };
}

export default ProjectsFeed;
