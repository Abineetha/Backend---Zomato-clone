var restaurant = require("../modal/Restaurant");

exports.findByRest= async(req,res)=>{
    try{
        let findData = await  restaurant.find();
        res.status(200).send(findData);
    }catch{
        res.status(500).send("internal server error");
    }
};

exports.findByCity=async(req,res)=>{
    try{
        let findData = await restaurant.find({city:req.params.city})
        res.status(200).send(findData);
    }catch{
        res.status(500).send("internal server error");
    }
};



exports.findById=async(req,res)=>{
    try{
        let findData = await restaurant.findById({_id:req.params._id})
        res.status(200).send(findData);
    }catch{
        res.status(500).send("internal server error");
    }
};

exports.findByLocationId=async(req,res)=>{
  try{
    let findData = await restaurant.find({location_id:req.params.location_id})
    res.status(200).send(findData);
  }catch{
    res.status(500).send("internal server error");
  }
}

exports.findByMealTypeId = async(req,res)=>{
  try{
    let findData = await restaurant.find({mealtype_id:req.params.mealtype_id})
    res.status(200).send(findData);
  }catch{
    res.status(500).send("internal server error");
  }
}

exports.filterRestaurant = async(req,res)=>{
    try{
    const{location_id, mealtype_id, cuisine_id, sort, lowCost, highCost, pageNumber}= req.body;
    const query ={};

      if(location_id){
        query.location_id = location_id;
      }
      if(mealtype_id){
        query.mealtype_id = mealtype_id;
      }
      if(cuisine_id&& cuisine_id.length >0){
        query.cuisine = {$elemMatch: {id:{$in:cuisine_id}}};
      }
      if(lowCost!== undefined && highCost!== undefined){
        query.min_price = {$lte:highCost,$gte:lowCost}
      }
      const sortOption ={};
      if(sort){
        sortOption.min_price = sort
      }
      const restName = await restaurant.find(query).sort(sortOption).exec()

      if(restName.length ==0){
        res.json({msg:"no city found"})
      }else{
        res.json(restName)
      }
    }
    catch (error) {
        res.status(500).json({message:"Something Went Wrong"});
    }
}