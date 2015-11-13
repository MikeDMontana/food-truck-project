const React = require('react');
const mui = require('material-ui');
const TimePicker = mui.TimePicker;
const moment = require('moment');

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const MyRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');

class OuterMostParentComponent extends React.Component {
  // Important!
  getChildContext() { 
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }
};

// Important!
OuterMostParentComponent.childContextTypes = {
  muiTheme: React.PropTypes.object
};


//var now = new Date().setFullYear(1, 0, 1)
//,   andThen = new Date(dateMessageSent).setFullYear(1, 0, 1)
//
//if (now > andThen) doYourStuff()



var HoursSelector = React.createClass({
    
  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  },
    
  onDismiss: function(){
      var time = window.document.getElementById(this.props.id).value;
      var dt = moment(time, ["h:mm A"]).format("HH:mm");
      var test = new Date();
      var test2 = new Date(test.getFullYear(), test.getMonth(), test.getDate(), (dt.charAt(0) + dt.charAt(1)), (dt.charAt(3) + dt.charAt(4)));

      console.log("----- " + this.props.id + " -----");
      
      console.log("The getElementById: " + time);
      console.log("Converted into 24h: " + dt);
      console.log(" ");
      console.log("Today: " + test);
//      console.log("Today's Day: " + test.getDay());
//      console.log("Today's Month: " + test.getMonth());
//      console.log("Today's year: " + test.getFullYear());
      console.log(" ");
      
      console.log("Input date formatted: " + test2);
      console.log(typeof test2);
      console.log("Input Day: " + test2.getDay());
      console.log("Input Month: " + test2.getMonth());
      console.log("Input Year: " + test2.getFullYear());      
      console.log("Input Hour: " + test2.getHours());
      console.log("Input Min: " + test2.getMinutes());
      
  },
    
    render: function(){
        return(
            <TimePicker
                format="ampm"
                id={this.props.id}
                hintText="Closed"
                onDismiss={this.onDismiss}
                textFieldStyle={{ width: '90%' }}/>
        )
    }
});


module.exports = HoursSelector;