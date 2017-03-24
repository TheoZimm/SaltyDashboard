import React, {Component} from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
class UnAuthorized extends Component {

    constructor(props) {

        super(props);
    }

    render() {

        // Set roles if localStorage (session) isn't empty
        var CurrentRole = '';

        if (localStorage.getItem('user') !== null) {
            CurrentRole = JSON.parse(localStorage.getItem('user')).role;
        } else {
            CurrentRole = 'Visitor';
        }

        // Display error message if he doesn't have access
        return (
            <Box>
                <Header />
                <h1>YOU ARE CONNECTED AS {CurrentRole} AND ARE NOT ALLOWED TO GO THERE </h1>
                <a href="/"> Go back to home </a>
                <a href="/login"> Go to login page </a>
            </Box>
        );
    };
}
;
export default UnAuthorized;
