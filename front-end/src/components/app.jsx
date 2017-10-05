import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';

import LoginWindow from './login/LoginWindow';
import InviteWindow from './board/InviteWindow';
import LocationWindow from './locations/LocationWindow';
import ProfileWindow from './profile/ProfileWindow';
import SettingsWindow from './settings/SettingsWindow';

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/login" component={LoginWindow} />
              <Route path="/invites" component={InviteWindow} />
              <Route path="/locations" component={LocationWindow} />
              <Route path="/profile" component={ProfileWindow} />
              <Route path="/settings" component={SettingsWindow} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
