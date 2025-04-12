import vendorModel from "../models/vendorModel.js";

export const getStores = async (req, res) => {
    try {
        const stores = await vendorModel.find({});
        if (!stores || stores.length === 0) {
            return res.send({ success: false, message: "No stores found" });
        }
        res.send({ success: true, stores });
    } catch (error) {
        console.log(error);
        res.send({ success: false, message: error.message });
    }
};
