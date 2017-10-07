import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import LocationList from './LocationList';
import PageHeader from '../menu/PageHeader';
import MenuBar from '../menu/MenuBar';
import LocationMap from './LocationMap';

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
        <PageHeader />
        <Menu size="massive" pointing secondary widths={2}>
          <Menu.Item name="list" active={activeItem === 'list'} onClick={this.handleItemClick} />
          <Menu.Item name="onMap" active={activeItem === 'onMap'} onClick={this.handleItemClick} />
        </Menu>
        { this.state.activeItem === 'list' ? <LocationList /> : <LocationMap /> }
        <MenuBar history={this.props.history} activeItem="locations" />
      </div>
    );
  }
}

export default InviteWindow;
