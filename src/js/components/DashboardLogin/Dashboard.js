import React from 'react';
import browserHistory from 'react-router';
import axios from 'axios';
import Box from 'grommet/components/Box';

class DashboardLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: ''
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
        if (res.status == 200) {
            browserHistory.push('/profile');
        } else {
            console.log('oups');
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
    }
}
;

export default DashboardLogin;
