import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class LoginWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { hasAccount: true, toggleText: 'I don\'t have an account' };
    this.toggleSignUp = this.toggleSignUp.bind(this);
  }

  toggleSignUp() {
    const hasAccount = this.state.hasAccount;
    let toggleText;
    if (hasAccount) {
      toggleText = 'Log in';
    } else toggleText = 'I don\'t have an account';
    this.setState({ hasAccount: !hasAccount, toggleText });
  }
  render() {
    return (
      <Grid centered stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <img src="" alt="logo" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            {this.state.hasAccount ? <LoginForm history={this.props.history} /> : <SignupForm />}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <a role="button" onClick={this.toggleSignUp}>{this.state.toggleText}</a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default LoginWindow;
