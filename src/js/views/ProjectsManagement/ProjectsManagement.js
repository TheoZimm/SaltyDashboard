import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import {RoleAwareComponent} from 'react-router-role-authorization';
import ProjectsList from '../../components/ProjectsList/';

class ProjectsManagement extends RoleAwareComponent {

    constructor(props) {
        super(props);

        // Get user role from localStorage(session) and define allowed roles
        this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
        this.allowedRoles = ['administrator', 'Administrator', 'Admin', 'admin'];

    }

    render() {

        const projectsManagementView = (
            <Box>
                <Header />
                <ProjectsList/>
            </Box>
        );

        // Return view if allowed
        return this.rolesMatched() ? projectsManagementView : null;
    }
}
;
export default ProjectsManagement;
