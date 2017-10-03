import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: this.props.activeItem }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    // this.context.router.transitionTo(`/${name}`);
    this.props.history.push(`/${name}`);
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu icon="labeled" size="huge" fixed="bottom" fluid widths={4}>
        <Menu.Item name="profile" active={activeItem === 'profile'} onClick={this.handleItemClick} >
          <Icon name="user" />
          {(activeItem === 'profile') ? 'Profile' : ''}
        </Menu.Item>
        <Menu.Item name="invites" active={activeItem === 'invites'} onClick={this.handleItemClick} >
          <Icon name="coffee" />
          {(activeItem === 'invites') ? 'Invites' : ''}
        </Menu.Item>
        <Menu.Item name="locations" active={activeItem === 'locations'} onClick={this.handleItemClick} >
          <Icon name="marker" />
          {(activeItem === 'locations') ? 'Locations' : ''}
        </Menu.Item>
        <Menu.Item name="settings" active={activeItem === 'settings'} onClick={this.handleItemClick} >
          <Icon name="setting" />
          {(activeItem === 'settings') ? 'Settings' : ''}
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBar;
