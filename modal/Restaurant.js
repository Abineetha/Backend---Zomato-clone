const mongoose= require("mongoose");
const Schema= mongoose.Schema;
// var restaurants = require("../RestaurantList.json");
var restaurantSchema= new Schema({
    name:String,
    city:String,
    location_id:Number,
    city_id:Number,
    thumb:[String,String,String],
    aggerate_rating:Number,
    rating_text:String,
    min_price:Number,
    contact_number:Number,
    cuisine:[{id:Number,name:String},{id:Number,name:String}],
    image:String,
    mealtype_id:Number
})

module.exports=mongoose.model("Restaurant",restaurantSchema);