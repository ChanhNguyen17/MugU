import React, { Component } from 'react';
import { Label, Icon, Container, Header, Divider, Button, Modal } from 'semantic-ui-react';
import { isEmpty } from 'lodash';

import { getHoursDelta, formatDate } from '../../utils/utils';

import photo from '../../assets/images/arya.jpg';

class InviteModal extends Component {
  closeModal = () => this.props.close(false);

  render() {
    if (isEmpty(this.props.curObject)) {
      return null;
    }

    const hoursDelta = getHoursDelta(this.props.curObject.time);
    const formattedDate = formatDate(this.props.curObject.time);

    return (
      <Modal className="mugu-modal" size="mini" closeIcon open={this.props.open} onClose={this.closeModal}>
        <Modal.Header>
          <Container className="mugu-image" style={{ background: `transparent url( ${photo} ) 0 0/cover no-repeat`, width: '100%' }} />
          <Container className="mugu-name"><Header>{this.props.curObject.user.username}</Header></Container>
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
              <p>{this.props.curObject.user.username} Wants to meet in:</p>
              <Header>{`${hoursDelta} hours`}</Header>
            </Container>
            <Header size="medium" style={{ color: '#5b554d', textAlign: 'center' }}>{formattedDate}</Header>
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
                <h3>{this.props.curObject.user.username} added a comment:</h3>
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
