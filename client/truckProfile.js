var React = require('react');

var TruckProfileLg = React.createClass({
    render: function() {
        
      var categoryLoop = this.props.data.timeCategory.map(function(truck){
        return(
          <div className="col-lg-1 well well-orange text-center">{truck}</div>
          )
      });

      var cuisineLoop = this.props.data.cuisine.map(function(truck){
        return(
          <div className="well well-orange-cuisine text-center">{truck}</div>
          )
      });

      var optionsLoop = this.props.data.foodOptions.map(function(truck){
        return(
          <img src={truck}></img>
          )
      });

      var moneyIcon = "fa fa-money"; 

      var paymentLoop = this.props.data.payment.map(function(truck){

        if (truck === moneyIcon){
          return(
            <div className="white">
              <div className="col-lg-4">
                <i className={truck + " money-icon-lg"}></i>
              </div>
            </div>
            )
        }
          
        else if (truck === "./img/checkbook.png"){
            return(
            <div className="white">
              <div className="col-lg-4 check-left-lg">
                <img src={truck} className="check-icon-md"></img>
              </div>
            </div>
            )
        }

        else{
          return(
          <div className="white">
            <div className="col-lg-4">
              <i className={truck + " icon-md-sizer"}></i>
            </div>
          </div>
          )
        }
      });
      
      var imgg = this.props.data.image
      var media = "/media/"

      return (
        <div>
        <div className='hidden-sm hidden-xs hidden-md'>
          <div className="row">
          <div className="col-lg-3">
            <img className="img-responsive" src={imgg + media}/>
          </div>
          <div className="col-lg-7 truckPage-vert-push-sm">
            <h1 className="profile-title">{this.props.data.truckName}</h1><br></br>
            <h5 className="profile-city">{this.props.data.city}</h5>
            <div className="row truckPage-left-spacer-sm">
              <div>{categoryLoop}</div>
            </div>
          </div>
          <div className="col-lg-2">
            <button className="btn btn-warning ghost center-block back-button-lg" onClick={this.props.toggleTruckList}><h3>Back</h3></button>
          </div> 
        </div>
      <div className="row">
        <div className="col-lg-3 col-lg-offset-1">
          <h3 className="white">Info</h3>
          <p className="white">{this.props.data.description}</p>
        </div>
        <div className="col-lg-3 col-lg-offset-1">
          <h3 className="white">Payment</h3>
          <div>{paymentLoop}</div>
        </div>
        <div className="col-lg-3 col-lg-offset-1">
          <h3 className="white">Cuisine</h3>
          <div>{cuisineLoop}</div>
          <h3 className="white">Food Options</h3>
            <div>{optionsLoop}</div>
        </div>
      </div>
      <div className="row row-spacing">
        <div className="col-lg-3 col-lg-offset-1">
            <h3 className="white top-no-margin">Hours</h3>
            <table className="table"><h4>
                <tr className="white">
                    <td>Monday</td>
                    <td>{this.props.data.monTime}</td>
                </tr>
                <tr className="white">
                    <td>Tuesday</td>
                    <td>{this.props.data.tuesTime}</td>
                </tr>
                <tr className="white">
                    <td>Wednesday</td>
                    <td>{this.props.data.wedTime}</td>
                </tr>
                <tr className="white">
                    <td>Thursday</td>
                    <td>{this.props.data.thurTime}</td>
                </tr>
                <tr className="white">
                    <td>Friday</td>
                    <td>{this.props.data.friTime}</td>
                </tr>
                <tr className="white">
                    <td>Saturday</td>
                    <td>{this.props.data.satTime}</td>
                </tr>
                <tr className="white">
                    <td>Sunday</td>
                    <td>{this.props.data.sunTime}</td>
                </tr>
            </h4></table>
        </div>
        <div className="col-lg-7 col-lg-offset-1">
          <img src="./img/map.png" className="truckList-map-aside"/>
        </div>
      </div>
    </div> 
    </div>
)}
});


// MEDIUM SIZE PROFILE-------------------------------------------------------


