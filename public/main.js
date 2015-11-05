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
					          <button className="btn btn-warning ghost center-block" onClick={this.props.showTrucksClick}>
					            <h3>EAT NOW.</h3>
					          </button>
					        </div>
					        <div className="col-sm-12 hidden-md hidden-lg">
					          <button className="btn btn-warning ghost center-block resp-padded" onClick={this.props.showTrucksClick}>
					            <h2>EAT NOW.</h2>
					          </button>
					        </div>
					        <div className="col-md-3 hidden-sm hidden-xs">
					          <button className="btn btn-warning ghost center-block" onclick="location.href='truckList.html'">
					            <h3>BREAKFAST.</h3>
					          </button>
					        </div>
					        <div className="col-sm-12 hidden-md hidden-lg">
					          <button className="btn btn-warning ghost center-block resp-padded" onclick="location.href='truckList.html'">
					            <h2>BREAKFAST.</h2>
					          </button>
					        </div>

					        <div className="col-md-3 hidden-sm hidden-xs">
					          <button className="btn btn-warning ghost center-block">
					            <h3>LUNCH.</h3>
					          </button>
					        </div>
					        <div className="col-sm-12 hidden-md hidden-lg">
					          <button className="btn btn-warning ghost center-block resp-padded" onclick="location.href='truckList.html'">
					            <h2>LUNCH.</h2>
					          </button>
					        </div>

					        <div className="col-md-3 hidden-sm hidden-xs">
					          <button className="btn btn-warning ghost center-block" onclick="location.href='truckList.html'">
					            <h3>DINNER.</h3>
					          </button>
					        </div>
					        <div className="col-sm-12 hidden-md hidden-lg">
					          <button className="btn btn-warning ghost center-block resp-padded" onclick="location.href='truckList.html'">
					            <h2>DINNER.</h2>
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
                <HomeBody showTrucksClick={this.props.showTrucksClick}/>
            </div>
        );
    }
});

// THIS RENDERS EVERYTHING TO INDEX.html

var HomePageListToggle = React.createClass({
 	//Set Initial State
	getInitialState: function(){
		return {data: [], showList: false, showHome: true};
	},
 	//Set toggle situation
 	showTrucksClick: function(){
 		this.setState({showList: true});
 		this.setState({showHome: false});
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
 		var showTruckList = this.state.showList ? <TruckBox data={this.state.data}/> : null;
 		var showHomePage = this.state.showHome ? <HomePageBox showTrucksClick={this.showTrucksClick}/> : null;
 		console.log(this.state.data);
 		return(
 			<div>
 				{showHomePage}
 				{showTruckList}
 			</div>
 			);
 	}
});

React.render(<HomePageListToggle url="/api/trucks/"/>, document.getElementById("render-here"));