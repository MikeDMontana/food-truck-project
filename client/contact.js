var React = require('react');
var NavBar = require('./navbar');

var Contact = React.createClass({

  render: function(){

   return(

    <div>
      <h1 className="white">Contact Us.</h1>
      <div className="col-sm-10 col-sm-offset-1">
        <div className="row white"> 
          <h3>Why?</h3>
          <p>We can think of several reasons to contact us...</p>
          <ul>
            <li>This is awesome, and you want to tell us <i>just how awesome.</i></li>
            <li>Something isn't working quite right, and we should fix it! (Of course, you'll send lots of details, maybe even screenshots. Change is good, ya'll).</li>
            <li>You operate a food truck, and can't believe you're not on this list yet! Of course, you need us to send you a truck entry form to fill out! Hurry!</li>
            <li>You're a passionate eater-at-food-trucks, and your favorite truck is missing. This is truly a travesty. Make sure you send us a link or email address that will help us contact the elusive missing truck.</li>
            <li>You're super impressed by our work, and want to hire one or both of us to work on your kickass web development team.</li>
            <li>You're in awe of the majesty and power of developers, and want to start your journey by attending Montana Code School! We'd love to answer questions about our experience.</li>
            <li>Anything else. We're not picky.</li>
          </ul>
        </div>
      </div>

      <div className="col-sm-10 col-sm-offset-1">
        <div className="row white">
          <h3>How?</h3>
          <p>Choose your weapon:</p>

          <div className="row">
          <div className="col-md-3 col-sm-3 col-xs-12">
          <h4>Email</h4>
          <ul>
            <li>Juniper: <br/>junipie@gmail.com</li>
            <li>Zach: <br/>zach.falen@parnerscreative.com</li>
          </ul>
          </div>

          <div className="col-md-2 col-sm-2 col-sm-offset-1 col-xs-12">
          <h4>Facebook</h4>
          <ul>
            <li><a href="https://www.facebook.com/juniper.chapman"> Juniper</a></li>
            <li><a href="https://www.facebook.com/MTFreeski"> Zach</a></li>
          </ul>
          </div>

          <div className="col-md-2 col-sm-2 col-sm-offset-1 col-xs-12">
          <h4>Twitter</h4>
          <ul>
            <li>Juniper: <a href="https://twitter.com/LeJuniper"> <br/>@lejuniper</a></li>
            <li>Zach: <a href="https://twitter.com/Zfalen"> <br/>@Zfalen</a></li>
          </ul>
          </div>

          <div className="col-md-2 col-sm-2 col-sm-offset-1 col-xs-12">
          <h4>Git...?</h4>
          <ul>
            <li><a href="https://github.com/junipie"> Juniper</a></li>
            <li><a href="https://github.com/zfalen"> Zach</a></li>
          </ul>
          </div>
          </div>


        </div>
      </div>
    </div>

    );
}
});

// ------- RENDER EVERYTHING --------

var ContactBox = React.createClass({

  render: function(){
   return(
    <div>
      <NavBar/>
      <div id="main-spacer"></div>
      <Contact/>
    </div>
    );
 }
});

React.render(<ContactBox/>, document.getElementById("Contact"));