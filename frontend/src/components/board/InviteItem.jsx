import React, { Component } from 'react';
import { Container, Segment, Header, Label, Icon, Divider } from 'semantic-ui-react';

import photo from '../../assets/images/arya.jpg';

class InviteItem extends Component {
  onClick = () => this.props.onClick();
  render() {
    return (
      this.props.invite ? (
        <Segment onClick={this.onClick} >
          <Label color="olive" ribbon>{this.props.curObject.time}</Label>
          <Container style={{ background: `transparent url( ${photo} ) 0 0/cover no-repeat`, width: '100%', height: '150px' }} />
          <Header>{this.props.curObject.user.username}</Header>
          <Label>
            <Icon name="marker" />{this.props.curObject.location}
          </Label>
          <Divider />
          <Container>{this.props.curObject.description}</Container>

        </Segment>
      ) : (
        <Segment onClick={this.onClick} >
          <Container style={{ background: `transparent url( ${photo} ) 0 0/cover no-repeat`, width: '100%', height: '150px' }} />
          <Header>{this.props.curObject}</Header>
          <Divider />
          <Container>{this.props.curObject}</Container>
        </Segment>
      )
    );
  }
}

export default InviteItem;
