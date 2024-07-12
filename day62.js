//server creation 

var express = require("express");
var app = express();
var port = 8900;
var cors = require("cors");

var mongoose = require("mongoose");
// var url = process.env.MONGODB_URI;
app.use(cors());
var router = require("./app.js");
app.use(express.json());
app.use("/",router);

mongoose.connect("mongodb+srv://abinithamuthuraj:MongoDBatlas@cluster0.jxxelc4.mongodb.net/").then(success=>{
    console.log("Database connected");
    app.listen(port,()=>{
        console.log("server connected successfully");
    });
}).catch(error=>{
    console.log("server error");
});

