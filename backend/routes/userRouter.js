import express from "express";
import { adminLogin, adminRegister, loginUser, registerUser } from "../controller/userController.js";

const userRouter = express.Router()

userRouter.post('/login',loginUser)
userRouter.post('/register',registerUser)
userRouter.post('/adminLogin',adminLogin)
userRouter.post('/adminRegister',adminRegister)

export default userRouter;