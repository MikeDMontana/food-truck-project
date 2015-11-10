var React = require('react');


// ------- NAV SIZES --------

var NavLG = React.createClass({
    
 	render: function(){
 		return(
 			<div>
                <nav className="navbar navbar-lg navbar-inverse navbar-static-top hidden-md hidden-sm hidden-xs fixed-nav">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="/">
                        <img src="./img/logo_notext.png"/>
                      </a>
                      <a href="/" className="navbar-brand">
                        <h3 id="brand-text-md">
                          Truck Yeah!
                        </h3>
                      </a>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div className="navbar-collapse collapse navbar-flyout-lg">
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="/">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <li><a href="/login">Add A Truck!</a></li>
                    </ul>
                  </div>
                </nav>
 			</div>
 			);
 	}
});

var NavMD = React.createClass({
    
 	render: function(){
 		return(
 			<div>
                <nav className="navbar navbar-md navbar-inverse navbar-static-top hidden-lg hidden-sm hidden-xs fixed-nav">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="/">
                        <img src="./img/logo_notext.png"/>
                      </a>
                      <a href="/" className="navbar-brand">
                        <h3 id="brand-text-md" className="navbar-md">
                          Truck Yeah!
                        </h3>
                      </a>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div className="navbar-collapse collapse navbar-flyout-md">
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="/">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <li><a href="/login">Add A Truck!</a></li>
                    </ul>
                  </div>
                </nav>
 			</div>
 			);
 	}
});

var NavSM = React.createClass({
    
 	render: function(){
 		return(
 			<div>
                <nav className="navbar navbar-sm navbar-inverse navbar-static-top hidden-lg hidden-md hidden-xs fixed-nav">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="/">
                        <img src="./img/logo_notext.png"/>
                      </a>
                      <a href="/" className="navbar-brand">
                        <h3 id="brand-text-md">
                          Truck Yeah!
                        </h3>
                      </a>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div className="navbar-collapse collapse navbar-flyout-md">
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="/">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#contact">Contact</a></li>
                      <li><a href="/login">Add A Truck!</a></li>
                    </ul>
                  </div>
                </nav>
 			</div>
 			);
 	}
});

var NavXS = React.createClass({
    
 	render: function(){
 		return(
 			<div>
                <nav className="navbar navbar-xs navbar-inverse navbar-static-top hidden-sm hidden-md hidden-lg fixed-nav">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="/">
                      <img src="./img/logo_notext_sm.png"/>
                      </a>
                      <a href="/" className="navbar-brand">
                        <h6 id="brand-text-xs">
                          Truck Yeah!
                        </h6>
                      </a>
                    <button type="button" id="toggle-button-sm" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div className="navbar-collapse collapse navbar-flyout-xs">
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="/">Home</a></li>
                      <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                      <li><a href="/login">Add A Truck!</a></li>
                    </ul>
                  </div>
                </nav>
 			</div>
 			);
 	}
});



// ------- RENDER EVERYTHING --------

var NavBar = React.createClass({
    
 	render: function(){
 		return(
 			<div>
                <NavLG/>
                <NavMD/>
                <NavSM/>
                <NavXS/>
 			</div>
 			);
 	}
});

module.exports = NavBar;