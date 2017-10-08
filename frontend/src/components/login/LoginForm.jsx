import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

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
    fetch('/api/users/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    }).then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if (responseJson) {
          this.props.history.push('/invites');
          localStorage.setItem('user', JSON.stringify(responseJson));
        }
      })
      .catch((error) => {
        console.error(error);
      });
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

export default LoginForm;

