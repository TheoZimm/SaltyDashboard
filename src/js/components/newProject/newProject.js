import React from 'react';
import {RoleAwareComponent} from 'react-router-role-authorization';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';


class NewProject extends RoleAwareComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (

        <Box>
            <Header>
                <Heading>
                    New project
                </Heading>
            </Header>
            <Form>
                <FormField>
                    <TextInput id='title'
                               name='title'
                                placeHolder='Title'/>
                </FormField>
            </Form>
        </Box>




        );
    }
}
;
export default NewProject;
