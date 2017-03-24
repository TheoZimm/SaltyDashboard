import React from 'react';
import Box from 'grommet/components/Box';
import {RoleAwareComponent} from 'react-router-role-authorization';
import Heading from 'grommet/components/Heading';
import {browserHistory} from 'react-router';
import axios from 'axios';
class UserCreate extends RoleAwareComponent {

    constructor(props) {
        super(props);

        // Get user role from localStorage(session) and define allowed roles
        this.userRoles = [JSON.parse(localStorage.getItem('user')).role];
        this.allowedRoles = ['admin', 'Administrator', 'Admin'];

        this.rendering = this.props.syncRendering;


        // Initialize state for the crud
        this.state = {
            username: '',
            password: '',
            role: 'Project Manager'
        };


        // Bind event on form
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }


    handleChange(event) {

        // Set value from form
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        // Send request to add user
        axios.post('http://localhost:23000/api/user', {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role
        })
            .catch(function (error) {
                alert('this user is already in the database');
            }).then(this.handleRedirect);

    }

    handleRedirect(res) {

        this.rendering.render();

        // Request succeed push to UserManagement view
        if (res.status == 200) {
            alert('The user has been created');
            browserHistory.push('/UserManagement');
        } else {
            alert('an error occured and the user has not been created');
        }
    }


    render() {

        const formUser = (
            <Box direction='row'
                 justify='start'
                 align='center'
                 wrap={true}
                 reverse={false}
                 pad='small'
                 margin='small'
                 colorIndex='light-2'>

                <form onSubmit={this.handleSubmit}>
                    <Heading>
                        Create a new Project Manager
                    </Heading>
                    <label>
                        Username:
                        <input
                            name="username"
                            type="text"
                            required
                            onChange={this.handleChange}
                            value={this.state.username}/>
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            name="password"
                            type="password"
                            required
                            onChange={this.handleChange}
                            value={this.state.password}/>
                    </label>
                    <input type="submit" value="Create"/>
                </form>
            </Box>
        );
        return this.rolesMatched() ? formUser : null;
    }
}
;
export default UserCreate;
