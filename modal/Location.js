const mongoose= require("mongoose");
const Schema= mongoose.Schema;
// var locations = require("../LocationList.json");
var locationSchema= new Schema({
    locality:String,
    city:String,
    location_id:Number,
    city_id:Number,
    country_name:String
});

module.exports=mongoose.model("Location",locationSchema);