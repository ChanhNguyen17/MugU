import React, { Component } from 'react';
import { Image, Segment } from 'semantic-ui-react';

class InviteItem extends Component {
  onClick = () => this.props.onClick();
  render() {
    return (
      this.props.invite ? (
        <Segment onClick={this.onClick} >
          <Image src={this.props.curObject.photo} fluid />
          <h1>{this.props.curObject.name}</h1>
          <span>{this.props.curObject.location}</span>
          <p>{this.props.curObject.description}</p>
          <div>{this.props.curObject.time}</div>
        </Segment>
      ) : (
        <Segment onClick={this.onClick} >
          <Image src={this.props.curObject.photo} fluid />
          <h1>{this.props.curObject.name}</h1>
          <p>{this.props.curObject.description}</p>
        </Segment>
      )
    );
  }
}

export default InviteItem;
