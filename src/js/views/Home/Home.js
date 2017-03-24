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

        // Bind event
        this.handleChangeTerms = this.handleChangeTerms.bind(this);
        this.handleChangeTags = this.handleChangeTags.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);

    }

    handleChangeTerms(searchTerms) {

        this.setState({searchTerms});
    }

    handleChangeDate(date) {

        this.setState({date});
    }

    handleChangeTags(tags) {

        // Add tags in array
        let tempTags = this.state.tags;
        let index = tempTags.indexOf(tags);

        if (index == -1) {
            tempTags.push(tags);
        } else {
            tempTags.splice(index, 1);
        }

        this.setState({tags: tempTags});
    }

    // Return component SearchBar, ProjectsFeed, ProjectsStats for the home page.
    render() {
        return (
            <Box>
                <Header
                    fixed='true'/>

                {/* Handle for each event of SearchBar and give all projects for filter by tags */}
                <SearchBar
                    fixed='true'
                    onTermsChange={this.handleChangeTerms}
                    onClick={this.handleChangeTags}
                    onDateChange={this.handleChangeDate}
                    projects={this.props.projects}/>

                <Split flex='both'>
                    <Box colorIndex='light-1'
                         pad='small'>

                        {/* Give value of SearchBar and projects to filter it */}
                        <ProjectsFeed
                            searchTerms={this.state.searchTerms}
                            searchTags={this.state.tags}
                            searchDate={this.state.date}
                            projects={this.props.projects}/>

                    </Box>
                    <Box colorIndex='light-1'
                         pad='small'>
                        <ProjectsStats
                            projects={this.props.projects}/>
                    </Box>
                </Split>
            </Box>
        );
    };
}

export default Home;
