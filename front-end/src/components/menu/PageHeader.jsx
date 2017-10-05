import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react';
import logo from '../../assets/images/logo-dark.png';

class PageHeader extends Component {
  foo = 'bar';
  render() {
    return (
      <Menu style={{ background: '#cec5bc' }} icon="labeled" size="tiny" attached="top" fluid widths={1} >
        <Menu.Item><Image src={logo} size="mini" /></Menu.Item>
      </Menu>
    );
  }
}

export default PageHeader;
