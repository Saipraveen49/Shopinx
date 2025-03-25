import express from "express"
import connectDb from "./config/mongodb.js";
import dotenv from "dotenv"
import userRouter from "./routes/userRouter.js";
import cartRouter from "./routes/cartRouter.js";
import productRouter from "./routes/productRoute.js";
import connectCloudinary from './config/cloudinary.js'
dotenv.config();

const port = process.env.PORT || 3000

const app=express();
app.use(express.json())
connectDb();
connectCloudinary();
app.get('/',(req,res)=>{
    res.send("Welcome to the server");
})
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter);
app.use('/api/product',productRouter);

app.listen(port,()=>{
    console.log(`Server Running on localhost ${port}`);
})

{/*mongodb+srv://cheemakurthypraveen:saishopinx@cluster0.xdhfe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0*/}