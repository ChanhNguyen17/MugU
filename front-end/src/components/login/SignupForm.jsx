import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class SignupForm extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', passwordRepeat: ''};
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangePasswordRepeat = this.handleChangePasswordRepeat.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleChangePasswordRepeat(event) {
    this.setState({passwordRepeat: event.target.value});
  }

  handleSubmit(event) {
    if(this.state.password === this.state.passwordRepeat){
      fetch('/api/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
    }else{
      console.log('Password is not match');
    }
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input placeholder="Enter your username" value={this.state.username} onChange={this.handleChangeUsername}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Enter new password" type="password" value={this.state.password} onChange={this.handleChangePassword}/>
        </Form.Field>
        <Form.Field>
          <label>Repeat password</label>
          <input placeholder="Repeat password" type="password" value={this.state.passwordRepeat} onChange={this.handleChangePasswordRepeat}/>
        </Form.Field>
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

export default SignupForm;
