import React  from 'react';
// import { AuthorizedComponent } from 'react-router-role-authorization';
import {browserHistory} from 'react-router';

class Disconnect extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            login: '',
            password: '',
            role: ''
        };
    }

    componentWillMount() {
        console.log('Setting state...');
        this.setState({login: '', password: '', role: 'disconnected'}, function () {
        }.bind(this));
        browserHistory.push('/login');
    }

    render() {
        return (
            <div>
                {this.state.testing}
                {/*<routes {...this.props} />*/}
            </div>
        );
    };
}
;

export default Disconnect;
