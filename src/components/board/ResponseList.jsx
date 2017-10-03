import React, { Component } from 'react';
import { Image, Segment, Grid, Button, Modal } from 'semantic-ui-react';
import InviteItem from './InviteItem';

const fakeInvites = [{
  name: 'Sansa Stark',
  location: 'Albertinkatu',
  description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
  time: '1 hour',
  photo: 'http://www.telegraph.co.uk/content/dam/women/2016/05/25/sansa_2_HBO_trans_NvBQzQNjv4Bq4POtkKlMnbnjmurEo3KPFHJRhioyr4bYEHUX_IAro80.jpg?imwidth=480'
},
{
  name: 'Arya Stark',
  location: 'Lapinlahdenkatu',
  description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
  time: '1 hour',
  photo: 'http://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Arya-Stark-appears-to-have-a-murderous-streak-1002871.jpg'
}];

class ResponseList extends Component {
  constructor(props) {
    super(props);
    this.state = { currentInvite: {}, openModal: false };
  }
  showModal = currentInvite => () => this.setState({ currentInvite, openModal: true })
  closeModal = () => this.setState({ openModal: false })
  render() {
    return (
      <Grid stackable container columns={3}>
        <Grid.Row>
          <h1>Your invite</h1>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <InviteItem invite onClick={this.showModal(fakeInvites[0])} curObject={fakeInvites[0]} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <h1>People reacted</h1>
        </Grid.Row>
        {
          fakeInvites.map(i => (
            <Grid.Column>
              <InviteItem onClick={this.showModal(i)} curObject={i} />
            </Grid.Column>
          ))
        }

        <Modal size="mini" closeIcon open={this.state.openModal} onClose={this.closeModal}>
          <Modal.Header>
            <Image centered fluid src={this.state.currentInvite.photo} />
            {this.state.currentInvite.name}
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Segment>
                <h3>Description</h3>
                <p>{this.state.currentInvite.description}</p>
              </Segment>
              <Segment>
                <h3>Reacted to your invite to:</h3>
                <p>Albertinkatu</p>
              </Segment>
              <Segment>
                <h3>{this.state.currentInvite.name} added a comment:</h3>
                <p>blah blah blah</p>
              </Segment>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button positive>
              Accept
            </Button>
            <Button negative>
              Decline
            </Button>
          </Modal.Actions>
        </Modal>
      </Grid>
    );
  }
}

export default ResponseList;
