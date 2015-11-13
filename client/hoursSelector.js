const React = require('react');
const mui = require('material-ui');
const TimePicker = mui.TimePicker;
const moment = require('moment');

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const MyRawTheme = require('./muiTheme');

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


  },
    
    render: function(){
        return(
            <TimePicker
                format="ampm"
                id={this.props.id}
                hintText="Closed"
                onDismiss={this.onDismiss}
                dialogStyle={{ 'padding-top': '20%' }}
                textFieldStyle={{ width: '90%' }}/>
        )
    }
});


module.exports = HoursSelector;