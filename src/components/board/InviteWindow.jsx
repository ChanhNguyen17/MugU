import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import InviteList from './InviteList';
import ResponseList from './ResponseList';

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
      <div>
        <Menu pointing secondary widths={2}>
          <Menu.Item name="invites" active={activeItem === 'invites'} onClick={this.handleItemClick} />
          <Menu.Item name="responses" active={activeItem === 'responses'} onClick={this.handleItemClick} />
        </Menu>
        { this.state.activeItem === 'invites' ? <InviteList /> : <ResponseList /> }
      </div>
    );
  }
}

export default InviteWindow;
