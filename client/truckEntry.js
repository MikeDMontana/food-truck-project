var React = require('react');
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

var TruckEntryForm = React.createClass({
        render: function() {
            return (
                <div>
                    <div className="container-fluid">
                      <form action="/api/trucks" method="POST" role="form">
                        <h3>Truck Entry Form</h3>
                        <div className="form-group">

                          <div className="container-fluid">
                            <div className="col-md-6">
                              <label>Truck Name:</label>
                              <input type="text" className="form-control" name="truckName" placeholder="Truck Name"/>
                            </div>

                            <div className="col-md-6">
                              <label>City:</label>
                              <input type="text" className="form-control" name="city" placeholder="City and State of operation:"/>
                            </div>
                          </div><br/>

                          <div className="container-fluid">
                            <div className="col-md-6">
                              <label>Description:</label>
                              <input type="text" className="form-control" name="description" placeholder="Tell us about the truck!"/>
                            </div>

                           <div className="col-md-6">
                              <label>Picture:</label>
                              <input type="text" className="form-control" name="image" ref="image" placeholder="Copy an Instagram image link here:"/>
                            </div>
                          </div><br/>

                          <div className="container-fluid">
                            <div className="col-md-6">
                              <label>Cuisine:</label>
                              <input type="text" className="form-control" name="cuisine[]" placeholder="Food type #1"/>
                              <input type="text" className="form-control" name="cuisine[]" placeholder="Food type #2"/>
                            </div>

                            <div className="col-md-6">
                              <label>Location:</label>
                                <div className="container-fluid">
                                <div className="col-md-6">
                                    <label>Lat:</label>
                                    <input type="text" className="form-control" name="lat" placeholder="Copy your lat here:"/>
                                  </div>

                                  <div className="col-md-6">
                                    <label>Lon:</label>
                                    <input type="text" className="form-control" name="lon" placeholder="Copy your lon here:"/>
                                  </div>
                                </div>
                            </div>
                          </div><br/>

                          <div className="container-fluid">
                            <div className="col-md-6">

                              <label>Hours:</label>
                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Monday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="monTime" value="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Tuesday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="tuesTime" value="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Wednesday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="wedTime" value="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Thursday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="thurTime" value="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Friday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="friTime" value="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Saturday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="satTime" value="Closed"/>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-2">
                                  <h5>Sunday</h5>
                                </div>
                                <div className="col-md-5">
                                  <input type="text" className="form-control" name="sunTime" value="Closed"/>
                                </div>
                              </div>

                            </div>
                            <div className="col-md-6">
                              <div>
                                <label>Category:</label><br/>
                                <input type="checkbox" name="timeCategory[]" ref="timeCategory" value="lunch"/>Lunch<br/>
                                <input type="checkbox" name="timeCategory[]" ref="timeCategory" value="dinner"/>Dinner<br/>
                                <input type="checkbox" name="timeCategory[]" ref="timeCategory" value="other"/>Other<br/>
                              </div><br/>
                              <div>
                                <label>Payment Options:</label><br/>
                                <input type="checkbox" name="payment[]" ref="payment" value="fa fa-money"/>Cash<br/>
                                <input type="checkbox" name="payment[]" ref="payment" value="fa fa-credit-card"/>Card<br/>
                                <input type="checkbox" name="payment[]" ref="payment" value="./img/checkbook.png"/>Checks<br/>
                              </div><br/><br/><br/>
                            </div>
                        </div>



                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-md-6">
                                  <label>Eating preference options:</label><br/>
                                  <input type="checkbox" name="foodOptions[]" ref="foodOptions" value="./img/vegan.png"/>Vegan<br/>
                                  <input type="checkbox" name="foodOptions[]" ref="foodOptions" value="./img/organic.png"/>Organic<br/>
                                  <input type="checkbox" name="foodOptions[]" ref="foodOptions" value="./img/glutenFree.png"/>Gluten Free<br/>
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
                          </div>
                          <button type="submit" className="btn btn-warning">Submit</button>                      
                        </form>
                    </div>
                </div>
        );
    }
});

React.render(<TruckEntryForm/>, document.getElementById("entry-form"));