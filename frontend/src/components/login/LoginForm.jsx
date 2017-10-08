import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { login } from '../../actions/users';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    this.props.login(
      this.state.username,
      this.state.password
    );
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Login</label>
          <input placeholder="Enter your username" value={this.state.username} onChange={this.handleChangeUsername}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Enter your password" type="password" value={this.state.password} onChange={this.handleChangePassword}/>
        </Form.Field>
        <Button type="submit">Log in</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