var TruckProfileMd = React.createClass({
    render: function() {

      var categoryLoop = this.props.data.timeCategory.map(function(truck){
        return(
            <div className="well well-orange text-center truckPage-stacking-cat-md">{truck}</div>
          )
      });

      var cuisineLoop = this.props.data.cuisine.map(function(truck){
        return(
          <div className="col-md-6">
            <div className="well well-orange-cuisine-md text-center">{truck}</div>
          </div>
          )
      });

      var optionsLoop = this.props.data.foodOptions.map(function(truck){
        return(
          <img src={truck}></img>
          )
      });

      var moneyIcon = "fa fa-money";

      var paymentLoop = this.props.data.payment.map(function(truck){
        
        if (truck === moneyIcon){
          return(
            <div className="white">
              <div className="col-md-4">
                <i className={truck + " money-icon-lg"}></i>
              </div>
            </div>
            )
        }
          
        else if (truck === "./img/checkbook.png"){
            return(
            <div className="white">
              <div className="col-md-4 check-left-md">
                <img src={truck} className="check-icon-md"></img>
              </div>
            </div>
            )
        }

        else {
          return(
            <div className="white">
              <div className="col-md-4">
                <i className={truck + " icon-md-sizer"}></i>
              </div>
            </div>
            )
        }
      });

      return (
        <div>
        <div className='hidden-lg hidden-sm hidden-xs'>
          <div className="row">
              <div className="col-md-3">
                <a href="#" className="thumbnail">
                  <img src="./img/elCaz.jpg"/>
                </a>
              </div>

              <div className="col-md-5 truckPage-vert-push-sm">
                <h2 className="profile-title">{this.props.data.truckName}</h2><br></br>
                <h5 className="profile-city">{this.props.data.city}</h5>  
              </div>    
              <div className="col-md-2">
                  <div>{categoryLoop}</div>
              </div>
              <div className="col-md-2">
            <button className="btn btn-warning ghost center-block back-button-lg" onClick={this.props.toggleTruckList}><h3>Back</h3></button>
          </div> 
          </div>
            
      <div className="row">
        <div className="col-md-11 col-md-offset-1">
          <h3 className="white">Info</h3>
          <p className="white">{this.props.data.description}</p>
        </div>

        <div className="col-md-3 col-md-offset-2">
          <h3 className="white">Payment</h3>
          <div>{paymentLoop}</div>
        </div>
        <div className="col-md-3 col-md-offset-3">
          <h3 className="white">Cuisine</h3>
            <div className="row">
              <div>{cuisineLoop}</div>
            </div>
          <h3 className="white">Food Options</h3>
            <div>{optionsLoop}</div>
        </div>
      </div>
      <div className="row vertical-center truckPage-vh-50">
        <div className="col-md-3 col-md-offset-1">
            <h3 className="white top-no-margin">Hours</h3>
            <table className="table"><h4>
                <tr className="white">
                    <td>Monday</td>
                    <td>{this.props.data.monTime}</td>
                </tr>
                <tr className="white">
                    <td>Tuesday</td>
                    <td>{this.props.data.tuesTime}</td>
                </tr>
                <tr className="white">
                    <td>Wednesday</td>
                    <td>{this.props.data.wedTime}</td>
                </tr>
                <tr className="white">
                    <td>Thursday</td>
                    <td>{this.props.data.thurTime}</td>
                </tr>
                <tr className="white">
                    <td>Friday</td>
                    <td>{this.props.data.friTime}</td>
                </tr>
                <tr className="white">
                    <td>Saturday</td>
                    <td>{this.props.data.satTime}</td>
                </tr>
                <tr className="white">
                    <td>Sunday</td>
                    <td>{this.props.data.sunTime}</td>
                </tr>
                
            </h4></table>
            </div>
            <div className="col-md-7 col-md-offset-1">
              <img src="./img/map.png" className="truckList-map-below"/>
            </div>
          </div>
        </div>
        </div>
            );
    }
});

