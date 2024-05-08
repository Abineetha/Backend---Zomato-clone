const mongoose= require("mongoose");
const Schema= mongoose.Schema;
// var mealTypes = require("../MealTypesList.json");
var mealTypeSchema= new Schema({
    name: String,
    content:String,
    image:String,
    mealtype_id:Number
})

module.exports= mongoose.model("meal_Type",mealTypeSchema);