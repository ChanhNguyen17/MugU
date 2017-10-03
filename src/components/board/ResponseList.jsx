import React, { Component } from 'react';
import { Image, Segment } from 'semantic-ui-react';

const fakeInvites = [{
  name: 'Sansa Stark',
  location: 'Albertinkatu',
  description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
  time: '1 hour',
  photo: 'http://www.telegraph.co.uk/content/dam/women/2016/05/25/sansa_2_HBO_trans_NvBQzQNjv4Bq4POtkKlMnbnjmurEo3KPFHJRhioyr4bYEHUX_IAro80.jpg?imwidth=480'
},
{
  name: 'Arya Stark',
  location: 'Lapinlahdenkatu',
  description: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
  time: '1 hour',
  photo: 'http://cdn.images.express.co.uk/img/dynamic/20/590x/secondary/Arya-Stark-appears-to-have-a-murderous-streak-1002871.jpg'
}];

class ResponseList extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'invites' };
  }
  render() {
    return (
      <Segment>
        {
          fakeInvites.map(i => (
            <Segment>
              <Image src={i.photo} fluid />
              <h1>{i.name}</h1>
              <span>{i.location}</span>
              <p>{i.description}</p>
              <div>{i.time}</div>
            </Segment>
          ))
        }
      </Segment>
    );
  }
}

export default ResponseList;
