import validator from "validator"
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import vendorModel from "../models/vendorModel.js";
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}
const loginUser = async(req,res)=>{
    try {
        const {email,password}=req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
          }
        
        const user = await userModel.findOne({email});
        if(!user){
           return res.send({success:false,message:"User Not Exists"});
        }
        console.log("User object:", user);
        const match=await bcrypt.compare(password,user.password);
        if(!match){
            return res.send({success:false,message:"Password is Incorrect"});
        }
        const token=createToken(user._id);
        
        return res.send({success:true,token,name: user.name})

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
           return res.send({ success: false, message: "User Already Exists" });
        }
        if (!validator.isEmail(email)) {
           return res.send({ success: false, message: "Enter a Valid Email" });
        }
        if (password.length < 8) {
           return res.send({ success: false, message: "Password length must be grater than 8" });
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
       return res.send({success:true,token})
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: error.message })
    }
}
const adminLogin = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const vendor = await vendorModel.findOne({email});
        if(!vendor){
           return res.send({success:false,message:"Vendor Does not exists"});
        }
        const match = await bcrypt.compare(password,vendor.password);
        if(!match){
           return res.send({success:false,message:"Password is Incorrect"});
        }
        const token=createToken(vendor._id);
       return res.send({success:true,token,vendorId: vendor._id })
    } catch (error) {
        console.log(error);
        res.send({success:false,message:error.message})
    }
}
const adminRegister = async(req,res)=>{
    try {
        const { name,email,password,companyName,phone,address,city,village }=req.body;
        const exist = await vendorModel.findOne({email});
        console.log("register");
        if (exist) {
           return res.send({ success: false, message: "Vendor Already Exists" });
        }
        if(!validator.isEmail(email)){
            return res.send({ success: false, message: "Enter a Valid Email" });

        }
        if (password.length < 8) {
            return res.send({ success: false, message: "Password length must be grater than 8" });
        }
        const salt =await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newVendor = new vendorModel({
            name,
            email,
            password:hashedPassword,
            companyName,
            phone,
            address,
            city,
            village,
        })
       const vendor = await newVendor.save();
        const token =createToken(vendor._id);
        return res.send({success:true,token})
    } catch (error) {
        console.log(error);
        res.send({success:false,message:error.message})
    }
}


export {registerUser,loginUser,adminLogin,adminRegister}