import React, { Component } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import InviteModal from './InviteModal';
import NewModal from './NewModal';
import InviteItem from './InviteItem';

const fakeInvites = [{
  name: 'Jon Snow',
  location: 'Bulevardi',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  time: '1 hour',
  photo: 'http://www.telegraph.co.uk/content/dam/tv/2017/03/09/JS100865510_got_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=480'
},
{
  name: 'Sansa Stark',
  location: 'Albertinkatu',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  time: '1 hour',
  photo: 'http://www.telegraph.co.uk/content/dam/women/2016/05/25/sansa_2_HBO_trans_NvBQzQNjv4Bq4POtkKlMnbnjmurEo3KPFHJRhioyr4bYEHUX_IAro80.jpg?imwidth=480'
},
{
  name: 'Arya Stark',
  location: 'Lapinlahdenkatu',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  time: '1 hour',
  photo: 'http://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Arya-Stark-appears-to-have-a-murderous-streak-1002871.jpg'
},
{
  name: 'Sansa Stark',
  location: 'Albertinkatu',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  time: '1 hour',
  photo: 'http://www.telegraph.co.uk/content/dam/women/2016/05/25/sansa_2_HBO_trans_NvBQzQNjv4Bq4POtkKlMnbnjmurEo3KPFHJRhioyr4bYEHUX_IAro80.jpg?imwidth=480'
}];

class InviteList extends Component {
  constructor(props) {
    super(props);
    this.state = { currentInvite: {}, modalIsOpen: false, newModalIsOpen: false };
  }
  showModal = currentInvite => () => this.setState({ currentInvite, modalIsOpen: true })
  showNewModal = () => this.setState({ newModalIsOpen: true })
  closeModal = modalIsOpen => this.setState({ modalIsOpen })
  closeNewModal = newModalIsOpen => this.setState({ newModalIsOpen })
  render() {
    return (
      <Grid stackable container columns={3} style={{ paddingBottom: '100px' }}>
        <Grid.Row>
          <Button style={{ background: '#cec5bc' }} size="large" animated="fade" fluid onClick={this.showNewModal}>
            <Button.Content visible>
              <Icon name="plus" />
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
            <InviteItem invite onClick={this.showModal(fakeInvites[0])} curObject={fakeInvites[0]} />
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
        <NewModal open={this.state.newModalIsOpen} close={this.closeNewModal} />
      </Grid>
    );
  }
}

export default InviteList;
