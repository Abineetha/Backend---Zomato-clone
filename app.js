//router file
var express = require("express");
var router= express.Router();

var rests= require("./controller/Rest");
var locs = require("./controller/Loc");
var meals = require("./controller/Meal");
var users = require("./controller/UserController");
var menus = require("./controller/Menu");

router.get("/getAllRestaurants",rests.findByRest);

router.get("/getAllLocation",locs.findByLoc);

router.get("/getAllMealTypes",meals.findByMealtype);

router.get("/restaurantByCity/:city",rests.findByCity);

router.get("/restById/:_id",rests.findById);

router.get("/locationId/:location_id", rests.findByLocationId);

router.get("/mealTypeId/:mealtype_id", rests.findByMealTypeId);

router.post("/filter",rests.filterRestaurant);

router.get("/getMenu/:name",menus.findByMenu)

router.post("/SignUp",users.SignUp);

router.post("/SignIn",users.SignIn);

module.exports= router;
