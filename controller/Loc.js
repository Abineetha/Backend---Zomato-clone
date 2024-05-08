var location = require("../modal/Location");

exports.findByLoc= async(req,res)=>{
    try{
        let findData = await  location.find();
        res.status(200).send(findData);
    }catch{
        res.status(500).send("internal server error");
    }
};