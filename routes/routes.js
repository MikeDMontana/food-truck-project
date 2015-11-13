
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var isLoggedIn = require('./userroutes');
var Truck = require('../models/truck');
////router.use(bodyParser.urlencoded({ extended: true }))
//
//router.use(function(req, res, next) {
//    console.log('Something is happening.');
//    next();
//})


module.exports = function(app, passport){
    app.get('/api/trucks', function(req, res){
        
        mongoose.model('Truck').find({}, function(err, truck){
          if(err){
            res.send("Problems, Houston.");
          } else {
            console.log("Get is working")
            res.json(truck);
          }
        });
    });
    
    app.post('/api/trucks/', function(req, res){

            var newTruck = req.body; //{name:..., image:...}
            mongoose.model('Truck').create(newTruck,
                function(err, truck){
                    if(err){
                        res.send("not working", err);
                    } else {
                        console.log("New truck named " + truck + " created!");
                        res.send(truck);
                    }
                });
        });
};

//
//router.route('/trucks')
//// POST NEW TRUCK
//	.post(function(req, res){
//
//    var newTruck = {
//            truckName: req.body.truckName,
//            city: req.body.city,
//            description: req.body.description,
//            image: req.body.image,
//            cuisine: req.body.cuisine,
//
//            monOpen: req.body.monOpen,
//            tuesOpen: req.body.tuesOpen,
//            wedOpen: req.body.wedOpen,
//            thurOpen: req.body.thurOpen,
//            friOpen: req.body.friOpen,
//            satOpen: req.body.satOpen,
//            sunOpen: req.body.sunOpen,
//
//            monClose: req.body.monClose,
//            tuesClose: req.body.tuesClose,
//            wedClose: req.body.wedClose,
//            thurClose: req.body.thurClose,
//            friClose: req.body.friClose,
//            satClose: req.body.satClose,
//            sunClose: req.body.sunClose,
//
//            timeCategory: req.body.timeCategory,
//            payment: req.body.payment,
//            foodOptions: req.body.foodOptions,
//            facebook: req.body.facebook,
//            twitter: req.body.twitter,
//            lat: req.body.lat,
//            lon: req.body.lon 
//      }
//
//  	mongoose.model('Truck').create(newTruck, function(err, truck){
//      		if(err) {
//                res.send("Problems, Houston.");
//            }
//      		else{
//                return res.redirect("/");
//                res.send(truck);
//            }
//    	});
//  	})
//
//// GET All TRUCKS
//  .get(function(req, res) {
//    mongoose.model('Truck').find({}, function(err, truck){
//      if(err){
//        res.send("Problems, Houston.");
//      } else {
//        console.log("Get is working")
//        res.json(truck);
//      }
//    });
//  })
//
//router.route('/trucks/:truck_id')
//// GET TRUCK BY ID
//    .get(function(req, res){
//    	mongoose.model("Truck").findById(req.params.truck_id, function(err, truck){
//    		if(err){
//    			res.send("Do you require assistance?");
//    		} else{
//    			console.log("Get by id is working");
//    			res.json(truck);
//    		}
//    	})
//    })
//// UPDATE EXISTING TRUCK BY ID
//    .put(function(req, res) {
//        mongoose.model("Truck").findById(req.params.truck_id, function(err, truck) {
//            if (err){
//              console.error(err);
//            }
//            truck.truckName = req.body.truckName,
//            truck.city = req.body.city,
//            truck.description = req.body.description,
//            truck.image = req.body.image,
//            truck.cuisine = req.body.cuisine,
//
//            truck.monOpen = req.body.monOpen,
//            truck.tuesOpen = req.body.tuesOpen,
//            truck.wedOpen = req.body.wedOpen,
//            truck.thurOpen = req.body.thurOpen,
//            truck.friOpen = req.body.friOpen,
//            truck.satOpen = req.body.satOpen,
//            truck.sunOpen = req.body.sunOpen,
//
//            truck.monClose = req.body.monClose,
//            truck.tuesClose = req.body.tuesClose,
//            truck.wedClose = req.body.wedClose,
//            truck.thurClose = req.body.thurClose,
//            truck.friClose = req.body.friClose,
//            truck.satClose = req.body.satClose,
//            truck.sunClose = req.body.sunClose,
//
//            truck.timeCategory = req.body.timeCategory,
//            truck.payment = req.body.payment,
//            truck.foodOptions = req.body.foodOptions,
//            truck.facebook = req.body.facebook,
//            truck.twitter = req.body.twitter,
//            truck.lat = req.body.lat,
//            truck.lon = req.body.lon 
//         
//            truck.save(function(err) {
//                if (err)
//                    res.send(err);
//                res.json({ message:"Truck updated!", truck});
//            });
//      	});
//      })
//// DELETE TRUCK BY ID
//    .delete(function(req, res) {
//        mongoose.model("Truck").remove({
//            _id: req.params.truck_id
//        }, function(err, truck) {
//            if (err)
//                res.send(err);
//            res.json({ message: 'Successfully deleted' });
//        });
//    });
//
//module.exports = router;