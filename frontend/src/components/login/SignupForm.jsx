import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { signup } from '../../actions/users';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      passwordRepeat: '',
    };

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordRepeat = this.handleChangePasswordRepeat.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleChangePasswordRepeat(event) {
    this.setState({ passwordRepeat: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.password === this.state.passwordRepeat) {
      this.props.signup(this.state.email, this.state.name, this.state.password);
    }
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>E-mail</label>
          <input placeholder="Enter your e-mail" value={this.state.email} onChange={this.handleChangeEmail} />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <input placeholder="Enter your name" value={this.state.name} onChange={this.handleChangeName} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Enter new password" type="password" value={this.state.password} onChange={this.handleChangePassword} />
        </Form.Field>
        <Form.Field>
          <label>Repeat password</label>
          <input placeholder="Repeat password" type="password" value={this.state.passwordRepeat} onChange={this.handleChangePasswordRepeat} />
        </Form.Field>
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  signup,
};

export default connect(null, mapDispatchToProps)(SignupForm);
