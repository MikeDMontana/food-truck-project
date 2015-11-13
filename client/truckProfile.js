var React = require('react');
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
var mapStyles = require('./mapstyles');


var HoursLoop = React.createClass({
    
    render: function(){
        
          var self = this;
        
          var wrapAll = function(){
              
              var openDate = self.props.openDate;
              var closeDate = self.props.closeDate;
             
              var openToTwelveHours = self.props.openDate.getHours();
              var closeToTwelveHours = self.props.closeDate.getHours();
              
              var openMin = self.props.openDate.getMinutes();
              var closeMin = self.props.closeDate.getMinutes();
        
              if (openToTwelveHours && openMin === 0 && closeMin === 0){
                 if (openDate.getHours() >= 12){
                      openToTwelveHours = (openToTwelveHours - 12);
                      openMin = openMin + "0 pm";
                  } else {
                      openToTwelveHours = openToTwelveHours
                      openMin = openMin + "0 am";
                  };
                      
                
                  if (closeDate.getHours() >= 12){
                      closeToTwelveHours = (closeToTwelveHours - 12);
                      closeMin = closeMin + "0 pm"
                  } else {
                      closeToTwelveHours = closeToTwelveHours;
                      closeMin = closeMin + "0 am";
                  };

                  if (closeDate.getHours() === 0){
                      closeToTwelveHours = 12;
                      closeMin = openMin + " am";
                  };

                  if (openDate.getHours() === 0){
                      openToTwelveHours = 12; 
                      openMin = openMin + " am";
                  };


                  return(
                      <div>{openToTwelveHours}:{openMin} - {closeToTwelveHours}:{closeMin}</div>
                  )

              } else if (openToTwelveHours && openMin > 0 && closeMin === 0){
                        
                     if (openDate.getHours() >= 12){
                          openToTwelveHours = (openToTwelveHours - 12)
                          openMin = openMin + " pm";
                      } else {
                          openToTwelveHours = openToTwelveHours;
                              openMin = openMin + " am";
                      };

              
                      if (closeDate.getHours() >= 12){
                          closeToTwelveHours = (closeToTwelveHours - 12);
                           closeMin = closeMin + "0 pm"
                      } else {
                          closeToTwelveHours = closeToTwelveHours;
                          closeMin = closeMin + "0 am";
                      };
              

                      if (closeDate.getHours() === 0){
                          closeToTwelveHours = 12;
                          closeMin = closeMin + "0 am";
                      };

                      if (openDate.getHours() === 0){
                          openToTwelveHours = 12;
                          openMin = openMin + " am";
                      };

                      return(
                          <div>{openToTwelveHours}:{openMin} - {closeToTwelveHours}:{closeMin}</div>
                      )

              } else if (openToTwelveHours && openMin === 0 && closeMin > 0){
                        
                     if (openDate.getHours() >= 12){
                          openToTwelveHours = (openToTwelveHours - 12)
                          openMin = openMin + "0 pm";
                      } else {
                          openToTwelveHours = openToTwelveHours;
                              openMin = openMin + "0 am";
                      };

              
                      if (closeDate.getHours() >= 12){
                          closeToTwelveHours = (closeToTwelveHours - 12);
                           closeMin = closeMin + " pm"
                      } else {
                          closeToTwelveHours = closeToTwelveHours;
                          closeMin = closeMin + " am";
                      };
              

                      if (closeDate.getHours() === 0){
                          closeToTwelveHours = 12;
                          closeMin = closeMin + " am";
                      };

                      if (openDate.getHours() === 0){
                          openToTwelveHours = 12;
                          openMin = openMin + "0 am";
                      };

                      return(
                          <div>{openToTwelveHours}:{openMin} - {closeToTwelveHours}:{closeMin}</div>
                      )

              } else if (openToTwelveHours && openMin > 0 && closeMin > 0){
                        
                     if (openDate.getHours() >= 12){
                          openToTwelveHours = (openToTwelveHours - 12)
                          openMin = openMin + " pm";
                      } else {
                          openToTwelveHours = openToTwelveHours;
                              openMin = openMin + " am";
                      };

              
                      if (closeDate.getHours() >= 12){
                          closeToTwelveHours = (closeToTwelveHours - 12);
                           closeMin = closeMin + " pm"
                      } else {
                          closeToTwelveHours = closeToTwelveHours;
                          closeMin = closeMin + " am";
                      };
              

                      if (closeDate.getHours() === 0){
                          closeToTwelveHours = 12;
                          closeMin = closeMin + " am";
                      };

                      if (openDate.getHours() === 0){
                          openToTwelveHours = 12 + " am";
                          openMin = openMin + " am";
                      };

                      return(
                          <div>{openToTwelveHours}:{openMin} - {closeToTwelveHours}:{closeMin}</div>
                      )

              }
              
              else if (!openDate.getHours()){ 

                return(
                  <div>Closed</div>
                 )
              }
          }
          
        return(
            <div>{wrapAll()}</div>
        )
    }
});

