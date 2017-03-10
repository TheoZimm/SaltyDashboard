import React from 'react';
import Search from 'grommet/components/Search';
import Box from 'grommet/components/Box';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    // this.props.onChange

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <Box justify='start'
                 align='center'
                 pad='medium'
                 margin='small'
                 colorIndex='light-1' >
                <Search placeHolder='Search'
                        inline={true}
                        size='medium'
                        dropAlign={{"right": "right"}}
                        onDOMChange={this.handleChange} />
            </Box>
        );
    }
}

export default SearchBar;
