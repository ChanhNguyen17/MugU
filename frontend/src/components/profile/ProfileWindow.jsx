import React, { Component } from 'react';
import { Grid, Segment, Container, Header, Icon, Popup, List, Form, Button, Divider } from 'semantic-ui-react';
import MenuBar from '../menu/MenuBar';
import PageHeader from '../menu/PageHeader';

class ProfileWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      userName: 'Arya Stark',
      userAge: '14',
      userDescription: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say miaou just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
      userPhoto: 'http://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Arya-Stark-appears-to-have-a-murderous-streak-1002871.jpg',
      changeUserName: '',
      changeUserAge: '',
      changeUserDescription: '',
    };
  }

  handleEdit = editMode => () => this.setState({ editMode });
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleSubmit = editMode => () => {
    const { changeUserName, changeUserAge, changeUserDescription } = this.state;
    this.setState({ editMode, userName: changeUserName, userAge: changeUserAge, userDescription: changeUserDescription });
  }
  render() {
    const { changeUserName, changeUserAge, changeUserDescription } = this.state;
    return (
      <div style={{ background: '#f4f0e9', height: '100vh' }}>
        <PageHeader />
        <Grid container stackable centered padded="vertically" columns={2}>
          <Grid.Column>
            <Segment padded textAlign="left">
              <Segment style={{ background: `transparent url( ${this.state.userPhoto} ) 0 0/cover no-repeat`, width: '100%', height: '200px' }} />

              {this.state.editMode ? (
                <Form onSubmit={this.handleSubmit}>
                  <Form.Input label="Your name" name="changeUserName" value={changeUserName} onChange={this.handleChange} />
                  <Form.Input label="Your age" name="changeUserAge" value={changeUserAge} onChange={this.handleChange} />
                  <Form.TextArea name="changeUserDescription" label="Add description" value={changeUserDescription} onChange={this.handleChange} />
                  <Button.Group attached="bottom">
                    <Button color="olive" onClick={this.handleSubmit(false)} content="Submit" />
                    <Button onClick={this.handleEdit(false)} content="Cancel" />
                  </Button.Group>
                </Form>
              ) :
                (
                  <div>
                    <Segment basic textAlign="right">
                      <Popup
                        trigger={<Icon name="ellipsis vertical" />}
                        content={
                          <List divided relaxed>
                            <List.Item as="a" onClick={this.handleEdit(true)}>Edit profile</List.Item>
                            <List.Item as="a">Change photo</List.Item>
                          </List>
                        }
                        on="click"
                        position="left center"
                      />
                    </Segment>
                    <Divider />
                    <Header>{this.state.userName}, {this.state.userAge}</Header>
                    <Container>{this.state.userDescription}</Container>
                  </div>
                )
              }
            </Segment>
          </Grid.Column>
        </Grid>
        <MenuBar history={this.props.history} activeItem="profile" />
      </div >
    );
  }
}

export default ProfileWindow;
