import {v2 as cloudinary} from "cloudinary";
import productModel from "../models/productModel.js";


const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, sizes, stock } = req.body;

        // Ensure req.files exists before accessing images
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ success: false, message: "No images uploaded" });
        }

        // Extract images safely
        const imageFiles = ['image1', 'image2', 'image3', 'image4']
            .map((key) => req.files[key] && req.files[key][0])
            .filter((item) => item !== undefined);  // Remove undefined entries

        // Upload images to Cloudinary
        let imageUrls = await Promise.all(
            imageFiles.map(async (file) => {
                try {
                    let result = await cloudinary.uploader.upload(file.path, { resource_type: "image" });
                    return result.secure_url;
                } catch (uploadError) {
                    console.error("Cloudinary Upload Error:", uploadError);
                    return null;  // Prevent breaking the Promise.all
                }
            })
        );

        imageUrls = imageUrls.filter(url => url !== null); // Remove failed uploads

        // Save product only if images uploaded successfully
        if (imageUrls.length === 0) {
            return res.status(500).json({ success: false, message: "Image upload failed" });
        }

        const newProduct = new productModel({
            name,
            description,
            price,
            category,
            sizes,
            stock,
            images: imageUrls,
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
const singleProduct = async(req,res)=>{
    try {
        const productId=req.body.id;
        const product = await productModel.findById(productId)
        res.json({success:true,product})
    } catch (error) {
        console.log(error);
        res.send({success:false,message:error.message});
    }
}

export {addProduct,removeProduct,listProducts,singleProduct};