// SMALL SIZE PROFILE-------------------------------------------------------
var TruckProfileSm = React.createClass({
    render: function() {

      var categoryLoop = this.props.data.timeCategory.map(function(truck){
        return(
          <div className="well well-orange text-center truckPage-stacking-cat-sm">{truck}</div>
          )
      });

      var cuisineLoop = this.props.data.cuisine.map(function(truck){
        return(
          <div className="col-sm-6">
            <div className="well well-orange-cuisine-sm text-center truckPage-cusine-sm">{truck}</div>
          </div>
          )
      });

      var optionsLoop = this.props.data.foodOptions.map(function(truck){
        return(
          <div className="col-sm-4 truckPage-opt-sm">
          <img src={truck}></img>
          </div>
          )
      });

      var moneyIcon = "fa fa-money";
      var checkIcon = "./img/checkbook.png";

      var paymentLoop = this.props.data.payment.map(function(truck){
        
        if (truck === moneyIcon){
          return(
            <div className="white">
              <div className="col-sm-4">
                <i className={truck + " money-icon-sm"}></i>
              </div>
            </div>
            )
        }
          
        else if (truck === "./img/checkbook.png"){
            return(
            <div className="white">
              <div className="col-sm-4 check-left-md">
                <img src={truck} className="check-icon-sm"></img>
              </div>
            </div>
            )
        }

        else{
          return(
            <div className="white">
              <div className="col-sm-4">
                <i className={truck + " icon-sm-sizer"}></i>
              </div>
            </div>
            )
      }
      });

      return (
        <div>
        <div className='hidden-xs hidden-md hidden-lg'>
          <div className="row">
              <div className="col-sm-3">
                <a href="#" className="thumbnail">
                  <img src="./img/elCaz.jpg"/>
                </a>
              </div>

              <div className="col-sm-5 truckPage-vert-push-sm">
                <h1 className="profile-title-sm">{this.props.data.truckName}</h1><br></br>
                <h5 className="profile-city-sm">{this.props.data.city}</h5>  
              </div>    

              <div className="col-sm-2">
                  <div className="stacking-cat-sm">{categoryLoop}</div>
              </div>
              <div className="col-sm-2">
                  <button className="btn btn-warning ghost center-block back-button-sm" onClick={this.props.toggleTruckList}><h3>Back</h3></button>
              </div> 
          </div>
            
      <div className="row">
        <div className="col-sm-11 col-sm-offset-1">
          <h3 className="white">Info</h3>
          <p className="white">{this.props.data.description}</p>
        </div>
      </div>

      <div className="row vertical-center truckPage-vh-10">
        <div className="col-sm-4 col-sm-offset-2">
          <h3 className="white">Payment</h3>
          <div>{paymentLoop}</div>
        </div>
        <div className="col-sm-3 col-sm-offset-2">
          <h3 className="white">Cuisine</h3>
            <div className="row">
              <div>{cuisineLoop}</div>
            </div>
          <h3 className="white">Food Options</h3>
            <div className="row">
                <div>{optionsLoop}</div>
            </div>
        </div>
      </div>
      <div className="row vertical-center truckPage-vh-40">
        <div className="col-sm-3 col-sm-offset-1">
            <h3 className="white top-no-margin">Hours</h3>
            <table className="table"><h4>
                <tr className="white">
                    <td>Monday</td>
                    <td>{this.props.data.monTime}</td>
                </tr>
                <tr className="white">
                    <td>Tues</td>
                    <td>{this.props.data.tuesTime}</td>
                </tr>
                <tr className="white">
                    <td>Weds</td>
                    <td>{this.props.data.wedTime}</td>
                </tr>
                <tr className="white">
                    <td>Thurs</td>
                    <td>{this.props.data.thurTime}</td>
                </tr>
                <tr className="white">
                    <td>Fri</td>
                    <td>{this.props.data.friTime}</td>
                </tr>
                <tr className="white">
                    <td>Sat</td>
                    <td>{this.props.data.satTime}</td>
                </tr>
                <tr className="white">
                    <td>Sun</td>
                    <td>{this.props.data.sunTime}</td>
                </tr>
            </h4></table>
        </div>
        <div className="col-sm-7 col-sm-offset-1">
          <img src="./img/map.png" className="truckList-map-below"/>
        </div>

      </div>
    </div>
    </div>
            );
    }
});


// EXTRA SMALL SIZE PROFILE-------------------------------------------------------

