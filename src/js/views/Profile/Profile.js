import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import ProjectManagement from '../../components/ProjectManagement/';
import {RoleAwareComponent} from 'react-router-role-authorization';
import axios from 'axios';

class Profile extends RoleAwareComponent {

    constructor(props) {
        super(props);

        this.state = {
            projects: []
        };

        // Get user role from localStorage(session) and define allowed roles
        this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
        this.allowedRoles = ['user', 'utilisateur', 'Project Manager', 'Project manager'];
    }


    componentWillMount() {
        var self = this;

        // Get all projects and filter by current project manager
        axios.get('http://localhost:23000/api/projects')
            .then(function (response) {

                self.setState({
                    projects: response.data.filter(project => {
                        return project.projectManager.username == [JSON.parse(localStorage.getItem('user')).username].toString();
                    })
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        const profileView = (
            <Box>
                <Header />
                <ProjectManagement projects={this.state.projects}/>
            </Box>
        );

        // Return view if allowed
        return this.rolesMatched() ? profileView : null;
    }
}
;
export default Profile;
