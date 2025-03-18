import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Hashed password
    companyName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true }, // City name for text-based search
    village: { type: String, required: true }, // Village name for text-based search
    location: {
        type: { type: String, default: "Point" },
        coordinates: { type: [Number], required: true }, // [longitude, latitude]
    },
    createdAt: { type: Date, default: Date.now }
});



const vendorModel=mongoose.models.vendor || mongoose.model("vendor",vendorSchema);

export default vendorModel;