'use strict';

var Colors = require('../node_modules/material-ui/lib/styles/colors');
var ColorManipulator = require('../node_modules/material-ui/lib/utils/color-manipulator');
var Spacing = require('../node_modules/material-ui/lib/styles/spacing');

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#d15d39',
    primary2Color: '#d15d39',
    primary3Color: '#d15d39',
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.grey500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
  }
};