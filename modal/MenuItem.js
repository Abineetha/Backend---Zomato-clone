var mongoose = require("mongoose");
const Schema = mongoose.Schema;
var menuSchema = new Schema(
    {
        name:{
            type:String,
            require:true
        },
        items:[
            {
                name:{type:String, require:true},
                price:{type:Number, require:true},
                desc:{type:String, require:true},
                menuimage:String,
                qty:{type:Number, require:true}
            },
            {
                name:{type:String, require:true},
                price:{type:Number, require:true},
                desc:{type:String, require:true},
                menuimage:String,
                qty:{type:Number, require:true}
            },
            {
                name:{type:String, require:true},
                price:{type:Number, require:true},
                desc:{type:String, require:true},
                menuimage:String,
                qty:{type:Number, require:true}
            },
        ],
        
    }
)


module.exports = mongoose.model("menu_items" , menuSchema);