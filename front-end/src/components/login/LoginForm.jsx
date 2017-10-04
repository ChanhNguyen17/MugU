import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class LoginForm extends Component {
  foo='bar';
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Login</label>
          <input placeholder="Enter your username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Enter your password" type="password" />
        </Form.Field>
        <Button type="submit">Log in</Button>
      </Form>
    );
  }
}

export default LoginForm;

