import React from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Box from 'grommet/components/Box';

class DashboardLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            role: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }



    handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:23000/api/auth', {
            username: this.state.login,
            password: this.state.password
        }).then(this.handleRedirect);
    }

    handleRedirect(res) {
        const decodeToken = jwt_decode(res.data);
        const role = decodeToken.role;
        localStorage.setItem('user', JSON.stringify(decodeToken));
        localStorage.setItem('token', res.data);
        console.log(role);

        if (res.status == 200 && role == 'user' || res.status == 200 && role == 'Project manager' || res.status == 200 && role == 'Project Manager') {
            browserHistory.push('/profile');
        } else if (res.status == 200 && role == 'admin' || res.status == 200 && role == 'Admin' || res.status == 200 && role == 'administrator' || res.status == 200 && role == 'Administrator') {
            browserHistory.push('/userManagement');
        } else {
            if (res.status == 200) {
                browserHistory.push('/profile');
            } else {
                console.log('oups');
            }
        }
    }

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
                                value={this.state.login} />
                        </label>
                        <br />
                        <label>
                            Password:
                        <input
                                name="password"
                                type="password"
                                required
                                onChange={this.handleChange}
                                value={this.state.password} />
                        </label>

                        <input type="submit" value="Login" />
                    </form>
                </Box>
            );
        };
    };
    export default DashboardLogin;
