import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import InviteItem from './InviteItem';
import InviteModal from './InviteModal';

import { getInviteList } from '../../actions/meetups';


class ResponseList extends Component {
  constructor(props) {
    super(props);
    this.state = { inviteList: [], currentInvite: {}, modalIsOpen: false };
  }

  componentWillMount() {
    this.props.getInviteList().then((response) => { this.setState({ inviteList: response }); });
  }

  closeModal = modalIsOpen => this.setState({ modalIsOpen })
  showModal = currentInvite => () => this.setState({ currentInvite, modalIsOpen: true })
  render() {
    if (this.state.inviteList.length === 0) {
      return null;
    }
    return (
      <Grid stackable container columns={3} style={{ paddingBottom: '100px' }}>
        {this.state.inviteList.filter(i => (i.user.email === this.props.user.email)).map(i => (

          <Grid stackable container columns={3}>
            <Grid.Row>
              <h1>Your invite</h1>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <InviteItem invite curObject={i} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <h1>People reacted</h1>
            </Grid.Row>
            {
              i.response.map(res => (
                <Grid.Column>
                  <InviteItem onClick={this.showModal(res)} curObject={res} />
                </Grid.Column>
              ))
            }
            <InviteModal open={this.state.modalIsOpen} curObject={this.state.currentInvite} close={this.closeModal} />
          </Grid>
        ))
        }
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ user: state.users.user });

const mapDispatchToProps = {
  getInviteList,
};


export default connect(mapStateToProps, mapDispatchToProps)(ResponseList);

