var React = require('react');
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
var NavBar = require('./navbar')
var mapStyles = require('./mapstyles')

var TruckEntryForm = React.createClass({
    
        getInitialState: function(){
            return{tempLat: 46.869693, tempLng: -113.997044};
        },

        onMapCreated(map) {
            
            var self = this;
            
            map.setOptions({
              disableDefaultUI: true,
              styles: mapStyles
            });
            
            google.maps.event.addDomListener(window, "resize", function() {
                    google.maps.event.trigger(map, "resize");
                    map.setCenter({lat: self.state.tempLat, lng: self.state.tempLng}); 
            });
            
            google.maps.event.addListenerOnce(map, "click", function(event) {
                    var locationMarker = new google.maps.Marker ({
                                            position: event.latLng,
                                            map: map,
                                            icon: '../img/logo_notext_sm.png',
                                            draggable: true
                                        });
                
                    self.setState({tempLat: event.latLng.lat(), tempLng: event.latLng.lng()});
                    map.setCenter({lat: self.state.tempLat, lng: self.state.tempLng}); 
                
                    console.log(self.state.tempLat + " " + self.state.tempLng);
                
                    google.maps.event.addListener(locationMarker, 'dragend', function(evt){
                            self.setState({tempLat: evt.latLng.lat(), tempLng: evt.latLng.lng()});
                            console.log(self.state.tempLat + " " + self.state.tempLng);
                            map.setCenter({lat: self.state.tempLat, lng: self.state.tempLng}); 
                    });
            });
        
          },
    
        render: function() {
            return (
                <div>
                    <NavBar/>
                    <div id="main-spacer"></div>
                    <div className="container-fluid">
                      <form action="/api/trucks" method="POST" role="form">
                        <h3>Truck Entry Form</h3>
                        <div className="form-group">
                    <div className="container-fluid">    
                        <div className="col-md-6">
                            <div className="container-fluid">
                              <label>Truck Name:</label>
                              <input type="text" className="form-control" name="truckName" placeholder="Truck Name"/>
                                <br/>
                            
                              <label>Description:</label>
                              <input type="text" className="form-control" name="description" placeholder="Tell us about the truck!"/>
                                <br/>
                            
                              <label>Cuisine:</label>
                              <input type="text" className="form-control" name="cuisine[]" placeholder="Food type #1"/>
                              <input type="text" className="form-control" name="cuisine[]" placeholder="Food type #2"/>
                                <br/>
                            
                              <label>Hours:</label>
                                
                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Monday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="monTime" defaultValue="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Tuesday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="tuesTime" defaultValue="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Wednesday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="wedTime" defaultValue="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Thursday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="thurTime" defaultValue="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Friday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="friTime" defaultValue="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Saturday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="satTime" defaultValue="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Sunday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="sunTime" defaultValue="Closed"/>
                                </div>
                              </div>
                            </div>
                        </div> 
                          
                        <div className="col-md-6">
                          <div className="container-fluid">
                          <label>City:</label>
                          <input type="text" className="form-control" name="city" placeholder="City and State of operation:"/>
                              <br/>
                            
                          <label>Picture:</label>
                          <input type="text" className="form-control" name="image" ref="image" placeholder="Copy an Instagram image link here:"/>
                              <br/>
                            
                            <div>
                            <label>Location:</label>
                            <Gmaps
                                width={"100%"}
                                height={'50vh'}
                                lat={46.869693}
                                lng={-113.997044}
                                zoom={16}
                                loadingMessage={'Be happy'}
                                params={{v: '3.exp'}}
                                onMapCreated={this.onMapCreated}>

                            </Gmaps>
                            <input className="col-md-6 latLngInput" name="lat" value={this.state.tempLat.toString()}/>
                            <input className="col-md-6 latLngInput" name="lon" value={this.state.tempLng.toString()}/>
                            </div>
                            
                            
                        </div>
                       </div>
                    </div>
                            <br/>
                            <br/>

                          <div className="container-fluid">
                              <div className="col-md-4">
                                <label>Category:</label><br/>
                                <input type="checkbox" name="timeCategory[]" ref="timeCategory" value="lunch"/>Lunch<br/>
                                <input type="checkbox" name="timeCategory[]" ref="timeCategory" value="dinner"/>Dinner<br/>
                                <input type="checkbox" name="timeCategory[]" ref="timeCategory" value="other"/>Other<br/>
                              </div>
                              <div className="col-md-4">
                                <label>Payment Options:</label><br/>
                                <input type="checkbox" name="payment[]" ref="payment" value="cash"/>Cash<br/>
                                <input type="checkbox" name="payment[]" ref="payment" value="card"/>Card<br/>
                                <input type="checkbox" name="payment[]" ref="payment" value="checks"/>Checks<br/>
                              </div>
                              <div className="col-md-4">
                                  <label>Eating preference options:</label><br/>
                                  <input type="checkbox" name="foodOptions[]" ref="foodOptions" value="./img/vegan.png"/>Vegan<br/>
                                  <input type="checkbox" name="foodOptions[]" ref="foodOptions" value="./img/organic.png"/>Organic<br/>
                                  <input type="checkbox" name="foodOptions[]" ref="foodOptions" value="./img/glutenFree.png"/>Gluten Free<br/>
                              </div>
                        </div><br/>



                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-md-6">
                                </div><br/>

                                <div className="container-fluid">
                                  <div className="col-md-6">
                                    <label>Facebook:</label>
                                    <input type="text" className="form-control" name="facebook" placeholder="Copy your Facebook URL here:"/>
                                  </div>

                                  <div className="col-md-6">
                                    <label>Twitter:</label>
                                    <input type="text" className="form-control" name="twitter" placeholder="Copy your Twitter URL here:"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br/>
                            
                          <button type="submit" className="btn btn-warning">Submit</button>
                          </div>
                        </form>
                    </div>
                </div>
        );
    }
});

React.render(<TruckEntryForm/>, document.getElementById("entry-form"));