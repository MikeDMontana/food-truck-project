import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 46.869554,
  lng: -113.997356
};

const GoogleMap = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

    
  render() {
    return (
      <Gmaps
        width={"600px"}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={16}
        loadingMessage={'Be happy'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <Marker
          lat= "46.870824"
          lng= "-113.996508"
          draggable={true}
          onDragEnd={this.onDragEnd} />
    

      </Gmaps>
    );
  }

});

module.exports = GoogleMap;