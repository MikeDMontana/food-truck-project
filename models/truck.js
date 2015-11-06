var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TruckSchema = new Schema({

    truckName: String,
    city: String,
    description: String,
    image: Array,
    cuisine: Array,
    currentLocation: String,
    monTime: String,
    tuesTime: String,
    wedTime: String,
    thurTime: String,
    friTime: String,
    satTime: String,
    sunTime: String,
    timeCategory: Array,
    payment: Array,
    foodOptions: Array,
    facebook: String,
    twitter: String
});

module.exports = mongoose.model('Truck', TruckSchema);