//server creation 
var express= require("express");
var app = express();
var port=8900;
const cors=require("cors")

var mongoose= require("mongoose");
var url = "mongodb+srv://abinithamuthuraj:MongoDBatlas@cluster0.jxxelc4.mongodb.net/";
app.use(cors())
const router = require("./app");
app.use(express.json())
app.use("/",router);

mongoose.connect(url,{useNewUrlParser:true}).then(success=>{
    console.log("Database connected");
    app.listen(port,()=>{
        console.log("server connected successfully");
    });
}).catch(error=>{
    console.log("server error");
});

