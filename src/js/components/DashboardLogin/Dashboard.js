import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import axios from 'axios';

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
        }).then(this.handleRedirect)
    }
      
    handleRedirect(res) {
        if (res.status == 200) {
           browserHistory.push('/profile')
        }else {
            console.log('oups');
        }
    }

    render() {
        return (
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
        );
    }
};

export default DashboardLogin;

