import React from 'react';

class Details extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>{this.props.params.id}</h1>);
    }
}

export default Details;
