import React from 'react';
import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import CheckBox from 'grommet/components/CheckBox';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import DateTime from 'grommet/components/DateTime';
import FormField from 'grommet/components/FormField';

class SearchBar extends React.Component {

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


    handleChangeTerms(e) {
        this.setState({ searchTerms: e });
        this.props.onTermsChange(e.target.value);
    }

    handleChangeTags(e) {
        this.setState({tags: e});
        this.props.onClick(e.target.value);
    }

    handleChangeDate(e) {
        this.setState({ date: e });
        this.props.onDateChange(e);
    }

    render() {

        let tags = [];

        // Generate array of tags
        //-----------------------
        this.props.projects.forEach((project) => {
            project.tags.forEach((tag) => {
                tags.push(tag);
            });
        });

        // Make unique value and sort
        //------------------
        tags = Array.from(new Set(tags));
        tags.sort();


        // Display
        //--------
        return (
            <Header fixed={false}
                    float={false}
                    splash={false}
                    colorIndex='light-2'>
                <Title>
                    Search
                </Title>
                <Box flex={true}
                     justify='end'
                     direction='row'
                     key="search"
                     responsive={false}>
                    <Search inline={true}
                            fill={true}
                            size='medium'
                            placeHolder='Title / Summary'
                            onDOMChange={this.handleChangeTerms}
                            dropAlign={{"right": "right"}}/>

                    <Menu label='Tags'
                          key="tags"
                          closeOnClick={false}
                          primary={false}>
                        {tags.map(tag => <CheckBox key={tag} id={tag} label={tag} value={tag}
                                                   onChange={this.handleChangeTags}/>)}
                    </Menu>

                    <FormField>
                        <DateTime id='date'
                                  name='date'
                                  format='M/D/YYYY'
                                  onChange={this.handleChangeDate}
                                  value={this.state.date}/>
                    </FormField>

                </Box>
            </Header>

        );
    }
}

export default SearchBar;
