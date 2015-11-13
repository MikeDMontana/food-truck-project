var React = require('react');
var TruckBox = require('./truckList')
var NavBar = require('./navbar')


// ----- BUTTON MODULES -----

var AllButton = React.createClass({

   render: function() {
       return (
                <div>
                    <div className="col-md-3 hidden-sm hidden-xs">
                      <button className="btn btn-warning ghost center-block" onClick={this.props.openNow.bind(this, "open")}>
                        <h3>EAT NOW.</h3>
                      </button>
                    </div>
    
                    <div className="col-sm-12 hidden-md hidden-lg">
                      <button className="btn btn-warning ghost center-block resp-padded" onClick={this.props.openNow.bind(this, "open")}>
                        <h2>EAT NOW.</h2>
                      </button>
                    </div>
                </div>
        )}
});

var LunchButton = React.createClass({

   render: function() {
       return (
                <div>
                    <div className="col-md-3 hidden-sm hidden-xs">
                      <button className="btn btn-warning ghost center-block" onClick={this.props.toggleCat.bind(this, "lunch")}>
                        <h3>LUNCH.</h3>
                      </button>
                    </div>
                    <div className="col-sm-12 hidden-md hidden-lg">
                      <button className="btn btn-warning ghost center-block resp-padded" onClick={this.props.toggleCat.bind(this, "lunch")}>
                        <h2>LUNCH.</h2>
                      </button>
                    </div>
                </div>
        )}
});

var DinnerButton = React.createClass({

   render: function() {
       return (
                <div>
                    <div className="col-md-3 hidden-sm hidden-xs">
                      <button className="btn btn-warning ghost center-block"  onClick={this.props.toggleCat.bind(this, "dinner")}>
                        <h3>DINNER.</h3>
                      </button>
                    </div>
                    <div className="col-sm-12 hidden-md hidden-lg">
                      <button className="btn btn-warning ghost center-block resp-padded" onClick={this.props.toggleCat.bind(this, "dinner")}>
                        <h2>DINNER.</h2>
                      </button>
                    </div>
                </div>
        )}
});

var OtherButton = React.createClass({

   render: function() {
       return (
                <div>
                    <div className="col-md-3 hidden-sm hidden-xs">
                      <button className="btn btn-warning ghost center-block" onClick={this.props.toggleCat.bind(this, "other")}>
                        <h3>OTHER.</h3>
                      </button>
                    </div>
                    <div className="col-sm-12 hidden-md hidden-lg">
                      <button className="btn btn-warning ghost center-block resp-padded" onClick={this.props.toggleCat.bind(this, "other")}>
                        <h2>OTHER.</h2>
                      </button>
                    </div>
                </div>
        )}
});

// ----- BODY SIZE MODULES -----

var HomeBodyLG = React.createClass({

   render: function() {
       return (
                <div>
					<section>
                      <div className="my-header-md hidden-sm hidden-xs">
					    <div className="container-fluid vertical-center" id="btn-container">
                            <div className="container" id="btn-row">
                              <div className="row">
                                <div className="col-md-12 text-center">
                                  <h1 className="white">Go Truck Yourself.</h1>
                                </div>
                              </div>
                              <div className="row">
                                <AllButton toggleCat = {this.props.toggleCat} openNow={this.props.openNow} />
                                <LunchButton toggleCat = {this.props.toggleCat} />
                                <DinnerButton toggleCat = {this.props.toggleCat} />
                                <OtherButton toggleCat = {this.props.toggleCat} /> 
                              </div>
                            </div>
					    </div>
					  </div>
					</section>
                </div>
       );
   }
});

var HomeBodySM = React.createClass({

   render: function() {
       return (
                <div>         
                    <section>
                      <div className="my-header-sm hidden-md hidden-lg">
					    <div className="container-fluid vertical-center" id="btn-container">
					    <div className="container" id="btn-row">
					      <div className="row">
					        <div className="col-md-12 text-center">
					          <h2 className="white">Go Truck Yourself.</h2>
					        </div>
					      </div>
					      <div className="row">
                            <AllButton toggleCat = {this.props.toggleCat} openNow={this.props.openNow}/>
                            <LunchButton toggleCat = {this.props.toggleCat} />
                            <DinnerButton toggleCat = {this.props.toggleCat} />
                            <OtherButton toggleCat = {this.props.toggleCat} />
					      </div>
					      </div>
					    </div>
					  </div>
					</section>
                </div>
       );
   }
});

var HomePageBox = React.createClass({
    render: function() {
        return (
            <div>
                <HomeBodyLG toggleCat = {this.props.toggleCat} openNow={this.props.openNow}/>
                <HomeBodySM toggleCat = {this.props.toggleCat} openNow={this.props.openNow}/>
            </div>
        );
    }
});

// ----- RENDER EVERYTHING -----

var HomePageListToggle = React.createClass({
    
	getInitialState: function(){
		return {data: [], showHome: true, showCat: false, truckCat: []};
	},

 	showCatClick: function(){
 		this.setState({showHome: !this.state.showHome});
 		this.setState({showCat: !this.state.showCat});
 	},

	toggleCat: function (category) {
	        function filterCat(truck){
	        	for (var i=0; i<truck.timeCategory.length; i++){
	        		if (truck.timeCategory[i] === category){
	        			return truck;
	        		}
	        	}
	        }

	        var truckCat = this.state.data.filter(filterCat);

	        this.setState({truckCat: truckCat});

	        this.showCatClick();
	  },

  openNow: function (e) {

      var self = this;

      console.log("I am working!")

      var now = new Date();
      var today = now.getDay();
      var dayIndex = today;
      var currentTime = (now.getHours() * 60) + now.getMinutes();

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


      function filterOpen (truck){
        // GET AND CONVERT TRUCK HOURS TO JAVASCRIPT DATE OBJECTS
        var openTime = new Date(truck[timeSlotOpen]);
        var closeTime = new Date(truck[timeSlotClose]);
                  
        // COMBINE INTO SINGLE NUMBERS
        var openCombined = openTime.getHours() * 60 + openTime.getMinutes();
        var closeCombined = closeTime.getHours() * 60 + closeTime.getMinutes();

        if  (currentTime >= openCombined && currentTime <= closeCombined){
            return truck;
        };
      };

      var truckCat = this.state.data.filter(filterOpen);
      this.setState({truckCat: truckCat});
      this.showCatClick();
    },

 	loadTrucksFromServer: function(){
        $.ajax({
            url:this.props.url,
            dataType:"json",
            cache: false,
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.log("broken url is " + this.props.url);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    componentDidMount: function(){
        this.loadTrucksFromServer();
    },
    
 	render: function(){
 		var showCatList = this.state.showCat ? <TruckBox data={this.state.truckCat} showCatClick={this.showCatClick}/> : null;
 		var showHomePage = this.state.showHome ? <HomePageBox toggleCat = {this.toggleCat} openNow={this.openNow}/>  : null;
 		return(
 			<div>
                <NavBar/>
                <div id="main-spacer"></div>
 				{showHomePage}
 				{showCatList}
 			</div>
 			);
 	}
});

module.exports = HomePageListToggle;