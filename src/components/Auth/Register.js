import React from 'react';
import { Grid,Form, Segment,Button,Header,Message,Icon } from 'semantic-ui-react';

class Register extends React.Component {
    state = {}
    handleChange = () => {}
    render() {
        return (
            <Grid textAlign ="center" verticalAlign="middle">
                <Grid.Column style ={{maxWidth: 450}}>
                    <Header as ="h2" icon color = "orange" textAlign ="center">
                        <Icon name = "rocketchat" color = "orange"/>
                        Register for SlackChat
                    </Header>
                    <Form size = "large">
                        <Segment stacked>
                            <Form.Input fluid name ="username" icon = "user" iconPosition ="left" placeholder = "Username" onChange={this.handleChange} type = "text"/>
                            <Form.Input fluid name ="email" icon = "mail" iconPosition = "left" placeholder ="Email Address" onChange={this.handleChange} type = "email"/>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}
export default Register;