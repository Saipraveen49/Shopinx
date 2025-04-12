import {v2 as cloudinary} from "cloudinary";
import productModel from "../models/productModel.js";


const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, sizes, stock } = req.body;

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

        const newProduct = new productModel({
            name,
            description,
            price,
            category,
            sizes,
            stock,
            images: imageUrl,
            vendorId:req.vendorId
        });

        await newProduct.save();
        res.json({ success: true, message: "Product added successfully" });

    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

const removeProduct = async(req,res)=>{
    try {
        const id =req.body.id;
        await productModel.findByIdAndDelete(id);
        res.json({success:true,message:"product removed"})
    } catch (error) {
        console.log(error);
        res.send({success:false,message:error.message});
    }
}
const listProducts = async(req,res)=>{
    try {
        const products = await productModel.find({});
        res.json({success:true,products})
    } catch (error) {
        console.log(error);
        res.send({success:false,message:error.message});
    }
}
const vendorListProducts = async (req, res) => {
    try {
      const vendorId = req.vendorId;
    
      if (!vendorId) {
        return res.status(400).json({ success: false, message: 'Vendor ID not found in request' });
      }
      console.log(vendorId)
      const products = await productModel.find({ vendorId });
      res.json({ success: true, products });
    } catch (error) {
      console.error('Error fetching vendor products:', error);
      res.status(500).json({ success: false, message: error.message });
    }
  };

const singleProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productModel.findById(id);
  
      if (!product) {
        return res.status(404).json({ success: false, message: "Product not found" });
      }
  
      res.json({ success: true, product });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: error.message });
    }
  };

export {addProduct,removeProduct,listProducts,singleProduct,vendorListProducts};