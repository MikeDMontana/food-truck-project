var MapHolderLg = React.createClass({
  render: function(){
    return(
      <div>
        <div className='vertical-center truckList-map-container-aside'>
          <img src="./img/map.png" className="truckList-map-aside"/>
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
          <img src="./img/map.png" className="center-block truckList-map-below"/>
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
            <MapHolderLg/>
          </div>

          <div className="col-xs-12 hidden-lg">
            <MapHolderSm/>
          </div>
        </div>
      )
  }
});


var TruckList = React.createClass({

    render: function() {
        var self = this;
        var oneTruck = this.props.data.map(function(truck){
            var cuisineLoop = truck.cuisine.map(function(cuisine){
              return(
                <div>
                  <div className="col-xs-4">
                    <div className="well well-orange-cuisine text-center truckList-cuisine-sm">{cuisine}</div>
                  </div>
                </div>
                )
            });
            return (
                <div>
                    <div className="well clearfix">
                      <div className="col-sm-9 hidden-xs">
                        <h2>{truck.truckName}</h2><br></br>
                        <div className="row">
                            <div>{cuisineLoop}</div>
                        </div>
                      </div>
                      <div className="col-sm-3 hidden-xs">
                        <img src="img/openSign.png" className="hidden-md truckList-open-lg"/>
                        <img src="img/openSign.png" className="hidden-sm hidden-lg truckList-open-md"/>
                        <button onClick={self.props.toggleTruckList} className="btn btn-warning ghost-list-button center-block hidden-sm hidden-xs truckList-learn-md">Learn More</button>
                        <button onClick={self.props.toggleTruckList} className="btn btn-warning ghost-list-button center-block hidden-md hidden-lg">Learn<br></br> More</button>
                        <div className="row">
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
                      </div>

            
                      <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                        <img src="img/openSign.png" className="hidden-sm truckList-open-xs"/>
                        <h2>{truck.truckName}</h2><br></br>
                        <div className="row">
                                <div>{cuisineLoop}</div>
                        </div>
                        </div>
                      <div className="col-xs-12 hidden-sm hidden-md hidden-lg">
                        <div className="row">
                          <div className="col-xs-6">
                            <button onClick={self.props.toggleTruckList} className="btn btn-warning ghost-list-button center-block">Learn More</button>
                          </div>  
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
                      </div>
                    </div>
                </div>
            )
        });
        
        return (
                <div>
                    {oneTruck}
                </div>
            );
    }
});

var TruckListHolder = React.createClass({
  render: function(){
    return (
        <div className="col-lg-6 col-md-12">
          <TruckList data={this.props.data} toggleTruckList={this.props.toggleTruckList}/>
        </div>
      )
  }
});

var TruckBox = React.createClass({
    //Set initial state-----------------
    getInitialState: function(){
        return{data: [], truckList: true, mapHolder: true, truckProfile: false};
    },
    toggleTruckList: function(event){
      this.setState({truckList: !this.state.truckList});
      this.setState({truckProfile: !this.state.truckProfile});
      this.setState({mapHolder: !this.state.mapHolder});
    },
    //Fetch data from our server--------------
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
    render: function() {
      var truckList = this.state.truckList ? <TruckListHolder data={this.state.data} toggleTruckList={this.toggleTruckList}/> : null
      var mapHolder = this.state.mapHolder ? <MapHolderGlobal toggleTruckList={this.toggleTruckList}/> : null
      var truckProfile = this.state.truckProfile ? <TruckProfileBox toggleTruckList={this.toggleTruckList}/> : null
        return (
            <div>
              {truckList}
              {mapHolder}
              {truckProfile}
            </div>
        );
    }
});


React.render(<TruckBox url="/api/trucks/"/>, document.getElementById("react-box"));