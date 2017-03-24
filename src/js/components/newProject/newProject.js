import React from 'react';
import {RoleAwareComponent} from 'react-router-role-authorization';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';
import DateTime from 'grommet/components/DateTime';
import Select from 'grommet/components/Select';
import NumberInput from 'grommet/components/NumberInput';


/////////////////////////////////////////////////
// DOESN'T WORK                                //
/////////////////////////////////////////////////


class NewProject extends RoleAwareComponent {

    constructor(props) {
        super(props);

        // Define states
        this.state = {
            tags: [],
            status: "",
            title: "",
            description: "",
            deadline: "",
            nbworkers: 0
        };

        // Bind change in form
        this.handleChange = this.handleChange.bind(this);

    }

    // Set value in states
    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // Display content of layer
    render() {
        return (
            <Box>
                <Header>
                    <Heading>
                        New project
                    </Heading>
                </Header>
                <Form>
                    <FormField label="Title">
                        <TextInput id='title'
                                   name='title'
                                   value={this.state.title}
                                   required
                                   onChange={this.handleChange}
                        />
                    </FormField>
                    <FormField label="Description">
                        <TextInput id='description'
                                   name='description'
                                   required
                                   value={this.state.description}
                                   onChange={this.handleChange}
                        />
                    </FormField>
                    <FormField label="Deadline">
                        <DateTime id='deadline'
                                  format='M/D/YYYY'
                                  name='deadline'
                                  required
                                  value={this.state.deadline}
                                  onChange={this.handleChange}/>
                    </FormField>

                    <FormField label="Status">
                        <Select placeHolder='Select'
                                options={['Open', 'Close']}
                                value={this.state.status}
                                required
                                onChange={this.handleChange}/>
                    </FormField>

                    <FormField label="Tags">
                        <Select placeHolder='Select'
                                multiple={true}
                                options={
                                    this.props.tags.map(tag => {
                                        return tag;
                                    })
                                }
                                value={this.state.tags}
                                required
                                onChange={this.handleChange}/>
                    </FormField>

                    <FormField label="Number of workers">
                        <NumberInput value={this.state.nbworkers}
                                     required
                                     onChange={this.handleChange}/>
                    </FormField>

                </Form>
            </Box>
        );
    }
}
;
export default NewProject;
