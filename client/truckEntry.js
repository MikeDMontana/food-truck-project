var React = require('react');
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
var NavBar = require('./navbar');
var mapStyles = require('./mapstyles');
const moment = require('moment');
var HoursSelector = require('./hoursSelector');
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

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
    
        handleSubmit: function(e){

            e.preventDefault();
              
              
            function getTime(timeSlot){
                var timeString = document.getElementById(timeSlot).value;

                if (timeString){
                    
                    var dayIndex = null;
                    
                    if (timeSlot === "sun-open" || timeSlot === "sun-close"){
                        dayIndex = 0;
                    } else if (timeSlot === "mon-open" || timeSlot === "mon-close"){
                        dayIndex = 1;
                    } else if (timeSlot === "tues-open" || timeSlot === "tues-close"){
                        dayIndex = 2;
                    } else if (timeSlot === "weds-open" || timeSlot === "weds-close"){
                        dayIndex = 3;
                    } else if (timeSlot === "thurs-open" || timeSlot === "thurs-close"){
                        dayIndex = 4;
                    } else if (timeSlot === "fri-open" || timeSlot === "fri-close"){
                        dayIndex = 5;
                    } else {
                        dayIndex = 6;
                    };
                    
                    var time24h = moment(timeString, ["h:mm A"]).format("HH:mm");
                    var today = new Date();
                    var inputDateObj = new Date(today.getFullYear(), today.getMonth(), (dayIndex + 1), (time24h.charAt(0) + time24h.charAt(1)), (time24h.charAt(3) + time24h.charAt(4)));

                    return inputDateObj;    
                } else {
                    return;
                }
            };
              
            var cleanPic = document.getElementById("image").value.substring(0, 34);
            
              
              
            var firstCuisine = [document.getElementById("cuisine1").value, document.getElementById("cuisine2").value];
            var newCuisine = [];

            for (var i = 0; i < firstCuisine.length; i++) {
                if (firstCuisine[i]) {
                  newCuisine.push(firstCuisine[i]);
                }
            };
              
               
              
            var timeCats = ["all"];

            for (var i = 1; i < 4; i++){
                if (document.getElementById("timeCategory" + i).checked){
                    timeCats.push(document.getElementById("timeCategory" + i).value);
                }
            };
              
            
              
            var paymentCats = [];

            for (var i = 1; i < 4; i++){
                if (document.getElementById("payment" + i).checked){
                    paymentCats.push(document.getElementById("payment" + i).value);
                }
            };  
              
              
            
            var foodCats = [];

            for (var i = 1; i < 4; i++){
                if (document.getElementById("foodOptions" + i).checked){
                    foodCats.push(document.getElementById("foodOptions" + i).value);
                }
            };  
              

            var truckName = document.getElementById("truckName").value;
            var city = document.getElementById("city").value;
            var description = document.getElementById("description").value;
            var image = [document.getElementById("image").value, cleanPic];
            var cuisine = newCuisine;
              
            var monOpen = getTime("mon-open");
            var tuesOpen = getTime("tues-open");
            var wedOpen = getTime("weds-open");
            var thurOpen = getTime("thurs-open");
            var friOpen = getTime("fri-open");
            var satOpen = getTime("sat-open");
            var sunOpen = getTime("sun-open");

            var monClose = getTime("mon-close");
            var tuesClose = getTime("tues-close");
            var wedClose = getTime("weds-close");
            var thurClose = getTime("thurs-close");
            var friClose = getTime("fri-close");
            var satClose = getTime("sat-close");
            var sunClose = getTime("sun-close");
              
            var timeCategory = timeCats;
            var payment = paymentCats;
            var foodOptions = foodCats;
            var facebook = document.getElementById("facebook").value;
            var twitter = document.getElementById("twitter").value;
            var lat = document.getElementById("lat").value;
            var lon = document.getElementById("lon").value;
            

            var data = ({
                    truckName: truckName,
                    city: city,
                    description: description,
                    image: image,
                    cuisine: cuisine,

                    monOpen: monOpen,
                    tuesOpen: tuesOpen,
                    wedOpen: wedOpen,
                    thurOpen: thurOpen,
                    friOpen: friOpen,
                    satOpen: satOpen,
                    sunOpen: sunOpen,

                    monClose: monClose,
                    tuesClose: tuesClose,
                    wedClose: wedClose,
                    thurClose: thurClose,
                    friClose: friClose,
                    satClose: satClose,
                    sunClose: sunClose,

                    timeCategory: timeCategory,
                    payment: payment,
                    foodOptions: foodOptions,
                    facebook: facebook,
                    twitter: twitter,
                    lat: lat,
                    lon: lon 
            });

            $.ajax({
              url: "/api/trucks/",
              dataType: 'json',
              data: data,
              type:'POST',
              success: function(response){
                console.log("posting data!", data, response)
                document.location='/'
              }.bind(this),
              error: function(xhr, status, err){
                console.log("not posting data!")
                console.error(this.props.url, status, err.toString());
              }.bind(this)
            })
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
                              <input type="text" className="form-control" name="truckName" ref="truckName" id="truckName" placeholder="Truck Name"/>
                                <br/>
                            
                              <label>Description:</label>
                              <input type="text" className="form-control" name="description" ref="description" id="description" placeholder="Tell us about the truck!"/>
                                <br/>
                            
                              <label>Cuisine:</label>
                              <input type="text" className="form-control" name="cuisine[]" ref="cuisine[]" id="cuisine1" placeholder="Food type #1"/>
                              <input type="text" className="form-control" name="cuisine[]" ref="cuisine[]" id="cuisine2" placeholder="Food type #2"/>
                                <br/>
                            
                              <label>Hours:</label>
                                
                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Monday</h5>
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="mon-open" />
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="mon-close" />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Tuesday</h5>
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="tues-open" />
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="tues-close" />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Wednesday</h5>
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="weds-open" />
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="weds-close" />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Thursday</h5>
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="thurs-open" />
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="thurs-close" />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Friday</h5>
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="fri-open" />
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="fri-close" />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Saturday</h5>
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="sat-open" />
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="sat-close" />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Sunday</h5>
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="sun-open" />
                                </div>
                                <div className="col-md-3">
                                    <HoursSelector id="sun-close" />
                                </div>
                              </div>
                            </div>
                        </div> 
                          
                        <div className="col-md-6">
                          <div className="container-fluid">
                          <label>City:</label>
                          <input type="text" className="form-control" name="city" ref="city" id="city" placeholder="City and State of operation:"/>
                              <br/>
                            
                          <label>Picture:</label>
                          <input type="text" className="form-control" name="image" ref="image" id="image" placeholder="Copy an Instagram image link here:"/>
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
                            <input className="col-md-6 latLngInput" name="lat" ref="lat" id="lat" value={this.state.tempLat.toString()}/>
                            <input className="col-md-6 latLngInput" name="lon" ref="lon" id="lon" value={this.state.tempLng.toString()}/>
                            </div>
                            
                            
                        </div>
                       </div>
                    </div>
                            <br/>
                            <br/>

                          <div className="container-fluid">
                              <div className="col-md-4">
                                <label>Category:</label><br/>
                                <input type="checkbox" name="timeCategory[]" ref="timeCategory" id="timeCategory1" value="lunch"/>Lunch<br/>
                                <input type="checkbox" name="timeCategory[]" ref="timeCategory" id="timeCategory2" value="dinner"/>Dinner<br/>
                                <input type="checkbox" name="timeCategory[]" ref="timeCategory" id="timeCategory3" value="other"/>Other<br/>
                              </div>
                              <div className="col-md-4">
                                <label>Payment Options:</label><br/>
                                <input type="checkbox" name="payment[]" ref="payment" id="payment1" value="cash"/>Cash<br/>
                                <input type="checkbox" name="payment[]" ref="payment" id="payment2" value="card"/>Card<br/>
                                <input type="checkbox" name="payment[]" ref="payment" id="payment3" value="checks"/>Checks<br/>
                              </div>
                              <div className="col-md-4">
                                  <label>Eating preference options:</label><br/>
                                  <input type="checkbox" name="foodOptions[]" ref="foodOptions" id="foodOptions1" value="./img/vegan.png"/>Vegan<br/>
                                  <input type="checkbox" name="foodOptions[]" ref="foodOptions" id="foodOptions2" value="./img/organic.png"/>Organic<br/>
                                  <input type="checkbox" name="foodOptions[]" ref="foodOptions" id="foodOptions3" value="./img/glutenFree.png"/>Gluten Free<br/>
                              </div>
                        </div><br/>



                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-md-6">
                                </div><br/>

                                <div className="container-fluid">
                                  <div className="col-md-6">
                                    <label>Facebook:</label>
                                    <input type="text" className="form-control" name="facebook" ref="facebook" id="facebook" placeholder="Copy your Facebook URL here:"/>
                                  </div>

                                  <div className="col-md-6">
                                    <label>Twitter:</label>
                                    <input type="text" className="form-control" name="twitter" ref="twitter" id="twitter" placeholder="Copy your Twitter URL here:"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <br/>
                            
                          <button className="btn btn-warning" onClick={this.handleSubmit}>Submit</button>
                          </div>
                        </form>
                    </div>
                </div>
        );
    }
});

React.render(<TruckEntryForm/>, document.getElementById("entry-form"));