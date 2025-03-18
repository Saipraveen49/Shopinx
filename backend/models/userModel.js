import mongoose from "mongoose";

{/*const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    cartData:{type:Object, default:{}},
},{minimize:false});*/}

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Hashed password
    phone: { type: String, default: null }, // Optional
    address: { type: String, default: null }, // Optional
    profileImage: { type: String, default: null }, // Optional
    dateOfBirth: { type: Date, default: null }, // Optional
    profileCompleted: { type: Boolean, default: false }, // Track profile completion
    createdAt: { type: Date, default: Date.now },
    cartData:{type:Object, default:{}},
},{minimize:false});

const userModel= mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;