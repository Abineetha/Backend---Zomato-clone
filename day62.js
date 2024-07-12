//server creation 
require('dotenv').config();
var express= require("express");
var app = express();
var port=10000;
const cors=require("cors");

var mongoose= require("mongoose");
const url = process.env.MONGODB_URI;
app.use(cors());
const router = require("./app");
app.use(express.json());
app.use("/",router);

mongoose.connect(url,{useNewUrlParser:true}).then(success=>{
    console.log("Database connected");
    app.listen(port,()=>{
        console.log("server connected successfully");
    });
}).catch(error=>{
    console.log("server error");
});

