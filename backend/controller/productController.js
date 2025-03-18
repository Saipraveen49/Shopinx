import {v2 as cloudinary} from "cloudinary";
import productModel from "../models/productModel.js";


const addProduct = async(req,res)=>{
    try {
        const {name,description,price,category,sizes,stock}=req.body;
        const image1=req.files.image1 && req.files.image1[0];
        const image2=req.files.image2 && req.files.image2[0];
        const image3=req.files.image3 && req.files.image3[0];
        const image4=req.files.image4 && req.files.image4[0];

        const images=[image1,image2,image3,image4].filter((item)=>item!==undefined);
        let imageUrl=await Promise.all(
            images.map(async (item)=>{
                let result=await cloudinary.uploader.upload(item.path,{resource_type:"image"});
                return result.secure_url;
             })
        )
        const newProduct=new productModel({
            name,
            description,
            price,
            category,
            sizes,
            stock,
            images:imageUrl,
            vendorId
        })
        const product=await newProduct.save();
        res.json({success:true,message:"Product added successfully"});
    } catch (error) {
        console.log(error);
        res.send({success:false,message:error.message});
    }
}
const removeProduct = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.send({success:false,message:error.message});
    }
}
const listProducts = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.send({success:false,message:error.message});
    }
}
const singleProduct = async(req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
        res.send({success:false,message:error.message});
    }
}

export {addProduct,removeProduct,listProducts,singleProduct};