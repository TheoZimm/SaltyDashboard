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

        // Get all projects
        axios.get('http://localhost:23000/api/projects')
            .then(function (response) {
                self.setState({
                    projects: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // Send projects to home for ProjectsFeed, SearchBar and ProjectsStats
    render() {
        return (
            <Home projects={this.state.projects}/>
        );
    }
}

export default App;
