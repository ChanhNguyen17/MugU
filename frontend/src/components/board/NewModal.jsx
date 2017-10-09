import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment';

import { createNewInvite } from '../../actions/meetups';

const options = [
  { text: 'Espresso House', value: 'espresso' },
  { text: 'Kahvi Charlotta', value: 'charlotta' },
  { text: 'Robert\'s coffee', value: 'roberts' },
];

class NewModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      place: '',
      time: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  closeModal = () => this.props.close(false);

  handleSubmit(e) {
    e.preventDefault();

    this.props.createNewInvite(
      this.props.user,
      this.state.description,
      this.state.place,
      moment(this.state.time, 'HH:mm').toDate()
    ).then(() => {
      this.closeModal();
    });
  }

  render() {
    return (
      <Modal size="mini" closeIcon open={this.props.open} onClose={this.closeModal}>
        <Modal.Header>
          <h1>New invite</h1>
        </Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit} >
            <Form.TextArea label="Add description" name="description" placeholder="Tell us more..." onChange={this.handleChange} />
            <Form.Select label="Location" name="place" options={options} placeholder="Select location" onChange={this.handleChange} />
            <Form.Input label="Set time" type="time" name="time" onChange={this.handleChange} />
            <Button className="mugu-btn" circular type="submit">Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({ user: state.users.user });

const mapDispatchToProps = {
  createNewInvite,
};


export default connect(mapStateToProps, mapDispatchToProps)(NewModal);
