var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))

router.use(function(req, res, next) {
    console.log('Something is happening.');
    next();
})

router.route('/trucks')
// POST NEW TRUCK
	.post(function(req, res){
        
        function clean(value){
            return value;
        }

    var cleanCuisine = req.body.cuisine.filter(clean);
    var newTruck = {
        truckName: req.body.truckName,
        city: req.body.city,
        description: req.body.description,
        cuisine: cleanCuisine,
        currentLocation: req.body.currentLocation,
        monTime: req.body.monTime,
        tuesTime: req.body.tuesTime,
        wedTime: req.body.wedTime,
        thurTime: req.body.thurTime,
        friTime: req.body.friTime,
        satTime: req.body.satTime,
        sunTime: req.body.sunTime,
        timeCategory: req.body.timeCategory,
        payment: req.body.payment,
        foodOptions: req.body.foodOptions,
        facebook: req.body.facebook,
        twitter: req.body.twitter
      }
    
    newTruck.timeCategory.push("all");

  	mongoose.model('Truck').create(newTruck, function(err, truck){
      		if(err){
        	res.send("Problems, Houston.");
      		}else{
            res.send(truck);
          }
    	});
  	})

// GET All TRUCKS
  .get(function(req, res) {
    mongoose.model('Truck').find({}, function(err, truck){
      if(err){
        res.send("Problems, Houston.");
      } else {
        console.log("Get is working")
        res.json(truck);
      }
    });
  })

router.route('/trucks/:truck_id')
// GET TRUCK BY ID
    .get(function(req, res){
    	mongoose.model("Truck").findById(req.params.truck_id, function(err, truck){
    		if(err){
    			res.send("Do you require assistance?");
    		} else{
    			console.log("Get by id is working");
    			res.json(truck);
    		}
    	})
    })
// UPDATE EXISTING TRUCK BY ID
    .put(function(req, res) {
        mongoose.model("Truck").findById(req.params.truck_id, function(err, truck) {
            if (err){
              console.error(err);
            }
            truck.truckName = req.body.truckName;
            truck.city = req.body.city;
            truck.description = req.body.description;
            truck.cuisine = req.body.cuisine;
            truck.currentLocation = req.body.currentLocation;
            truck.monTime = req.body.monTime,
            truck.tuesTime = req.body.tuesTime,
            truck.wedTime = req.body.wedTime,
            truck.thurTime = req.body.thurTime,
            truck.friTime = req.body.friTime,
            truck.satTime = req.body.satTime,
            truck.sunTime = req.body.sunTime,
            truck.timeCategory = req.body.timeCategory;
            truck.payment = req.body.payment;
            truck.foodOptions = req.body.foodOptions;
            truck.facebook = req.body.facebook;
            truck.twitter = req.body.twitter;
            console.log(req.body.truckName)
         
            truck.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message:"Truck updated!", truck});
            });
      	});
      })
// DELETE TRUCK BY ID
    .delete(function(req, res) {
        mongoose.model("Truck").remove({
            _id: req.params.truck_id
        }, function(err, truck) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;