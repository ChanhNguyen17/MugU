import React from 'react';


let infowindow;
let map;

class LocationMap extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isMarkerShown: false };
    // this.initMap = this.initMap.bind(this);
    // this.callback = this.callback.bind(this);
    this.createMarker = this.createMarker.bind(this);
  }

  componentDidMount() {
    this.initMap();
  }


  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  }

  initMap = () => {
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

  callback = (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }

  createMarker = (place) => {
    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

  render() {
    return (
      <div id="mymap" style={{ height: '700px' }} />
    );
  }
}

export default LocationMap;
