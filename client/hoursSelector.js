const React = require('react');
const mui = require('material-ui');
const TimePicker = mui.TimePicker;

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
      console.log(window.document.getElementById('time-window').value)
  },
    
    render: function(){
        return(
            <TimePicker
                format="ampm"
                id="time-window"
                hintText="12hr Format"
                onDismiss={this.onDismiss}
                style={{ top: '175px' }}/>
        )
    }
});


module.exports = HoursSelector;