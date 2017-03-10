import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import ProjectsFeed from '../../components/ProjectsFeed/';
import SearchBar from '../../components/SearchBar/';
class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerms: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(searchTerms) {
        this.setState({ searchTerms });
    }

    render() {
        return (
            <Box>
                <Header />
                <SearchBar onChange={this.handleChange} />
                <ProjectsFeed searchTerms={this.state.searchTerms} />
            </Box>
        );
    };
}

export default Home;
