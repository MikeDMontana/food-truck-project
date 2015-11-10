import React from 'react';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 46.869554,
  lng: -113.997356
};

var mapStyles = [
  {
    stylers: [
      { hue: "#D15D39" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "on" }
    ]},
{
    "featureType": "poi.park",
    "stylers": [
      { "visibility": "on" }
    ]
  },{
    "featureType": "poi.attraction",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.business",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.government",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.medical",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.place_of_worship",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
  }

];

const GoogleMap = React.createClass({

  onMapCreated(map) {
    var tempLatArray = [];
    var tempLngArray = [];
      
    this.props.data.map(function(truck){
                tempLatArray.push(truck.lat);
                console.log(tempLatArray);
    });
      
    this.props.data.map(function(truck){
                tempLngArray.push(truck.lon);
                console.log(tempLngArray);
    });
      
    var latAvg = function(){
        var sum = 0;
        for (var i = 0; i < tempLatArray.length; i++){
            sum += Number(tempLatArray[i]);
        };
        var avg = sum / tempLatArray.length;
        return avg;
    };
      
    var lngAvg = function(){
        var sum = 0;
        for (var i = 0; i < tempLngArray.length; i++){
            sum += Number(tempLngArray[i]);
        };
        var avg = sum / tempLngArray.length;
        return avg;
    };
      
    var pinsAvg = {lat: Number(latAvg()), lng: Number(lngAvg())};
    
    map.setOptions({
      disableDefaultUI: true,
      styles: mapStyles
    });
      
    map.setCenter(pinsAvg);
      
    google.maps.event.addDomListener(window, "resize", function() {
            google.maps.event.trigger(map, "resize");
            map.setCenter(pinsAvg); 
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
    var self = this;
    var pinLoop = this.props.data.map(function(truck){
        return(
            <Marker
              lat={truck.lat}
              lng={truck.lon}
              clickable={true}
              draggable={false}
              icon={'../img/logo_notext_sm.png'}
              title={truck.truckName}
              animation={"BOUNCE"}
              onClick={function(e){
                    var infowindow = new google.maps.InfoWindow({
                                        content: truck.truckName,
                                        position: e.latLng
                                    });
                    infowindow.open(this.get('map'), this);
              }} />
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