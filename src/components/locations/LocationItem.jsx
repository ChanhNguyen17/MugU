import React, { Component } from 'react';
import { Container, Segment, Header, Label, Icon, Divider } from 'semantic-ui-react';

class LocationItem extends Component {
  onClick = () => this.props.onClick();
  render() {
    return (
      <Segment onClick={this.onClick} >
        <Container style={{ background: `transparent url( ${this.props.curObject.photo} ) 0 0/cover no-repeat`, width: '100%', height: '150px' }} />
        <Header>{this.props.curObject.name}</Header>
        <Label>
          <Icon name="marker" />{this.props.curObject.location}
        </Label>
        <Divider />
        <Container>{this.props.curObject.description}</Container>
      </Segment>
    );
  }
}

export default LocationItem;