var PaymentOptions = React.createClass({
  render: function() {
    var self = this;
    var checkIcon = "./img/checkbook.png";
    var bootstrapColumnClass = 'col-' + this.props.size + '-4';
    var paymentOptionsElement = this.props.data.payment.map(function(paymentOption){

      if (paymentOption === "cash"){
        return(
          <div className="white">
            <div className={bootstrapColumnClass + " text-center"}>
              <i className={"fa fa-money money-icon-" + self.props.size}></i>
            </div>
          </div>
          )
      }
      else if (paymentOption === "checks"){
        return(
          <div className="white">
            <div className={bootstrapColumnClass + " check-left-" + self.props.size}>
              <img src={checkIcon} className={"check-icon-" + self.props.size + " center-block"}></img>
            </div>
          </div>
        )
      }

      else{
        return(
          <div className="white">
            <div className={bootstrapColumnClass + " text-center"}>
              <i className={"fa fa-credit-card icon-" + self.props.size + "-sizer card-" + self.props.size + "-sizer"}></i>
            </div>
          </div>
        )
      }
    });

    return <div>{paymentOptionsElement}</div>;
  }
});



// LARGE SIZE PROFILE
var TruckProfileLg = React.createClass({
    
   onMapCreated(map) {
    var latty = this.props.data.lat;
    var longy = this.props.data.lon;
    map.setOptions({
      disableDefaultUI: true,
      styles: mapStyles
    });
    google.maps.event.addDomListener(window, "resize", function() {
            google.maps.event.trigger(map, "resize");
            map.setCenter({lat: Number(latty), lng: Number(longy)}); 
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

    
    render: function() {
        
      var self = this;    
        
      var imgg = this.props.data.image[1];
      var media = "/media/";
        
        // ----- LOOPS -----
        
      var categoryLoop = this.props.data.timeCategory.map(function(truck){
        if (truck != "all"){
            return(
              <div className="col-lg-1 well well-orange text-center">{truck}</div>
              )
        } else {
            return
        }
      });

      var cuisineLoop = this.props.data.cuisine.map(function(truck){
        return(
          <div className="well well-orange-cuisine text-center">{truck}</div>
          )
      });

      var foodOptions = function(){
            var emptyArray = [];
            
              var optionsLoop = self.props.data.foodOptions.map(function(truck){
                if (truck != []) {
                    return(
                        <img src={truck}></img>
                    )
                } else {
                    return
                }
              });
            
            if (self.props.data.foodOptions[0] != null){
                console.log(self.props.data.foodOptions);
                return (
                    <div>
                    <h3 className="white">Food Options</h3>
                    {optionsLoop}
                    </div>
                )
            } else {
                console.log("hello world")
                return
            }
        };

        
      // ----- INITIAL COMPONENTS AS VARIABLES ----- 
        
      var profileImg = function(){
          return(
            <a href={self.props.data.image[0]}>
            <img className="img-responsive thumbnail" src={imgg + media}/>
            </a>
          )
      };
        
      var profileSummary = function(){
          return(
            <div>
                <h1 className="profile-title">{self.props.data.truckName}</h1><br></br>
                <h5 className="profile-city">{self.props.data.city}</h5>
                <div className="row truckPage-left-spacer-sm">
                  <div>{categoryLoop}</div>
                </div>
            </div>
          )
      };
      
      var profileDescription = function(){
          return(
              <div>
                  <h3 className="white">Info</h3>
                  <p className="white">{self.props.data.description}</p>
              </div>
          )
      };
        
      var profilePayment = function(){
          return(
            <div>
              <h3 className="white">Payment</h3>
              <PaymentOptions data={self.props.data} size={"lg"} />
            </div>
          
          )
      };
      
      var profileFood = function(){
          return(
            <div>
              <h3 className="white">Cuisine</h3>
              <div>{cuisineLoop}</div>
              <div>{foodOptions()}</div>
            </div>
          )
      };
    
    
      var profileHours = function(){
        return(
            <div>
                <h3 className="white top-no-margin">Hours</h3>
                <table className="table"><h4>
                    <tr className="white">
                        <td>Monday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.monOpen)} closeDate={new Date(self.props.data.monClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Tuesday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.tuesOpen)} closeDate={new Date(self.props.data.tuesClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Wednesday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.wedOpen)} closeDate={new Date(self.props.data.wedClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Thursday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.thurOpen)} closeDate={new Date(self.props.data.thurClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Friday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.friOpen)} closeDate={new Date(self.props.data.friClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Saturday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.satOpen)} closeDate={new Date(self.props.data.satClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Sunday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.sunOpen)} closeDate={new Date(self.props.data.sunClose)} /></td>
                    </tr>
                </h4></table>
            </div>
        )
      };

      var profileMap = function(){
          return(
              <Gmaps
                width={"100%"}
                height={'50vh'}
                lat={self.props.data.lat}
                lng={self.props.data.lon}
                zoom={16}
                loadingMessage={'Be happy'}
                params={{v: '3.exp'}}
                onMapCreated={self.onMapCreated}>

                <Marker
                  lat={self.props.data.lat}
                  lng={self.props.data.lon}
                  draggable={false}
                  icon={'../img/logo_notext_sm.png'}
                  onDragEnd={self.onDragEnd} />
              </Gmaps>
          )
      }

      return (
        <div>
          
        <div className='hidden-sm hidden-xs hidden-md'>
          
          <div className="row">
              <div className="col-lg-3">
                {profileImg()}
              </div>
          
              <div className="col-lg-9 truckPage-vert-push-sm">
                {profileSummary()}
              </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-lg-offset-1">
                {profileDescription()}
            </div>

            <div className="col-lg-3 col-lg-offset-1">
                {profilePayment()}
            </div>

            <div className="col-lg-3 col-lg-offset-1">
                {profileFood()}
            </div>
          </div>

          <div className="row row-spacing">
            <div className="col-lg-3 col-lg-offset-1">
                {profileHours()}
            </div>
                
            <div className="col-lg-7 col-lg-offset-1">
                 {profileMap()}
            </div>
                  
          </div>
                  
    </div> 
    </div>
  )}
});



// MEDIUM SIZE PROFILE-----------------------------------------------------
var TruckProfileMd = React.createClass({
    
   onMapCreated(map) {
    var latty = this.props.data.lat;
    var longy = this.props.data.lon;
    map.setOptions({
      disableDefaultUI: true,
      styles: mapStyles
    });
    google.maps.event.addDomListener(window, "resize", function() {
            google.maps.event.trigger(map, "resize");
            map.setCenter({lat: Number(latty), lng: Number(longy)}); 
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
    
    render: function() {
        
     var self = this;
     var imgg = this.props.data.image[1];
     var media = "/media/";
        
        
      // ----- LOOPS -----

      var categoryLoop = this.props.data.timeCategory.map(function(truck){
          
        if (truck != "all"){
            return(
            <div className="well well-orange text-center truckPage-stacking-cat-md">{truck}</div>
          )
        } else {
            return
        }
          
      });

      var cuisineLoop = this.props.data.cuisine.map(function(truck){
        return(
          <div className="col-md-6">
            <div className="well well-orange-cuisine-md text-center">{truck}</div>
          </div>
          )
      });

      var foodOptions = function(){
            var emptyArray = [];
            
              var optionsLoop = self.props.data.foodOptions.map(function(truck){
                if (truck != []) {
                    return(
                        <img src={truck}></img>
                    )
                } else {
                    return
                }
              });
            
            if (self.props.data.foodOptions[0] != null){
                console.log(self.props.data.foodOptions);
                return (
                    <div>
                    <h3 className="white">Food Options</h3>
                    {optionsLoop}
                    </div>
                )
            } else {
                console.log("hello world")
                return
            }
        };
        
        
        
        // ----- INITIAL COMPONENTS AS VARIABLES ----- 
        
      var profileImg = function(){
          return(
            <a href={self.props.data.image[0]}>
            <img className="img-responsive thumbnail" src={imgg + media}/>
            </a>
          )
      };
        
      var profileSummary = function(){
          return(
            <div>
                <h2 className="profile-title">{self.props.data.truckName}</h2><br></br>
                <h5 className="profile-city">{self.props.data.city}</h5>  
            </div>
          )
      };
      
      var profileDescription = function(){
          return(
              <div>
                  <h3 className="white">Info</h3>
                  <p className="white">{self.props.data.description}</p>
              </div>
          )
      };
        
      var profilePayment = function(){
          return(
            <div>
              <h3 className="white">Payment</h3>
              <PaymentOptions data={self.props.data} size={"md"} />
            </div>
          
          )
      };
      
      var profileFood = function(){
          return(
            <div>
                <h3 className="white">Cuisine</h3>
                <div className="row">
                  <div>{cuisineLoop}</div>
                </div>
                {foodOptions()}
            </div>
          )
      };
    
      var profileHours = function(){
        return(
            <div>
                <h3 className="white top-no-margin">Hours</h3>
                <table className="table"><h4>
                    <tr className="white">
                        <td>Monday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.monOpen)} closeDate={new Date(self.props.data.monClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Tuesday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.tuesOpen)} closeDate={new Date(self.props.data.tuesClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Wednesday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.wedOpen)} closeDate={new Date(self.props.data.wedClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Thursday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.thurOpen)} closeDate={new Date(self.props.data.thurClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Friday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.friOpen)} closeDate={new Date(self.props.data.friClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Saturday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.satOpen)} closeDate={new Date(self.props.data.satClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Sunday</td>
                        <td><HoursLoop openDate={new Date(self.props.data.sunOpen)} closeDate={new Date(self.props.data.sunClose)} /></td>
                    </tr>
                </h4></table>
            </div>
        )
      };

      var profileMap = function(){
          return(
              <Gmaps
                width={"100%"}
                height={'45vh'}
                lat={self.props.data.lat}
                lng={self.props.data.lon}
                zoom={16}
                loadingMessage={'Be happy'}
                params={{v: '3.exp'}}
                onMapCreated={self.onMapCreated}>

                <Marker
                  lat={self.props.data.lat}
                  lng={self.props.data.lon}
                  draggable={false}
                  icon={'../img/logo_notext_sm.png'}
                  onDragEnd={self.onDragEnd} />
              </Gmaps>
          )
      };

      return (
        <div>
        <div className='hidden-lg hidden-sm hidden-xs'>
          
          <div className="row">
              <div className="col-md-3">
                {profileImg()}
              </div>

              <div className="col-md-7 truckPage-vert-push-sm">
                  {profileSummary()}
              </div>    
          
              <div className="col-md-2">
                  <div>{categoryLoop}</div>
              </div>
          </div>
            
          <div className="row">     
            <div className="col-md-11 col-md-offset-1">
                {profileDescription()}
            </div>

            <div className="col-md-3 col-md-offset-2">
                 {profilePayment()}
            </div>

            <div className="col-md-3 col-md-offset-3">
                {profileFood()}
            </div>
          </div>

          <div className="row vertical-center truckPage-vh-50">
            <div className="col-md-3 col-md-offset-1">
                 {profileHours()}
            </div>

            <div className="col-md-7 col-md-offset-1">
                {profileMap()}
            </div>
        </div>
    </div>
    </div>
            );
    }
});



// SMALL SIZE PROFILE-------------------------------------------------------
var TruckProfileSm = React.createClass({
    
   onMapCreated(map) {
    var latty = this.props.data.lat;
    var longy = this.props.data.lon;
    map.setOptions({
      disableDefaultUI: true,
      styles: mapStyles
    });
    google.maps.event.addDomListener(window, "resize", function() {
            google.maps.event.trigger(map, "resize");
            map.setCenter({lat: Number(latty), lng: Number(longy)}); 
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
    
    render: function() {
        
      var self = this;
      var imgg = this.props.data.image[1];
      var media = "/media/";
        
        
        
        // ----- LOOPS -----

      var categoryLoop = this.props.data.timeCategory.map(function(truck){
        if (truck != "all"){
            return(
            <div className="well well-orange text-center truckPage-stacking-cat-sm">{truck}</div>
          )
        } else {
            return
        }
      });

      var cuisineLoop = this.props.data.cuisine.map(function(truck){
        return(
          <div className="col-sm-6">
            <div className="well well-orange-cuisine-sm text-center truckPage-cusine-sm">{truck}</div>
          </div>
          )
      });
        
      var foodOptions = function(){
            
              var optionsLoop = self.props.data.foodOptions.map(function(truck){
                if (truck != []) {
                    return(
                      <div className="col-sm-4 truckPage-opt-sm">
                      <img src={truck}></img>
                      </div>
                    )
                } else {
                    return
                }
              });
            
            if (self.props.data.foodOptions[0] != null){
                console.log(self.props.data.foodOptions);
                return (
                    <div>
                    <h3 className="white">Food Options</h3>
                    <div className="row">
                        {optionsLoop}
                    </div>
                    </div>
                )
            } else {
                console.log("hello world")
                return
            }
        };
        
        
        
        
        // ----- INITIAL COMPONENTS AS VARIABLES ----- 
        
      var profileImg = function(){
          return(
            <a href={self.props.data.image[0]}>
            <img className="img-responsive thumbnail" src={imgg + media}/>
            </a>
          )
      };
        
      var profileSummary = function(){
          return(
            <div>
                <h1 className="profile-title-sm">{self.props.data.truckName}</h1><br></br>
                <h5 className="profile-city-sm">{self.props.data.city}</h5>  
            </div>
          )
      };
      
      var profileDescription = function(){
          return(
              <div>
                  <h3 className="white">Info</h3>
                  <p className="white">{self.props.data.description}</p>
              </div>
          )
      };
        
      var profilePayment = function(){
          return(
            <div>
              <h3 className="white">Payment</h3>
              <PaymentOptions data={self.props.data} size={"sm"} />
            </div>
          
          )
      };
      
      var profileFood = function(){
          return(
            <div>
                <h3 className="white">Cuisine</h3>
                <div className="row">
                  <div>{cuisineLoop}</div>
                </div>
                {foodOptions()}
            </div>
          )
      };
    
      var profileHours = function(){
        return(
            <div>
                <h3 className="white top-no-margin">Hours</h3>
                <table className="table"><h4>
                    <tr className="white">
                        <td>Mon</td>
                        <td><HoursLoop openDate={new Date(self.props.data.monOpen)} closeDate={new Date(self.props.data.monClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Tues</td>
                        <td><HoursLoop openDate={new Date(self.props.data.tuesOpen)} closeDate={new Date(self.props.data.tuesClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Weds</td>
                        <td><HoursLoop openDate={new Date(self.props.data.wedOpen)} closeDate={new Date(self.props.data.wedClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Thurs</td>
                        <td><HoursLoop openDate={new Date(self.props.data.thurOpen)} closeDate={new Date(self.props.data.thurClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Fri</td>
                        <td><HoursLoop openDate={new Date(self.props.data.friOpen)} closeDate={new Date(self.props.data.friClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Sat</td>
                        <td><HoursLoop openDate={new Date(self.props.data.satOpen)} closeDate={new Date(self.props.data.satClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Sun</td>
                        <td><HoursLoop openDate={new Date(self.props.data.sunOpen)} closeDate={new Date(self.props.data.sunClose)} /></td>
                    </tr>
                </h4></table>
            </div>
        )
      };

      var profileMap = function(){
          return(
              <Gmaps
                width={"100%"}
                height={'35vh'}
                lat={self.props.data.lat}
                lng={self.props.data.lon}
                zoom={16}
                loadingMessage={'Be happy'}
                params={{v: '3.exp'}}
                onMapCreated={self.onMapCreated}>

                <Marker
                  lat={self.props.data.lat}
                  lng={self.props.data.lon}
                  draggable={false}
                  icon={'../img/logo_notext_sm.png'}
                  onDragEnd={self.onDragEnd} />
              </Gmaps>
          )
      };

      return (
        <div>
        <div className='hidden-xs hidden-md hidden-lg'>
          
          <div className="row">
              <div className="col-sm-3">
                  {profileImg()}
              </div>

              <div className="col-sm-7 truckPage-vert-push-sm">
                  {profileSummary()}
              </div>    

              <div className="col-sm-2">
                  <div className="stacking-cat-sm">{categoryLoop}</div>
              </div>
          </div>
            
          <div className="row">
            <div className="col-sm-11 col-sm-offset-1">
                {profileDescription()}
            </div>
          </div>

          <div className="row vertical-center truckPage-vh-10">
            <div className="col-sm-4 col-sm-offset-2">
                 {profilePayment()}
            </div>
          
            <div className="col-sm-3 col-sm-offset-2">
                {profileFood()}
            </div>
          </div>
            
          <div className="row vertical-center truckPage-vh-40">
            <div className="col-sm-3 col-sm-offset-1">
                 {profileHours()}
            </div>
                
            <div className="col-sm-7 col-sm-offset-1">
                {profileMap()}
            </div>
          </div>
                 
    </div>
    </div>
            );
    }
});



// EXTRA SMALL SIZE PROFILE-------------------------------------------------------

var TruckProfileXs = React.createClass({
    
   onMapCreated(map) {
    var latty = this.props.data.lat;
    var longy = this.props.data.lon;
    map.setOptions({
      disableDefaultUI: true,
      styles: mapStyles
    });
    google.maps.event.addDomListener(window, "resize", function() {
            google.maps.event.trigger(map, "resize");
            map.setCenter({lat: Number(latty), lng: Number(longy)}); 
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
    
    render: function() {
        
      var self = this;
      var imgg = this.props.data.image[1];
      var media = "/media/";
      var smallPic = "?size=t"
      
      
      
      // ----- LOOPS ------

      var categoryLoop = this.props.data.timeCategory.map(function(truck){
        if (truck != "all"){
            return(
            <div className="col-xs-4">
                <div className="well well-orange text-center truckPage-horiz-cat-sm">{truck}</div>
            </div>
          )
        } else {
            return
        }
      });

      var cuisineLoop = this.props.data.cuisine.map(function(truck){
        return(
          <div className="well well-orange-cuisine text-center truckPage-cuisine-xs">{truck}</div>
          )
      });
        
      var foodOptions = function(){
            
              var optionsLoop = self.props.data.foodOptions.map(function(truck){
                if (truck != []) {
                    return(
                      <div className="col-xs-4 truckPage-opt-sm">
                        <img src={truck} className="img-responsive"></img>
                      </div>
                    )
                } else {
                    return
                }
              });
            
            if (self.props.data.foodOptions[0] != null){
                return (
                    <div>
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
                    </div>
                )
            } else {
                return(
                    <div>
                        <div className="row vertical-center truckPage-vh-10">
                          <div className="col-xs-12">
                              <h3 className="white text-center">Cuisine</h3>
                          </div>
                        </div>
                    
                        <div className="row vertical-center truckPage-vh-10">
                          <div className="col-xs-6">
                            <div>{cuisineLoop}</div>
                          </div>
                        </div>
                    </div>
                )
            }
        };
        
        
        
        
      // ----- INITIAL COMPONENTS AS VARIABLES
  
      var profileImg = function(){
          return(
            <a href={self.props.data.image[0]}>
              <img className="img-responsive truckPage-picture-xs thumbnail" src={imgg + media + smallPic}/>
            </a>
          )
      };
        
      var profileSummary = function(){
          return(
            <div>
                <h1 className="profile-title text-center profile-title-sm">{self.props.data.truckName}</h1><br></br>
                <h5 className="profile-city text-center profile-city-sm">{self.props.data.city}</h5>  
            </div>
          )
      };
      
      var profileDescription = function(){
          return(
              <div>
                  <h3 className="white">Info</h3>
                  <p className="white">{self.props.data.description}</p>
              </div>
          )
      };
        
      var profilePayment = function(){
          return(
            <div>
              <h3 className="white text-center">Payment</h3>
              <div className="row"><PaymentOptions data={self.props.data} size={"xs"} /></div>
            </div>
          
          )
      };
      
      var profileFood = function(){
          return(
            <div>
                <h3 className="white">Cuisine</h3>
                <div className="row">
                  <div>{cuisineLoop}</div>
                </div>
                {foodOptions()}
            </div>
          )
      };
    
      var profileHours = function(){
        return(
            <div>
                <h3 className="white text-center top-no-margin">Hours</h3>
                <table className="table"><h4>
                    <tr className="white">
                        <td>Mon</td>
                        <td><HoursLoop openDate={new Date(self.props.data.monOpen)} closeDate={new Date(self.props.data.monClose)} /></td>
                        <td>Fri</td>
                        <td><HoursLoop openDate={new Date(self.props.data.friOpen)} closeDate={new Date(self.props.data.friClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Tues</td>
                        <td><HoursLoop openDate={new Date(self.props.data.tuesOpen)} closeDate={new Date(self.props.data.tuesClose)} /></td>
                        <td>Sat</td>
                        <td><HoursLoop openDate={new Date(self.props.data.satOpen)} closeDate={new Date(self.props.data.satClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Weds</td>
                        <td><HoursLoop openDate={new Date(self.props.data.wedOpen)} closeDate={new Date(self.props.data.wedClose)} /></td>
                        <td>Sun</td>
                        <td><HoursLoop openDate={new Date(self.props.data.sunOpen)} closeDate={new Date(self.props.data.sunClose)} /></td>
                    </tr>
                    <tr className="white">
                        <td>Thurs</td>
                        <td><HoursLoop openDate={new Date(self.props.data.thurOpen)} closeDate={new Date(self.props.data.thurClose)} /></td>
                        <td></td>
                        <td></td>
                    </tr>

                </h4></table>
            </div>
        )
      };

      var profileMap = function(){
          return(
              <Gmaps
                width={"100%"}
                height={'50vh'}
                lat={self.props.data.lat}
                lng={self.props.data.lon}
                zoom={16}
                loadingMessage={'Be happy'}
                params={{v: '3.exp'}}
                onMapCreated={self.onMapCreated}>

                <Marker
                  lat={self.props.data.lat}
                  lng={self.props.data.lon}
                  draggable={false}
                  icon={'../img/logo_notext_sm.png'}
                  onDragEnd={self.onDragEnd} />
              </Gmaps>
          )
      };

        return (
        <div>
        <div className='hidden-sm hidden-md hidden-lg'>
            
          <div className="row">
              <div className="col-sm-3">
                {profileImg()}
              </div>

              <div className="col-sm-7 truckPage-vert-push-sm">
                {profileSummary()}
              </div>    

              <div className="row">
                  <div>{categoryLoop}</div>
              </div>
          </div>
            
          <div className="row">
            <div className="col-sm-11 col-sm-offset-1 truckPage-spacer-sm">
                {profileDescription()}
            </div>
          </div>

          {foodOptions()}
            
        <div className="row truckPage-vh-10">
                <div className="col-xs-12 center-block">
                    {profilePayment()}
                </div>
         </div>
            
        <div className="row vertical-center center-block truckPage-vh-50">
            <div className="col-xs-12 center-block">
                {profileHours()}
            </div>
        </div>
            
        <div className="row truckPage-vh-10 truckPage-map-holder-xs">        
            <div className="col-sm-7 col-sm-offset-1">
                {profileMap()}
            </div>
        </div>
                      
    </div>
    </div>
            );
    }
});





// RENDER EVERYTHING -----------------------------------------------
var TruckProfileBox = React.createClass({
    render: function() {
        
        var self = this;
        
        var backBtn = function(){
            return(
                <div className="col-xs-3 col-md-2 col-lg-1" id="list-back-button">
                      <button className="btn btn-warning ghost center-block back-button-sm" onClick={self.props.toggleTruckList}><i className="fa fa-chevron-left"/></button>
                </div> 
            )
        };  
        
        return (
            <div>
                <div className="row">
                    {backBtn()}
                </div>
                <TruckProfileLg data={this.props.data} toggleTruckList={this.props.toggleTruckList}/>
                <TruckProfileMd data={this.props.data} toggleTruckList={this.props.toggleTruckList}/>
                <TruckProfileSm data={this.props.data} toggleTruckList={this.props.toggleTruckList}/>
                <TruckProfileXs data={this.props.data} toggleTruckList={this.props.toggleTruckList}/>
            </div>
        );
    }
});

module.exports = TruckProfileBox;