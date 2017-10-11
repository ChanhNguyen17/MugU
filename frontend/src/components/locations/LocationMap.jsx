import React from 'react';


let infowindow;
let map;
let markers = [];

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

  fetchPlaces = (pos) => {
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: pos,
      radius: 1000,
      type: ['cafe']
    }, this.callback);
  }

  clearMarkers = () => {
    markers.forEach(m => m.setMap(null));
    markers = [];
    console.log('i delete markers');
  }

  createMap = (pos) => {
    console.log(pos);
    map = new google.maps.Map(document.getElementById('mymap'), {
      center: pos,
      zoom: 15
    });
  }

  setListener = () => {
    if (!map) {
      setTimeout(this.setListener, 1000);
      console.log('not yet');
    } else {
      console.log('yeeey');
      map.addListener('dragend', () => {
        const pos = map.getCenter();
        this.clearMarkers();
        this.fetchPlaces(pos);
      });
    }
  }

  initMap = () => {
    let pos = { lat: 60.16, lng: 24.93 };
    infowindow = new google.maps.InfoWindow();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.createMap(pos);
        map.setCenter(pos);
        this.fetchPlaces(pos);
      }, () => {
        this.createMap(pos);
        this.fetchPlaces(pos);
        this.handleLocationError(true, infowindow, map.getCenter());
      });
    } else {
      this.createMap(pos);
      this.fetchPlaces(pos);
      // Browser doesn't support Geolocation
      this.handleLocationError(false, infowindow, map.getCenter());
    }
    this.setListener();
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
    markers.push(marker);

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

  render() {
    return (
      <div id="mymap" style={{ height: 'calc(100vh - 210px)' }} />
    );
  }
}

export default LocationMap;
