import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import LocationList from './LocationList';

import MenuBar from '../menu/MenuBar';

class InviteWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'list' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Menu pointing secondary widths={2}>
          <Menu.Item name="list" active={activeItem === 'list'} onClick={this.handleItemClick} />
          <Menu.Item name="onMap" active={activeItem === 'onMap'} onClick={this.handleItemClick} />
        </Menu>
        { this.state.activeItem === 'list' ? <LocationList /> : null }
        <MenuBar history={this.props.history} activeItem="locations" />
      </div>
    );
  }
}

export default InviteWindow;
