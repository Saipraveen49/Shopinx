import jwt from "jsonwebtoken"
import vendorModel from "../models/vendorModel.js";


const adminAuth =async (req, res,next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: "Login Again not Authorized" });
    }
    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        const vendor = await vendorModel.findById(token_decode.id);  // Fetch vendor from DB

        if (!vendor) {
            return res.status(401).json({ success: false, message: "Vendor Not Found" });
        }
        req.vendorId =token_decode.id;
        next();
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default adminAuth