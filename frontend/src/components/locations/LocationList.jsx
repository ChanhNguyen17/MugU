import React, { Component } from 'react';
import { Grid, Item } from 'semantic-ui-react';
import LocationItem from './LocationItem';

const fakeLocations = [{
  name: 'Kahvi Charlotta',
  location: 'Bulevardi',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  photo: 'https://image.citycdn.fi/01/43/75/31/32225ea0065ad55389f1160539a6100f.jpeg'
},
{
  name: 'Espresso House',
  location: 'Albertinkatu',
  description: 'Cat ipsum dolor sit amet, head nudges and sometimes switches in french and say "miaou" just because well why not. Immediately regret falling into bathtub dead stare with ears cocked.',
  photo: 'https://www.kamppi.fi/sites/default/files/styles/company_header_md/public/2016-06/Espresso%20House.jpg?itok=FdPLt3i7'
}];

class LocationList extends Component {
  constructor(props) {
    super(props);
    this.state = { currentInvite: {}, modalIsOpen: false };
  }
  showModal = currentInvite => () => this.setState({ currentInvite, modalIsOpen: true })
  closeModal = modalIsOpen => this.setState({ modalIsOpen })
  render() {
    return (
      <Grid stackable container columns={3}>
        {
          fakeLocations.map(i => (
            <Grid.Column>
              <LocationItem invite onClick={this.showModal(i)} curObject={i} />
            </Grid.Column>
          ))
        }
      </Grid >
    );
  }
}

export default LocationList;
