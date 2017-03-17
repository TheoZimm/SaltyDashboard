import React from 'react';
import axios from 'axios';
import Home from '../Home/';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: []
        };

    }

    componentWillMount() {
        var self = this;

        axios.get('http://localhost:23000/api/projects')
            .then(function (response) {
                self.setState({
                    projects: response.data
                });
            })
            .catch(function (error) {
                // Make redirect to profile page for test
            });
    }

    render() {
        return (
            <Home projects={this.state.projects}/>
        );
    }
}

export default App;
