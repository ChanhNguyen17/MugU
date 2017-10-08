import React, { Component } from 'react';
import { Label, Icon, Container, Header, Divider, Button, Modal } from 'semantic-ui-react';

class InviteModal extends Component {
  closeModal = () => this.props.close(false);

  render() {
    return (
      <Modal className="mugu-modal" size="mini" closeIcon open={this.props.open} onClose={this.closeModal}>
        <Modal.Header>
          <Container className="mugu-image" style={{ background: `transparent url( ${this.props.curObject.photo} ) 0 0/cover no-repeat`, width: '100%' }} />
          <Container className="mugu-name"><Header>{this.props.curObject.name}</Header></Container>
        </Modal.Header>
        <Modal.Content>
          {this.props.invite ? (<Modal.Description>
            <Container>
              <p>{this.props.curObject.description}</p>
            </Container>
            <Divider />
            <Container>
              <Label>
                <Icon name="marker" />{this.props.curObject.location}
              </Label>
            </Container>
            <Divider />
            <Container className="time">
              <p>{this.props.curObject.name} wants to meet in:</p>
              <Header>{this.props.curObject.time}</Header>
            </Container>
          </Modal.Description>) : (
              <Modal.Description>
                <Container>
                  <p>{this.props.curObject.description}</p>
                </Container>
                <Divider />
                <Container>
                  <h3>Reacted to your invite to</h3>
                  <Label>
                    <Icon name="marker" />{this.props.curObject.location}
                  </Label>
                </Container>
                <Divider />
                <Container>
                  <h3>{this.props.curObject.name} added a comment:</h3>
                  <p>{this.props.curObject.comment}</p>
                </Container>
              </Modal.Description>
            )
          }

        </Modal.Content>
        <Modal.Actions>
          {this.props.invite ? (
            <Button className="mugu-btn" circular content="Interested" />
          ) : (
              <div>
                <Button className="mugu-btn" circular content="Accept" />
                <Button className="mugu-btn negative" circular content="Decline" />
              </div>
            )
          }
        </Modal.Actions>
      </Modal>
    );
  }
}

export default InviteModal;
