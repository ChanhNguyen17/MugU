import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class SignupForm extends Component {
  foo = 'bar';
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Enter your email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Enter new password" type="password" />
        </Form.Field>
        <Form.Field>
          <label>Repeat password</label>
          <input placeholder="Repeat password" type="password" />
        </Form.Field>
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

export default SignupForm;
