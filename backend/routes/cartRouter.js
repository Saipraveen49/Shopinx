import express from "express"
import { addToCart, getCart, removeFromCart, updateCart } from "../controller/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post('/add',authUser,addToCart);
cartRouter.post('/get',authUser,getCart);
cartRouter.post('/update',authUser,updateCart);
cartRouter.post('/remove',authUser,removeFromCart);
export default cartRouter;