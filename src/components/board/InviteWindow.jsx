import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import InviteList from './InviteList';
import ResponseList from './ResponseList';
import PageHeader from '../menu/PageHeader';

import MenuBar from '../menu/MenuBar';

class InviteWindow extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'invites' };
    //  this.handleItecmClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <div style={{ background: '#f4f0e9' }}>
        <PageHeader />
        <Menu size="massive" pointing secondary widths={2}>
          <Menu.Item name="invites" active={activeItem === 'invites'} onClick={this.handleItemClick} />
          <Menu.Item name="responses" active={activeItem === 'responses'} onClick={this.handleItemClick} />
        </Menu>
        { this.state.activeItem === 'invites' ? <InviteList /> : <ResponseList /> }
        <MenuBar history={this.props.history} activeItem="invites" />
      </div>
    );
  }
}

export default InviteWindow;
