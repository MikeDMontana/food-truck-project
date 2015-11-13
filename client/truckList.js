var React = require('react');
var TruckProfileBox = require('./truckProfile');
var GoogleMap = require('./map');


// THIS HOLDS THE MAP

var MapHolderLg = React.createClass({
  render: function(){
    return(
      <div>
        <div className='vertical-center truckList-map-container-aside'>
          <GoogleMap data={this.props.data}/>
        </div>
      </div>
    )
  }
});

var MapHolderSm = React.createClass({
  render: function(){
    return(
      <div>
        <div className='truckList-map-container-below'>
           <GoogleMap data={this.props.data}/>
        </div>
      </div>
    )
  }
});

var MapHolderGlobal = React.createClass({
  render: function(){
    return(
        <div>        
         <div className="col-lg-6 hidden-md hidden-sm hidden-xs">
            <MapHolderLg data={this.props.data}/>
          </div>

          <div className="col-xs-12 hidden-lg">
            <MapHolderSm data={this.props.data}/>
          </div>
        </div>
      )
  }
});



// THIS HOLDS THE OPEN SIGN DATA = ONE TRUCK OBJECT

var OpenSignParser = React.createClass({
    
    render: function(){
        var self = this;
        
        var now = new Date();
        var today = now.getDay();
        
        var dayIndex = today;

        function getDayIndex(dayNum){
            if (dayNum === 0){
                return "sun";
            } else if (dayNum === 1){
                return "mon";
            } else if (dayNum === 2){
                return "tues";
            } else if (dayNum === 3){
                return "wed";
            } else if (dayNum === 4){
                return "thur";
            } else if (dayNum === 5){
                return "fri";
            } else if (dayNum === 6){
                return "sat";
            }
        };
        
         var timeSlotPrefix = getDayIndex(dayIndex);
        
        var timeSlotOpen = timeSlotPrefix + "Open";
        var timeSlotClose = timeSlotPrefix + "Close";
        
        var openTime = new Date(this.props.data[timeSlotOpen]);
        var closeTime = new Date(this.props.data[timeSlotClose]);
        
        var openHour = openTime.getHours();
        var closeHour = closeTime.getHours();
        
        var openMin = openTime.getMinutes();
        var closeMin = closeTime.getMinutes();
        
        console.log(now.getHours() >= openHour);

        var renderAll = function(){
            if  (now.getHours() >= openHour && now.getHours() <= closeHour ){
                if (now.getMinutes() >= openMin && now.getMinutes() <= closeMin){
                    return(
                        <div>
                            <img src="img/openSign.png" className="hidden-xs hidden-sm hidden-md truckList-open-lg"/>
                            <img src="img/openSign.png" className="hidden-xs hidden-sm hidden-lg truckList-open-md"/>
                            <img src="img/openSign.png" className="hidden-md hidden-lg truckList-open-xs"/>
                        </div>
                    )
                }
            }
        };
        
        return <div>{renderAll()}</div>;
    }
        
});



// THIS HOLDS THE TRUCK LIST

