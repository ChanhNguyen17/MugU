import React, { Component } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import InviteModal from './InviteModal';
import NewModal from './NewModal';
import InviteItem from './InviteItem';

import { getInviteList } from '../../actions/meetups';

const fakeInvites = [{
  id: 0,
  name: 'Jon Snow',
  location: 'Bulevardi',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  time: '1 hour',
  photo: 'http://www.telegraph.co.uk/content/dam/tv/2017/03/09/JS100865510_got_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=480'
},
{
  id: 1,
  name: 'Sansa Stark',
  location: 'Albertinkatu',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  time: '1 hour',
  photo: 'http://www.telegraph.co.uk/content/dam/women/2016/05/25/sansa_2_HBO_trans_NvBQzQNjv4Bq4POtkKlMnbnjmurEo3KPFHJRhioyr4bYEHUX_IAro80.jpg?imwidth=480'
},
{
  id: 2,
  name: 'Arya Stark',
  location: 'Lapinlahdenkatu',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  time: '1 hour',
  photo: 'http://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Arya-Stark-appears-to-have-a-murderous-streak-1002871.jpg'
},
{
  id: 3,
  name: 'Sansa Stark',
  location: 'Albertinkatu',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  time: '1 hour',
  photo: 'http://www.telegraph.co.uk/content/dam/women/2016/05/25/sansa_2_HBO_trans_NvBQzQNjv4Bq4POtkKlMnbnjmurEo3KPFHJRhioyr4bYEHUX_IAro80.jpg?imwidth=480'
}];

class InviteList extends Component {
  constructor(props) {
    super(props);
    this.state = { inviteList: [], currentInvite: {}, modalIsOpen: false, newModalIsOpen: false };
  }

  componentWillMount() {
    this.props.getInviteList().then((response) => { this.setState({ inviteList: response }); });
  }

  showModal = currentInvite => () => this.setState({ currentInvite, modalIsOpen: true })
  showNewModal = () => this.setState({ newModalIsOpen: true })
  closeModal = modalIsOpen => this.setState({ modalIsOpen })
  closeNewModal = newModalIsOpen => this.setState({ newModalIsOpen })

  render() {
    if (this.state.inviteList.length === 0) {
      return null;
    }
    console.log(this.state.inviteList);
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
            <InviteItem invite onClick={this.showModal(this.state.inviteList[0])} curObject={this.state.inviteList[0]} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <h1>Invites</h1>
        </Grid.Row>
        {
          this.state.inviteList.map(i => (
            <Grid.Column key={i.id}>
              <InviteItem invite onClick={this.showModal(i)} curObject={i} />
            </Grid.Column>
          ))
        }
        <InviteModal invite open={this.state.modalIsOpen} curObject={this.state.currentInvite} close={this.closeModal} />
        <NewModal history={this.props.history} open={this.state.newModalIsOpen} close={this.closeNewModal} />
      </Grid>
    );
  }
}

const mapDispatchToProps = {
  getInviteList,
};


export default connect(null, mapDispatchToProps)(InviteList);