var TruckProfileXs = React.createClass({
    render: function() {

      var categoryLoop = this.props.data.timeCategory.map(function(truck){
        return(
          <div className="col-xs-4">
            <div className="well well-orange text-center truckPage-horiz-cat-sm">{truck}</div>
          </div>
          )
      });

      var cuisineLoop = this.props.data.cuisine.map(function(truck){
        return(
          <div className="well well-orange-cuisine text-center truckPage-cuisine-xs">{truck}</div>
          )
      });

      var optionsLoop = this.props.data.foodOptions.map(function(truck){
        return(
          <div className="col-xs-4 truckPage-opt-sm">
            <img src={truck} className="img-responsive"></img>
          </div>
          )
      });

      var moneyIcon = "fa fa-money";

      var paymentLoop = this.props.data.payment.map(function(truck){
        
        if (truck === moneyIcon){
          return(
            <div className="white">
              <div className="col-xs-4 text-center">
                <i className={truck + " money-icon-xs"}></i>
              </div>
            </div>
            )
        }
          
        else if (truck === "./img/checkbook.png"){
            return(
            <div className="white">
              <div className="col-xs-4 check-left-md">
                <img src={truck} className="check-icon-xs center-block"></img>
              </div>
            </div>
            )
        }

        else {
          return(
            <div className="white">
              <div className="col-xs-4 text-center">
                <i className={truck + " icon-xs-sizer"}></i>
              </div>
            </div>
            )
      }
      });

        return (
        <div>
        <div className='hidden-sm hidden-md hidden-lg'>
          <div className="row">
                <div className="col-xs-3">
                  <button className="btn btn-warning ghost center-block back-button-sm" onClick={this.props.toggleTruckList}><i className="fa fa-chevron-left"/></button>
              </div> 
          </div>
          <div className="row">
              <div className="col-sm-3">
                <a href="#" className="thumbnail truckPage-img-holder-sm">
                  <img src="./img/elCaz.jpg"/>
                </a>
              </div>

              <div className="col-sm-7 truckPage-vert-push-sm">
                <h1 className="profile-title text-center profile-title-sm">{this.props.data.truckName}</h1><br></br>
                <h5 className="profile-city text-center profile-city-sm">{this.props.data.city}</h5>  
              </div>    

              <div className="row">
                  <div>{categoryLoop}</div>
              </div>
          </div>
            
      <div className="row">
        <div className="col-sm-11 col-sm-offset-1 truckPage-spacer-sm">
          <h3 className="white text-center">Info</h3>
          <p className="white">{this.props.data.description}</p>
        </div>
      </div>

      <div className="row vertical-center truckPage-vh-10">
          <div className="col-xs-6">
              <h3 className="white text-center">Cuisine</h3>
          </div>
          <div className="col-xs-6">
              <h3 className="white text-center">Food Opt.</h3>
          </div>
      </div>      
            
      <div className="row vertical-center truckPage-vh-10">
          <div className="col-xs-6">
            <div>{cuisineLoop}</div>
          </div>
          <div className="col-xs-6">
            <div className="row">
                <div>{optionsLoop}</div>
            </div>
          </div>
        </div>
            
    <div className="row truckPage-vh-10">
            <div className="col-xs-12 center-block">
              <h3 className="white text-center">Payment</h3>
              <div className="row">{paymentLoop}</div>
            </div>
     </div>
            
    <div className="row vertical-center center-block truckPage-vh-50">
        <div className="col-xs-12 center-block">
            <h3 className="white text-center top-no-margin">Hours</h3>
            <table className="table"><h4>
                <tr className="white">
                    <td>Mon</td>
                    <td>{this.props.data.monTime}</td>
                    <td>Fri</td>
                    <td>{this.props.data.friTime}</td>
                </tr>
                <tr className="white">
                    <td>Tues</td>
                    <td>{this.props.data.tuesTime}</td>
                    <td>Sat</td>
                    <td>{this.props.data.satTime}</td>
                </tr>
                <tr className="white">
                    <td>Weds</td>
                    <td>{this.props.data.wedTime}</td>
                    <td>Sun</td>
                    <td>{this.props.data.sunTime}</td>
                </tr>
                <tr className="white">
                    <td>Thurs</td>
                    <td>{this.props.data.thurTime}</td>
                    <td></td>
                    <td></td>
                </tr>
                
            </h4></table>
            
        </div>
    </div>
            
    <div className="row vertical-center truckPage-vh-10 truckPage-map-holder-xs">        
        <div className="col-sm-7 col-sm-offset-1">
          <img src="./img/map.png" className="truckList-map-below"/>
        </div>

    </div>
    </div>

                </div>
            );
    }
});



var TruckProfileBox = React.createClass({
    render: function() {
        return (
            <div>
                <TruckProfileLg data={this.props.data} toggleTruckList={this.props.toggleTruckList}/>
                <TruckProfileMd data={this.props.data} toggleTruckList={this.props.toggleTruckList}/>
                <TruckProfileSm data={this.props.data} toggleTruckList={this.props.toggleTruckList}/>
                <TruckProfileXs data={this.props.data} toggleTruckList={this.props.toggleTruckList}/>
            </div>
        );
    }
});

module.exports = TruckProfileBox;