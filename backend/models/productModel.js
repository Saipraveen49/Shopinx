import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  sizes: { type: Array, required: true },
  stock: { type: Number, required: true, default: 0 },
  images: [{ type: String }],
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: "Vendor", required: true },
  createdAt: { type: Date, default: Date.now }
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
