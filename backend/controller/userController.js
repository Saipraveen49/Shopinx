import validator from "validator"
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}
const loginUser = async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await userModel.findOne({email});
        if(!user){
            res.send({success:false,message:"User Not Exists"});
        }
        const match=await bcrypt.compare(password,user.password);
        if(!match){
            res.send({success:false,message:"Password is Incorrect"});
        }
        const token=createToken(user._id);
        res.send({success:true,token})

    } catch (error) {
        console.log(error);
        res.send({ success: false, message: error.message })
    }
}
const registerUser = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        const exist = await userModel.findOne({email});
        if (exist) {
            res.send({ success: false, message: "User Already Exists" });
        }
        if (!validator.isEmail(email)) {
            res.send({ success: false, message: "Enter a Valid Email" });
        }
        if (password.length < 8) {
            res.send({ success: false, message: "Password length must be grater than 8" });
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword,
        });
        const user = await newUser.save();
        const token =createToken(user._id);
        res.send({success:true,token})
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: error.message })
    }
}

export {registerUser,loginUser}