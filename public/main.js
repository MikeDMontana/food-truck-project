// THIS HOLDS THE HOME PAGE HTML

var HomeBody = React.createClass({

   render: function() {
       return (
                <div>
					<section>
					  <div className="my-header">
					    <div className="container-fluid vertical-center" id="btn-container">
					    <div className="container" id="btn-row">
					      <div className="row">
					        <div className="col-md-12 text-center">
					          <h1 className="white">Go Truck Yourself.</h1>
					        </div>
					      </div>
					      <div className="row">
					        <div className="col-md-3 hidden-sm hidden-xs">
					          <button className="btn btn-warning ghost center-block" onClick={this.props.toggleCat.bind(this, "all")}>
					            <h3>ALL TRUCKS.</h3>
					          </button>
					        </div>
					        <div className="col-sm-12 hidden-md hidden-lg">
					          <button className="btn btn-warning ghost center-block resp-padded" onClick={this.props.toggleCat.bind(this, "all")}>
					            <h2>ALL TRUCKS.</h2>
					          </button>
					        </div>
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
                <HomeBody showTrucksClick={this.props.showTrucksClick} showCatClick = {this.props.showCatClick} toggleCat = {this.props.toggleCat}/>
            </div>
        );
    }
});

// THIS RENDERS EVERYTHING TO INDEX.html

var HomePageListToggle = React.createClass({
 	//Set Initial State
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
            console.log(truckCat);

	        this.setState({truckCat: truckCat});

	        this.showCatClick();
	  },

 	loadTrucksFromServer: function(){
        $.ajax({
            url:this.props.url,
            dataType:"json",
            cache: false,
            success: function(data){
                console.log("inside success")
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.log("broken url is " + this.props.url);
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    //Mount components------------------
    componentDidMount: function(){
        this.loadTrucksFromServer();
    },

 	//Render
 	render: function(){
 		var showCatList = this.state.showCat ? <TruckBox data={this.state.truckCat} showCatClick={this.showCatClick}/> : null;
 		var showHomePage = this.state.showHome ? <HomePageBox showTrucksClick={this.showTrucksClick} showCatClick = {this.showCatClick} toggleCat = {this.toggleCat}/> : null;
 		console.log(this.state.data);
 		return(
 			<div>
 				{showHomePage}
 				{showCatList}
 			</div>
 			);
 	}
});

React.render(<HomePageListToggle url="/api/trucks/"/>, document.getElementById("render-here"));