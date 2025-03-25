import mongoose from "mongoose";

const productSchema  = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    sizes: {type: Array, required: true},
    stock: { type: Number, required: true, default: 0 }, // Track stock availability
    images: [{ type: String }], // Array of image URLs
    vendorId: { type: String, required: true }, // Reference to Vendor
    createdAt: { type: Date, default: Date.now }
});

const productModel=mongoose.models.product || mongoose.model("product",productSchema);

export default productModel;