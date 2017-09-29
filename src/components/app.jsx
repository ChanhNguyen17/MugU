import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginWindow from './login/LoginWindow';
import InviteWindow from './board/InviteWindow';

class App extends Component {
  foo = 'bar';
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/login" component={LoginWindow} />
              <Route path="/invites" component={InviteWindow} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
