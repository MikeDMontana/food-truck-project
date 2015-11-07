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
    google.maps.event.addDomListener(window, "resize", function() {
         var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center); 
    })
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
    var pinLoop = this.props.data.map(function(truck){
        return(
            <Marker
              lat={truck.lat}
              lng={truck.lon}
              draggable={false}
              onDragEnd={truck.onDragEnd} />
            
          )
      });
      
    return (
      <Gmaps
        width={"100%"}
        height={'50vh'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={16}
        loadingMessage={'Be happy'}
        params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>
        
        {pinLoop}

    

      </Gmaps>
    );
  }

});

module.exports = GoogleMap; 