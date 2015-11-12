var React = require('react');
var NavBar = require('./navbar');

var About = React.createClass({

  render: function(){

   return(

    <div>
    <h1 className="white">About Us.</h1>

    <div className="row">
      <div className="col-sm-8 col-sm-offset-2">
        <div className="well col-sm-3 col-xs-10 col-xs-offset-1">
          <h2 className="text-center">12</h2>
          <h4 className="text-center">Trucks</h4>
        </div>
        <div className="well col-sm-3 col-sm-offset-1 col-xs-10 col-xs-offset-1">
          <h2 className="text-center">1</h2>
          <h4 className="text-center">Cities</h4>
        </div>
        <div className="well col-sm-3 col-sm-offset-1 col-xs-10 col-xs-offset-1">
          <h2 className="text-center">??</h2>
          <h4 className="text-center">Trucks loved</h4>
        </div>
      </div>
    </div>

    <div className="col-xs-10 col-xs-offset-1">
      <div className="row white"> 
        <h3>We like to eat. Come on, you do too.</h3>
        <p>Food can be really truckin' good. Especially after a night on the town, or over a quick lunch break. We want you to have access to the tastiest local truck food ever made, and that's why Truck Yeah exists.<br/>
        Think of us as you find and enjoy some of the best food, from the coolest people, all across Montana.</p>
      </div>
    </div>

    <div className="col-xs-10 col-xs-offset-1">
      <div className="row white"> 
        <h3>Where we came from.</h3>
        <p>Truck Yeah is the brainchild of Juniper and Zach, from Montana Code school. This is not just a coding bootcamp project, it's a real thing we want to see people use!<br/>
        We were inspired to create this app when we realized how hard it is to locate food trucks in a city, when you don't already live there and know their general serving times and areas. We love food trucks, and want them to be successful and accessible to anyone, anywhere.<br/>
        Our dream is to see Truck Yeah across the US (and maybe the world!) helping trucks and foodies connect.</p>
      </div>
    </div>

    <div className="col-xs-10 col-xs-offset-1">
      <div className="row white">
        <h3>Help us grow!</h3>
        <p>The best way for us to get more trucks in the database, so more people can enjoy more food, is to crowdsource some of the work to you!<br/>
        If you have a favorite truck that doesn't show up in your city, there are two ways you can help:</p>
          <ul>
            <li>Tell the truck about us, so they can get signed up.</li>
            <li>Tell us about the truck, so we can add them.</li>
          </ul>
        <p>If you have any questions, don't hesitate to reach out! We are growing, changing, and adding all kinds of details and functionality as fast as possible. We love feedback, encouragement, and compliments!</p>
      </div>
    </div>

    </div>

    );
}
});

// ------- RENDER EVERYTHING --------

var AboutBox = React.createClass({

  render: function(){
   return(
    <div>
      <NavBar/>
      <div id="main-spacer"></div>
      <About/>
    </div>
    );
 }
});

React.render(<AboutBox/>, document.getElementById("About"));