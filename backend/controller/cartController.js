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
        const fsize = size || "default";
        if(fsize){
            cartData[itemId][fsize]=quantity;
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
        const fsize = size || "default";
    const user=await userModel.findById(userId);
    let cartData=await user.cartData || {};;
    if (fsize) {
        if (!cartData[itemId]) {
            cartData[itemId] = {}; // Initialize as an object if size is present
        }
        if (!cartData[itemId][fsize]) {
            cartData[itemId][fsize] = 0;
        }
        cartData[itemId][fsize] += 1;
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

const removeFromCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        if (!userId || !itemId) {
            return res.status(400).json({ message: 'Missing userId or itemId' });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        let cartData = user.cartData || {};
        const fsize = size || "default";

        if (cartData[itemId]) {
            const itemSizes = Object.keys(cartData[itemId]);

            // Normalize size string
            const normalize = str => str.toLowerCase().trim();
            const matchedSize = itemSizes.find(s => normalize(s) === normalize(fsize));

            if (matchedSize) {
                delete cartData[itemId][matchedSize];

                // Remove item completely if no sizes left
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }

                await userModel.findByIdAndUpdate(userId, { cartData });
                return res.status(200).json({ message: 'Item removed from cart successfully', cart: cartData });
            }
        }

        return res.status(404).json({ message: 'Item with specified size not found in cart' });

    } catch (error) {
        console.error('Error removing item from cart:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};




export {getCart,updateCart,addToCart,removeFromCart};