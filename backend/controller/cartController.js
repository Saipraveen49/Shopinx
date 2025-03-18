import userModel from "../models/userModel.js";


const getCart=async(req,res)=>{
    try {
        const {userId}=req.body;
        const user=await userModel.findById(userId);
        const cartData=await user.cartData;
        res.json({success:true,cartData});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const updateCart=async(req,res)=>{
    try {
        const {userId,itemId,size,quantity}=req.body;
        const user=await userModel.findById(userId);
        let cartData=await user.cartData;
        if(size){
            cartData[itemId][size]=quantity;
        }else{
            cartData[itemId]=quantity;
        }
        await userModel.findByIdAndUpdate(userId,{cartData})
        res.json({success:true,message:"Cart Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

const addToCart =async(req,res)=>{
    try {
        const {userId,itemId,size} =req.body;
    const user=await userModel.findById(userId);
    let cartData=await user.cartData || {};;
    if (size) {
        if (!cartData[itemId]) {
            cartData[itemId] = {}; // Initialize as an object if size is present
        }
        if (!cartData[itemId][size]) {
            cartData[itemId][size] = 0;
        }
        cartData[itemId][size] += 1;
    } else {
        // If size is NOT provided, store quantity directly as a number
        if (!cartData[itemId]) {
            cartData[itemId] = 0;
        }
        cartData[itemId] += 1;
    }
    await userModel.findByIdAndUpdate(userId,{cartData});
    res.json({success:true,message:"Product Added to the cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
   

}

export {getCart,updateCart,addToCart};