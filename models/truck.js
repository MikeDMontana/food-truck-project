var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TruckSchema = new mongoose.Schema({

    truckName: String,
    city: String,
    description: String,
    image: Array,
    cuisine: Array,
    monOpen: Object,
    tuesOpen: Object,
    wedOpen: Object,
    thurOpen: Object,
    friOpen: Object,
    satOpen: Object,
    sunOpen: Object,
    
    monClose: Object,
    tuesClose: Object,
    wedClose: Object,
    thurClose: Object,
    friClose: Object,
    satClose: Object,
    sunClose: Object,
    
    timeCategory: Array,
    payment: Array,
    foodOptions: Array,
    facebook: String,
    twitter: String,
    lat: String,
    lon: String
});

module.exports = mongoose.model('Truck', TruckSchema);