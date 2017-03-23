import React from 'react';
import Box from 'grommet/components/Box';
import Header from '../../components/Header/';
import ProjectsFeed from '../../components/ProjectsFeed/';
import SearchBar from '../../components/SearchBar/';
import Split from 'grommet/components/Split';
import ProjectsStats from '../../components/ProjectsStats/';
class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchTerms: '',
            tags: [],
            date: ''
        };

        this.handleChangeTerms = this.handleChangeTerms.bind(this);
        this.handleChangeTags = this.handleChangeTags.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);

    }

    handleChangeTerms(searchTerms) {

        this.setState({ searchTerms });
    }

    handleChangeDate(date) {

        this.setState({ date });
    }

    handleChangeTags(tags) {

        let tempTags = this.state.tags;
        let index = tempTags.indexOf(tags);

        if (index == -1) {
            tempTags.push(tags);
        } else {
            tempTags.splice(index, 1);
        }

        this.setState({ tags: tempTags });
    }

    render() {
        return (
            <Box>
                <Header />
                <SearchBar
                    onTermsChange={this.handleChangeTerms}
                    onClick={this.handleChangeTags}
                    onDateChange={this.handleChangeDate}
                    projects={this.props.projects} />
                <Split flex='both'>
                    <Box colorIndex='light-1'
                        pad='small'>
                        <ProjectsFeed
                            searchTerms={this.state.searchTerms}
                            searchTags={this.state.tags}
                            searchDate={this.state.date}
                            projects={this.props.projects} />
                    </Box>
                    <Box colorIndex='light-1'
                        pad='small'>
                        <ProjectsStats
                            projects={this.props.projects} />
                    </Box>
                </Split>



            </Box>
        );
    };
}

export default Home;
