import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import ProjectsFeed from '../../components/ProjectsFeed/';
import SearchBar from '../../components/SearchBar/';
class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerms: '',
            tags: []
        };

        this.handleChangeTerms = this.handleChangeTerms.bind(this);
        this.handleChangeTags = this.handleChangeTags.bind(this);

    }

    handleChangeTerms(searchTerms) {

        this.setState({ searchTerms });
    }

    handleChangeTags(tags) {

        let tempTags = this.state.tags;
        let index = tempTags.indexOf(tags);

        if(index == -1) {
            tempTags.push(tags);
        } else {
            tempTags.splice(index, 1);
        }

        this.setState({tags: tempTags});
    }

    render() {
        return (
            <Box>
                <Header />
                <SearchBar onChange={this.handleChangeTerms} onClick={this.handleChangeTags} projects={this.props.projects} />
                <ProjectsFeed searchTerms={this.state.searchTerms} searchTags={this.state.tags} projects={this.props.projects} />
            </Box>
        );
    };
}

export default Home;
