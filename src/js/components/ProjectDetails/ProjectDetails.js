import React from 'react';
import Box from 'grommet/components/Box';
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import UserManagerIcon from 'grommet/components/icons/base/UserManager';
import Columns from 'grommet/components/Columns';
import UserIcon from 'grommet/components/icons/base/User';
import TagIcon from 'grommet/components/icons/base/Tag';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import DeliverIcon from 'grommet/components/icons/base/Deliver';
import Timestamp from 'grommet/components/Timestamp';

class ProjectDetails extends React.Component {


    constructor(props) {
        super(props);
    }



    render() {

        var status = "";

        if (this.props.project.status == 'open') {
            status = <div className="status-open">{this.props.project.status}</div>;
        } else {
            status = <div className="status-close">{this.props.project.status}</div>;
        }

        if (this.props.project.projectManager !== undefined) {
            return (
                <Box>
                    <Hero background={<Image src='/img/code-bg.jpg'
                                             fit='cover'
                                             full={true}/>}
                          backgroundColorIndex='dark'>
                        <Box direction='row'
                             justify='center'
                             align='center'>
                            <Box basis='3/4'
                                 align='end'
                                 pad='medium'/>
                            <Box basis='1/2'
                                 align='right'
                                 pad='medium'>
                                <Heading margin='none'>
                                    {this.props.project.title}
                                </Heading>
                                <Paragraph>
                                    {this.props.project.description}
                                </Paragraph>
                                {status}
                            </Box>
                        </Box>
                    </Hero>

                    <Columns
                        align="center">
                        <Box align='center'
                             pad='medium'
                             margin='small'
                             colorIndex='light-1'>
                            <UserManagerIcon
                                size="large"/><br/>
                            {this.props.project.projectManager.firstname} {this.props.project.projectManager.lastname}
                        </Box>
                        <Box align='center'
                             pad='medium'
                             margin='small'
                             colorIndex='light-1'>
                            <UserIcon
                                size="large"/><br/>
                            {this.props.project.nbWorker}
                        </Box>
                        <Box align='center'
                             pad='medium'
                             margin='small'
                             colorIndex='light-1'>
                            <TagIcon
                                size="large"/><br/>
                            {this.props.project.tags.map((tag) => {
                                return <div className="label label-success">{tag}</div>;
                            })}
                        </Box>
                        <Box align='center'
                             pad='medium'
                             margin='small'
                             colorIndex='light-1'>
                            <DeliverIcon
                                size="large"/><br/>
                            <Timestamp value={this.props.project.deadline} fields='date'/>
                        </Box>
                    </Columns>

                    <Box
                        pad="medium">
                        <Accordion openMulti={true}>
                            <AccordionPanel heading='Description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </AccordionPanel>
                            <AccordionPanel heading='Backlogs'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </AccordionPanel>
                        </Accordion>
                    </Box>

                </Box>);
        } else {
            return (
                <Box>
                    <h1>Chargement</h1>
                </Box>
            );
        }


    }
}

export default ProjectDetails;
