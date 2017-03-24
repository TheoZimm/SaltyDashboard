import React from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Box from 'grommet/components/Box';

class DashboardLogin extends React.Component {
    constructor(props) {
        super(props);

        // Define states
        this.state = {
            login: '',
            password: '',
            role: ''
        };

        // Bind event on form
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Set value in state
    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // Submit info to server
    handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:23000/api/auth', {
            username: this.state.login,
            password: this.state.password
        }).then(this.handleRedirect);
    }

    handleRedirect(res) {

        // Decode info with JWT token
        const decodeToken = jwt_decode(res.data);
        const role = decodeToken.role;

        // Set info in localStorage (session)
        localStorage.setItem('user', JSON.stringify(decodeToken));
        localStorage.setItem('token', res.data);

        // Wrong password or login
        if (res.status == 401) {
            alert('Wrong password or your account does not exist');

            // If project manager
        } else if (res.status == 200 && role == 'user' || res.status == 200 && role == 'Project manager' || res.status == 200 && role == 'Project Manager') {
            browserHistory.push('/profile');

            // If administrator
        } else if (res.status == 200 && role == 'admin' || res.status == 200 && role == 'Admin' || res.status == 200 && role == 'administrator' || res.status == 200 && role == 'Administrator') {
            browserHistory.push('/userManagement');
        } else {
            // Default
            if (res.status == 200) {
                browserHistory.push('/profile');
            }
        }
    }


    // Display forms
    render() {
        return (
            <Box direction='row'
                 justify='center'
                 align='center'
                 pad='medium'
                 margin='small'
                 colorIndex='light-1'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Login:
                        <input
                            name="login"
                            type="text"
                            required
                            onChange={this.handleChange}
                            value={this.state.login}/>
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

                    <input type="submit" value="Login"/>
                </form>
            </Box>
        );
    };
}
;
export default DashboardLogin;
