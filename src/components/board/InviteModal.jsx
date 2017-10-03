import React, { Component } from 'react';
import { Image, Segment, Button, Modal } from 'semantic-ui-react';

class InviteModal extends Component {
  closeModal = () => this.props.close(false);

  render() {
    return (
      <Modal size="mini" closeIcon open={this.props.open} onClose={this.closeModal}>
        <Modal.Header>
          <Image centered fluid src={this.props.curObject.photo} />
          {this.props.curObject.name}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Segment>
              <h3>Description</h3>
              <p>{this.props.curObject.description}</p>
            </Segment>
            <Segment>
              <h3>Place</h3>
              <p>{this.props.curObject.location}</p>
            </Segment>
            <Segment>
              <h3>{this.props.curObject.name} wants to meet in:</h3>
              <p>{this.props.curObject.time}</p>
            </Segment>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button positive>
            Interested
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default InviteModal;