var TruckList = React.createClass({

    render: function() {
        
        var self = this;
        
    // ----- LOOP THROUGH ALL TRUCKS AND CREATE HOLDERS FOR EACH ------
        
        var oneTruck = this.props.data.map(function(truck){
            
            var truckProfileID = truck._id;
            
            
            
            // ----- LOOP THROUGH CUISINE OPTS & DISPLAY THEM -----
            
            var cuisineLoop = truck.cuisine.map(function(cuisine){
              return(
                <div>
                  <div className="col-xs-4">
                    <div className="well well-orange-cuisine text-center truckList-cuisine-sm">{cuisine}</div>
                  </div>
                </div>
                )
            });
            
            
            
            // ----- INDIVIDUAL ELEMENTS STORED AS VARIABLES -----
            
            var openSign = function(){
                return(
                    <div>
                        <OpenSignParser data={truck} toggleProfileID={self.props.toggleProfileID}/>
                    </div>
                )
            };
             
            var learnMoreBtns = function() {
                return(
                    <div>
                        <button onClick={self.props.toggleProfileID.bind(this, truckProfileID)} className="btn btn-warning ghost-list-button center-block hidden-sm hidden-xs truckList-learn-md">Learn More</button>
                        <button onClick={self.props.toggleProfileID.bind(this, truckProfileID)} className="btn btn-warning ghost-list-button center-block hidden-xs hidden-md hidden-lg">Learn<br></br> More</button>
                        <button onClick={self.props.toggleProfileID.bind(this, truckProfileID)} className="btn btn-warning ghost-list-button center-block hidden-sm hidden-md hidden-lg">Learn More</button>  
                    </div>
                )
            };
                                           
                                           
            var socialBtnsLG = function() {
                return(
                    <div>
                      <div className="col-sm-6">
                        <a href={truck.facebook}><button className="btn btn-warning ghost-list-button center-block truckList-social-responsive">
                          <i className="fa fa-facebook"></i>
                        </button></a>
                      </div>

                      <div className="col-sm-6">
                        <a href={truck.twitter}><button className="btn btn-warning ghost-list-button center-block truckList-social-responsive">
                          <i className="fa fa-twitter"></i>
                        </button></a>
                      </div>
                    </div>
                )
            };
        
            var socialBtnsSM = function() {
                return(
                    <div>
                      <div className="col-xs-3">
                        <a href={truck.facebook}><button className="btn btn-warning ghost-list-button center-block">
                          <i className="fa fa-facebook"></i>
                        </button></a>
                      </div>
                      <div className="col-xs-3">
                        <a href={truck.twitter}><button className="btn btn-warning ghost-list-button center-block">
                          <i className="fa fa-twitter"></i>
                        </button></a>
                      </div>
                    </div>
                )
            };
        
        
        
        // ----- RENDER ONE TRUCK HOLDER -----
        
            return (
                <div>
                    <div className="well clearfix">
                
                      <div className="col-sm-9 hidden-xs">
                        <h2>{truck.truckName}</h2><br></br>
                        <div className="row">
                            {cuisineLoop}
                        </div>
                      </div>
                
                      <div className="col-sm-3 hidden-xs">
                        {openSign()}
                        {learnMoreBtns()}
                
                        <div className="row">
                            {socialBtnsLG()}
                        </div>
                      </div>
            
                      <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                        {openSign()}
                        
                        <h2>{truck.truckName}</h2><br></br>
                            
                        <div className="row">
                                <div>{cuisineLoop}</div>
                        </div>
                        
                      </div>
                        
                      <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                        <div className="row">
                          <div className="col-xs-6">
                            {learnMoreBtns()}
                          </div>  
                          {socialBtnsSM()}
                        </div>
                      </div>
                          
                    </div>
                </div>
            )
        });
    


    // ----- RENDER ALL OF THE TRUCK HOLDERS
    
        return (
                <div>
                    {oneTruck}
                </div>
            );
    }
});

var TruckListHolder = React.createClass({
  render: function(){
      
    var self = this;  
      
    var backBtn = function(){
        return(
            <div className="col-xs-3 col-md-2 col-lg-1" id="list-back-button">
                  <button className="btn btn-warning ghost center-block back-button-sm" onClick={self.props.showCatClick}><i className="fa fa-chevron-left"/></button>
            </div> 
        )
    };  
      
    return (
        <div>
            <div className="row">
                {backBtn()}
            </div>

            <div className="col-lg-6 col-md-12">
              <TruckList data={this.props.data} toggleProfileID={this.props.toggleProfileID}/>
            </div>
        </div>
      )
  }
});



// THIS RENDERS EVERYTHING

var TruckBox = React.createClass({
    //Set initial state-----------------
    getInitialState: function(){
        return{truckList: true, mapHolder: true, truckProfile: false, profileID: null, singleTruck: []};
    },
    toggleTruckList: function(event){
      this.setState({truckList: !this.state.truckList});
      this.setState({truckProfile: !this.state.truckProfile});
      this.setState({mapHolder: !this.state.mapHolder});
    },


    // CREATE A TOGGLE STATE FOR TRUCK ID
    toggleProfileID: function (id) {
        function filterData(item){
          return item._id === id;
        }

        var filtered = this.props.data.filter(filterData);

        this.setState({singleTruck: filtered});

        this.toggleTruckList();
    },

    render: function() {
      var truckList = this.state.truckList ? <TruckListHolder data={this.props.data} showCatClick = {this.props.showCatClick} toggleProfileID={this.toggleProfileID} showTrucksClick={this.props.showTrucksClick}/> : null
      var mapHolder = this.state.mapHolder ? <MapHolderGlobal toggleTruckList={this.toggleTruckList} data={this.props.data}/> : null
      var truckProfile = this.state.truckProfile ? <TruckProfileBox toggleTruckList={this.toggleTruckList} data={this.state.singleTruck[0]}/> : null
        return (
            <div>
            <section>
              <div className="truckList-header">
                <div className="container-fluid" id="btn-container">
                  <div className="container" id="btn-row">
                    <div className="row">
                        {truckList}
                        {mapHolder}
                        {truckProfile}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
        );
    }
});
      
module.exports = TruckBox;