var React = require('react');
var HomePageListToggle = require('./homePage');
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

React.render(<HomePageListToggle url="/api/trucks/"/>, document.getElementById("render-here"));