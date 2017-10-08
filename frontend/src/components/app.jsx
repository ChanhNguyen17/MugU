import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';

import LoginWindow from './login/LoginWindow';
import InviteWindow from './board/InviteWindow';
import LocationWindow from './locations/LocationWindow';
import ProfileWindow from './profile/ProfileWindow';
import SettingsWindow from './settings/SettingsWindow';
import '../assets/stylesheets/style.less';

const App = () => (
  <div>
    <Switch>
      <Route path="/login" component={LoginWindow} />
      <Route path="/invites" component={InviteWindow} />
      <Route path="/locations" component={LocationWindow} />
      <Route path="/profile" component={ProfileWindow} />
      <Route path="/settings" component={SettingsWindow} />
    </Switch>
  </div>
);

export default App;
