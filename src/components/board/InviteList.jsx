import React, { Component } from 'react';
import { Image, Segment, Grid, Button } from 'semantic-ui-react';
import InviteModal from './InviteModal';
import InviteItem from './InviteItem';

const fakeInvites = [{
  name: 'Jon Snow',
  location: 'Bulevardi',
  description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
  time: '1 hour',
  photo: 'http://www.telegraph.co.uk/content/dam/tv/2017/03/09/JS100865510_got_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=480'
},
{
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
},
{
  name: 'Sansa Stark',
  location: 'Albertinkatu',
  description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
  time: '1 hour',
  photo: 'http://www.telegraph.co.uk/content/dam/women/2016/05/25/sansa_2_HBO_trans_NvBQzQNjv4Bq4POtkKlMnbnjmurEo3KPFHJRhioyr4bYEHUX_IAro80.jpg?imwidth=480'
}];

class InviteList extends Component {
  constructor(props) {
    super(props);
    this.state = { currentInvite: {}, modalIsOpen: false };
  }
  showModal = currentInvite => () => this.setState({ currentInvite, modalIsOpen: true })
  closeModal = modalIsOpen => this.setState({ modalIsOpen })
  render() {
    return (
      <Grid stackable container columns={3}>
        <Grid.Row>
          <Button animated="fade" fluid >
            <Button.Content visible>
              +
            </Button.Content>
            <Button.Content hidden>
              Create a new invite
            </Button.Content>
          </Button>
        </Grid.Row>
        <Grid.Row>
          <h1>You reacted to</h1>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <InviteItem onClick={this.showModal(fakeInvites[0])} curObject={fakeInvites[0]} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <h1>Invites</h1>
        </Grid.Row>
        {
          fakeInvites.map(i => (
            <Grid.Column>
              <InviteItem invite onClick={this.showModal(i)} curObject={i} />
            </Grid.Column>
          ))
        }
        <InviteModal open={this.state.modalIsOpen} curObject={this.state.currentInvite} close={this.closeModal} />
      </Grid>
    );
  }
}

export default InviteList;
