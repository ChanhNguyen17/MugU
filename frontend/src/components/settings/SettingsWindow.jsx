import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import MenuBar from '../menu/MenuBar';

class SettingsWindow extends Component {
  render() {
    return (
      <MenuBar history={this.props.history} activeItem="settings" />
    );
  }
}

export default SettingsWindow;
