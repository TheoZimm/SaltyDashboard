import React from 'react';
import {RoleAwareComponent} from 'react-router-role-authorization';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';


class Profile extends RoleAwareComponent {

    constructor(props) {
        super(props);
        console.log("Bonjour");

    }

    render() {
        return (
        <Form>
            <Header>
                <Heading>
                    Sample Header
                </Heading>
            </Header>
            <FormField>
                <TextInput />
            </FormField>
        </Form>

        );
    }
}
;
export default Profile;
