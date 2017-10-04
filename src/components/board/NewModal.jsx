import React, { Component } from 'react';
import { Form, Button, Modal } from 'semantic-ui-react';


const options = [
  { text: 'Espresso House', value: 'espresso' },
  { text: 'Kahvi Charlotta', value: 'charlotta' },
  { text: 'Robert\'s coffee', value: 'roberts' }
];

class NewModal extends Component {
  constructor(props) {
    super(props);
    this.state = { time: null };
  }


  setTime = e => () => this.setState({ time: e.target.value });
  closeModal = () => this.props.close(false);

  render() {
    console.log(this.state.time);
    return (
      <Modal size="mini" closeIcon open={this.props.open} onClose={this.closeModal}>
        <Modal.Header>
          <h1>New invite</h1>
        </Modal.Header>
        <Modal.Content>
          <Form>
            <Form.TextArea label="Add description" placeholder="Tell us more..." />
            <Form.Select label="Location" options={options} placeholder="Select location" />
            <Form.Field>
              <label>Set time</label>
              <input type="time" />
            </Form.Field>
            <Button onClick={this.closeModal} type="submit">Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

export default NewModal;
