const User= require("../modal/Usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiaTEyQGdtYWlsLmNvbSIsImlkIjoiNjVmYTcyNzMyYjg0ZWM1OThiNDQ2NjZmIiwiaWF0IjoxNzEwOTEyMTYwfQ.9sfq6SLQLMNma4cJnE_8cDma6Lah2RhjuAKKfdp6OvI";
exports.SignUp = async(req,res)=>{
    const {username, email, password} = req.body;
    try {

        const existingUser = await User.findOne({email:email});

        if(existingUser){
            return res.status(400).json({message:"User Already Exist"});
        }

        const hashPassword = await bcrypt.hash(password,10);

        const result = await User.create({
            username:username,
            email:email,
            password:hashPassword
        })
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({message:"Something Went Wrong"});
    }
}

exports.SignIn = async(req,res)=>{
    const {password, email} = req.body;
    try {
        const SignedIn =await User.findOne({email:email});

        if(!SignedIn){
            return res.status(404).json({message:"User Not Found"});
        }

        const MatchedPassword = await bcrypt.compare(password,SignedIn.password);

        if(!MatchedPassword){
            return res.status(400).json({message:"invalid Credentials"});
        }
        const token = jwt.sign({email:SignedIn.email, id:SignedIn._id},SECRET_KEY);
        res.status(201).json({user:SignedIn,token:token});

            // return res.status(200).json({message:"login successfully"});
      
    } 
    catch (error) {
        return res.status(500).json({message:"Something Went Wrong"});
    }
}