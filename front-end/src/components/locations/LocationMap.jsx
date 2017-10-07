import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap(props =>
  (<GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 60.16, lng: 24.93 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 60.16, lng: 24.93 }} />}
  </GoogleMap>)
));


let infowindow;
let map;

class LocationMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isMarkerShown: false };
    this.checkGoogle = this.checkGoogle.bind(this);
    this.initMap = this.initMap.bind(this);
    this.callback = this.callback.bind(this);
    this.createMarker = this.createMarker.bind(this);
  }

  componentDidMount() {
    this.delayedShowMarker();
    this.checkGoogle();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  }

  checkGoogle() {
    if (!window.google) {
      console.log('not yet');
      setTimeout(this.checkGoogle, 1000);
    } else {
      this.initMap();
    }
  }

  initMap() {
    map = new google.maps.Map(document.getElementById('mymap'), {
      center: { lat: 60.16, lng: 24.93 },
      zoom: 15
    });
    infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: { lat: 60.16, lng: 24.93 },
      radius: 500,
      type: ['cafe']
    }, this.callback);
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }

  createMarker(place) {
    let placeLoc = place.geometry.location;
    let marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

  render() {
    return (
      <MyMapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC8WGE6F8pJllZjkiEYOG03TeESLIqDH8E&v=3.exp&libraries=places"
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '700px' }} />}
        mapElement={<div id={'mymap'} style={{ height: '100%' }} />}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    );
  }
}

export default LocationMap;
