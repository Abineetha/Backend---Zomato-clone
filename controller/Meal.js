var mealType= require("../modal/MealTypes");

exports.findByMealtype= async(req,res)=>{
    try{
        let findData = await  mealType.find();
        res.status(200).send(findData);
    }catch{
        res.status(500).send("internal server error");
    }
};