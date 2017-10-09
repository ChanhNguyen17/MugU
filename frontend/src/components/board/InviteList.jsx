import React, { Component } from 'react';
import { Grid, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import InviteModal from './InviteModal';
import NewModal from './NewModal';
import InviteItem from './InviteItem';

import { getInviteList } from '../../actions/meetups';


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
  closeNewModal = (newModalIsOpen) => {
    this.setState({ newModalIsOpen });
    this.props.getInviteList().then((response) => { this.setState({ inviteList: response }); });
  }


  render() {
    if (this.state.inviteList.length === 0) {
      return (
        <Grid stackable container columns={3} style={{ paddingBottom: '100px', minHeight: 'calc(100vh - 130px)' }}>
          <Grid.Row>
            <Button style={{ background: '#cec5bc', height: '50px' }} size="large" animated="fade" fluid onClick={this.showNewModal}>
              <Button.Content visible>
                <Icon name="plus" />
              </Button.Content>
              <Button.Content hidden>
                Create a new invite
              </Button.Content>
            </Button>
          </Grid.Row>
          <NewModal history={this.props.history} open={this.state.newModalIsOpen} close={this.closeNewModal} />
        </Grid>
      );
    }

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

