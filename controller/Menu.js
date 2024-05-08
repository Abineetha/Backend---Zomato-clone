let menu = require("../modal/MenuItem");

exports.findByMenu = async(req,res)=>{
    try{
        let findData = await menu.find({name:req.params.name})
        res.status(200).send(findData);
    }catch{
        res.status(500).send("internal server error");
    }
}


