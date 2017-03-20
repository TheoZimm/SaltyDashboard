import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import ProjectDetails from '../../components/ProjectDetails/';
import axios from 'axios';

class Details extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            project: []
        };
    }

    componentWillMount() {
        var self = this;

        axios.get('http://localhost:23000/api/projects/' + self.props.params.id)
            .then(function (response) {
                self.setState({
                    project: response.data
                });
            })
            .catch(function (error) {
                // Make redirect to profile page for test
            });
    }


    render() {
        return (
            <Box>
                <Header />
                <ProjectDetails project={this.state.project}/>

            </Box>);
    }
}

export default Details;
