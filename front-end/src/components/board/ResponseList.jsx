import React, { Component } from 'react';
import { Image, Segment, Grid, Button, Modal } from 'semantic-ui-react';
import InviteItem from './InviteItem';
import InviteModal from './InviteModal';

const fakeInvites = [{
  name: 'Sansa Stark',
  location: 'Albertinkatu',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  time: '1 hour',
  photo: 'http://www.telegraph.co.uk/content/dam/women/2016/05/25/sansa_2_HBO_trans_NvBQzQNjv4Bq4POtkKlMnbnjmurEo3KPFHJRhioyr4bYEHUX_IAro80.jpg?imwidth=480',
  comment: 'Cat ipsum dolor sit amet',
},
{
  name: 'Arya Stark',
  location: 'Lapinlahdenkatu',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  time: '1 hour',
  photo: 'http://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Arya-Stark-appears-to-have-a-murderous-streak-1002871.jpg',
  comment: 'Cat ipsum dolor sit amet',
}];

class ResponseList extends Component {
  constructor(props) {
    super(props);
    this.state = { currentInvite: {}, modalIsOpen: false };
  }
  closeModal = modalIsOpen => this.setState({ modalIsOpen })
  showModal = currentInvite => () => this.setState({ currentInvite, modalIsOpen: true })
  render() {
    return (
      <Grid stackable container columns={3} style={{ paddingBottom: '100px' }}>
        <Grid.Row>
          <h1>Your invite</h1>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <InviteItem invite curObject={fakeInvites[0]} />
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
        <InviteModal open={this.state.modalIsOpen} curObject={this.state.currentInvite} close={this.closeModal} />
      </Grid>
    );
  }
}

export default ResponseList;
