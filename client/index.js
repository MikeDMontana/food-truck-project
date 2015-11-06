var React = require('react');
var Main = require('./main');
var App = require('./app');
var TruckProfile = require('./truckProfile');
var HomePageListToggle = require('./main');

React.render(<HomePageListToggle url="/api/trucks/"/>, document.getElementById("render-here"));